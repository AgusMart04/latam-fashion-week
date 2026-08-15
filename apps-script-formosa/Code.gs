// ============================================
// LATAMFW FORMOSA - Google Apps Script
// Endpoint para formulario con uploads (base64)
// ============================================

const SPREADSHEET_ID = "1rLoX5tjdQAnR8sAuF_2Wa_r0SB-3SGP5Ki269pN2788";
const DRIVE_FOLDER_ID = "13zBzUM3zNHKSQs42ZpCNwLJU8lxpaxnf";

const GOLD = "#C9A96E";
const DARK = "#1A1A1A";

// ============================================
// GET - Health check + preflight CORS
// ============================================
function doGet(e) {
  const action = e.parameter.action;

  if (action === "check_duplicate") {
    const email = (e.parameter.email || "").toLowerCase().trim();
    const purpose = (e.parameter.purpose || "").toLowerCase().trim();

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName("Postulaciones");

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ exists: false, error: "No hay hoja" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const rows = sheet.getDataRange().getValues();
    const duplicado = rows.some(function(row, i) {
      if (i === 0) return false;
      const emailFila = (row[2] || "").toString().toLowerCase().trim();
      const purposeFila = (row[3] || "").toString().toLowerCase().trim();
      return emailFila === email && purposeFila === purpose;
    });

    return ContentService
      .createTextOutput(JSON.stringify({ exists: duplicado }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================
// POST - Recepción de formularios
// ============================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    Logger.log("POST recibido: " + JSON.stringify({ email: data.email, purposeLabel: data.purposeLabel }));

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName("Postulaciones");

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: "Ejecuta setup() primero." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // ============================================
    // 1. VALIDAR FORMATO DE EMAIL
    // ============================================
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email || "")) {
      Logger.log("Email inválido: " + data.email);
      return ContentService
        .createTextOutput(JSON.stringify({
          status: "email_invalido",
          message: "El correo ingresado no es válido. Verifique que no tenga espacios ni caracteres especiales."
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // ============================================
    // 2. VERIFICAR DUPLICADO (mismo email + mismo propósito)
    // ============================================
    const rows = sheet.getDataRange().getValues();
    const emailNormalizado = data.email.toLowerCase().trim();
    const categoryLabel = (data.purposeLabel || data.purpose || "").toLowerCase().trim();

    Logger.log("Buscando duplicado - email: '" + emailNormalizado + "', purpose: '" + categoryLabel + "'");

    const duplicado = rows.some(function(row, i) {
      if (i === 0) return false;
      const emailFila = (row[2] || "").toString().toLowerCase().trim();
      const purposeFila = (row[3] || "").toString().toLowerCase().trim();
      Logger.log("  Fila " + i + ": email='" + emailFila + "', purpose='" + purposeFila + "'");
      return emailFila === emailNormalizado && purposeFila === categoryLabel;
    });

    if (duplicado) {
      Logger.log("DUPLICADO DETECTADO para: " + emailNormalizado + " / " + categoryLabel);
      return ContentService
        .createTextOutput(JSON.stringify({
          status: "duplicado",
          message: "Ya existe una inscripción con este correo para esta categoría. Si te inscribiste anteriormente y cometiste un error, comunicate a: latamfwargentina@gmail.com"
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log("No es duplicado, insertando fila...");

    // ============================================
    // 3. INSERTAR FILA
    // ============================================
    const category = data.purposeLabel || data.purpose || "Otro";
    const today = Utilities.formatDate(new Date(), "America/Argentina/Cordoba", "yyyy-MM-dd HH:mm");

    let folderUrl = "";
    if (data.contractFileBase64 || data.formFileBase64) {
      folderUrl = saveFilesToDrive(data, category, today);
    }

    const row = [
      new Date(),
      data.name || "",
      data.email || "",
      category,
      data.age || "",
      data.height || "",
      data.country || "",
      data.ig || "",
      data.portfolio || "",
      data.exp || "",
      data.brand || "",
      data.company || "",
      data.specialty || "",
      data.equipment || "",
      data.message || "",
      data.contractAccepted === "on" ? "Si" : "",
      folderUrl
    ];

    sheet.appendRow(row);

    // Formatear la última fila
    const lastRow = sheet.getLastRow();
    const newRow = sheet.getRange(lastRow, 1, 1, row.length);
    newRow.setFontFamily("Inter");
    newRow.setFontSize(10);
    newRow.setFontColor(DARK);
    newRow.setVerticalAlignment("middle");

    if (lastRow % 2 === 0) {
      newRow.setBackground("#FAFAFA");
    } else {
      newRow.setBackground("#FFFFFF");
    }

    newRow.setBorder(false, false, false, false, false, false, "#E0E0E0", SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(lastRow, 1).setNumberFormat("dd/MM/yyyy HH:mm");

    Logger.log("Fila insertada correctamente. Total filas: " + lastRow);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Inscripción registrada correctamente.",
        folderUrl: folderUrl
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("ERROR: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: "Error al procesar la inscripción. Intente de nuevo o contactenos a: latamfwargentina@gmail.com"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function saveFilesToDrive(data, category, today) {
  const parentFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);

  const categoryName = sanitizeFileName(category);
  let categoryFolder;
  const catIter = parentFolder.getFoldersByName(categoryName);
  if (catIter.hasNext()) {
    categoryFolder = catIter.next();
  } else {
    categoryFolder = parentFolder.createFolder(categoryName);
  }

  const personName = sanitizeFileName(data.name || "sin-nombre");
  const folderName = personName + "_" + today.replace(" ", "_");
  const personFolder = categoryFolder.createFolder(folderName);

  if (data.contractFileBase64) {
    const blob = Utilities.newBlob(
      Utilities.base64Decode(data.contractFileBase64),
      "application/octet-stream",
      data.contractFileName || "contrato.pdf"
    );
    personFolder.createFile(blob);
  }

  if (data.formFileBase64) {
    const blob = Utilities.newBlob(
      Utilities.base64Decode(data.formFileBase64),
      "application/octet-stream",
      data.formFileName || "formulario.pdf"
    );
    personFolder.createFile(blob);
  }

  return personFolder.getUrl();
}

function sanitizeFileName(name) {
  return name
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .replace(/\s+/g, "_")
    .substring(0, 100);
}

// ============================================
// TEST - Ejecutar para verificar que el duplicate check funciona
// ============================================
function testDuplicateCheck() {
  const testEmail = "test@test.com";
  const testPurpose = "Postularme como Modelo";

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("Postulaciones");

  if (!sheet) {
    Logger.log("ERROR: No existe la hoja 'Postulaciones'");
    return;
  }

  const rows = sheet.getDataRange().getValues();
  Logger.log("Total filas en hoja: " + rows.length);

  const emailNormalizado = testEmail.toLowerCase().trim();
  const categoryLabel = testPurpose.toLowerCase().trim();

  Logger.log("Buscando: email='" + emailNormalizado + "', purpose='" + categoryLabel + "'");

  rows.forEach(function(row, i) {
    const emailFila = (row[2] || "").toString().toLowerCase().trim();
    const purposeFila = (row[3] || "").toString().toLowerCase().trim();
    Logger.log("Fila " + i + ": email='" + emailFila + "', purpose='" + purposeFila + "'" +
      (emailFila === emailNormalizado && purposeFila === categoryLabel ? " ← MATCH" : ""));
  });

  const duplicado = rows.some(function(row, i) {
    if (i === 0) return false;
    const emailFila = (row[2] || "").toString().toLowerCase().trim();
    const purposeFila = (row[3] || "").toString().toLowerCase().trim();
    return emailFila === emailNormalizado && purposeFila === categoryLabel;
  });

  Logger.log("Resultado duplicado: " + duplicado);
}

// ============================================
// SETUP - Ejecutar UNA VEZ para crear/formatear la hoja
// ============================================
function setup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName("Postulaciones");

  if (!sheet) {
    sheet = ss.insertSheet("Postulaciones");
  }

  sheet.clear();

  const headers = [
    "Fecha", "Nombre", "Email", "Categoria", "Edad", "Altura",
    "Pais", "Instagram", "Portfolio", "Experiencia", "Marca",
    "Empresa", "Especialidad", "Equipo", "Mensaje",
    "Contrato Aceptado", "Carpeta Drive"
  ];

  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);

  headerRange.setFontFamily("Inter");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(10);
  headerRange.setFontColor("#FFFFFF");
  headerRange.setBackground(GOLD);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  headerRange.setWrap(true);
  headerRange.setBorder(true, true, true, true, true, true, DARK, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  sheet.setRowHeight(1, 40);

  const colWidths = [130, 180, 220, 200, 60, 70, 130, 160, 200, 120, 160, 160, 140, 140, 250, 120, 280];
  colWidths.forEach(function(w, i) {
    sheet.setColumnWidth(i + 1, w);
  });

  sheet.setFrozenRows(1);

  const categories = [
    "Comprar Entradas",
    "Ser Empresa",
    "Postularme como Diseñador",
    "Postularme como Modelo",
    "Postularme como Maquillador",
    "Postularme como Estilista",
    "Postularme como Fotógrafo",
    "Postular mi Marca de Ropa",
    "Postularme como Expositor",
    "Prensa",
    "Buyer Profesional",
    "Asistente de Producción",
    "Asistente de Backstage",
    "Vestuarista",
    "Otro"
  ];

  const catRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(categories, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange("D2:D1000").setDataValidation(catRule);

  const contractRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["Si", ""], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange("P2:P1000").setDataValidation(contractRule);

  sheet.getRange("A2:A1000").setNumberFormat("dd/MM/yyyy HH:mm");
  sheet.getRange("B2:Q1000").setVerticalAlignment("middle");

  Logger.log("Hoja Postulaciones creada y formateada correctamente");
}