# AGENTS.md — Reglas del proyecto LATAMFW

## Regla principal

NO tocar archivos críticos sin preguntar primero.

Archivos críticos:
- `index.html`
- `src/routes/__root.tsx`
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- Cualquier archivo de configuración de Vercel
- Google Apps Script vinculado al sheet

Si no estás seguro de si un archivo es crítico → preguntar.

---

## Cambios quirúrgicos

Tocar únicamente lo necesario.

NO:
- refactorizar código no relacionado
- reformatear archivos enteros sin motivo
- cambiar patrones existentes arbitrariamente
- "aprovechar" para rehacer otras partes
- limpiar cosas ajenas a la tarea actual

SI:
- mantener cambios acotados
- minimizar riesgo
- respetar estructura existente
- seguir convenciones actuales del proyecto

---

## Simplicidad primero

Preferir:
- código simple y entendible
- soluciones pequeñas
- menor cantidad de abstracciones

Evitar:
- overengineering
- abstracciones innecesarias
- boilerplate innecesario
- patterns agregados "por si acaso"

Si una solución más simple resuelve el problema igual de bien → usar la más simple.

---

## Leer antes de escribir

Antes de agregar o modificar código:
- leer el archivo completo o la sección relevante
- entender por qué está estructurado así
- revisar imports y exports relacionados

NO asumir que algo está mal solo porque es diferente a tu preferencia.

---

## Creación de archivos

### Permitido sin preguntar
- componentes pequeños y aislados
- helpers o utilidades simples
- cambios en archivos existentes

### Requiere validación
- nuevas carpetas
- nuevos archivos de configuración
- nuevas rutas
- dependencias nuevas
- cambios estructurales

Cuando crees un archivo: explicar por qué existe, dónde va, qué responsabilidad tiene.

---

## Dependencias

NO:
- agregar librerías innecesarias
- instalar paquetes sin justificar
- actualizar dependencias automáticamente

SI:
- preferir soluciones nativas/simples
- justificar cada nueva dependencia
- pedir aprobación antes de instalar

---

## Idioma

Todo texto visible del sitio debe estar en español neutro latinoamericano.

NO usar:
- voseo (tenés, podés, hacés)
- modismos argentinos (che, boludo, re)
- conjugaciones de voseo (sos, venís, querés)

SI usar:
- ustedes (tienen, pueden, quieren)
- formas neutras (podés → pueden, tenés → tienen)

---

## Comunicación

### Separar hechos de hipótesis
- "lo verifiqué" vs "creo que" vs "debería funcionar"

### NO usar lenguaje engañosamente confiado
Evitar frases como "ya quedó perfecto", "todo funciona" si no fue realmente verificado.

### Decir explícitamente qué NO fue validado
Siempre aclarar qué se probó, qué no se probó, qué edge cases faltan.

---

## Git workflow

- Commits pequeños y claros
- Mensajes descriptivos: "fix auth redirect", "add form validation"
- NO commits como "fix", "changes", "update"
- Verificar que no haya errores TypeScript antes de commit

---

## Deploy

- SIEMPRE verificar `npx tsc --noEmit` antes de push a main
- NO hacer push directo a main si el cambio es complejo
- Si un cambio tiene riesgo → explicar impacto antes de ejecutar

---

## Google Apps Script

- NO modificar el script sin testear primero en el sheet
- Cualquier cambio en la estructura del sheet requiere backup
- El script usa base64 para archivos — no cambiar a multipart

---

## Formulario de postulaciones

- La estructura de campos está definida (nombre, email, teléfono, etc.)
- NO cambiar lógica de validación sin preguntar
- Los archivos se suben en base64 al Google Sheet
- Si se agregan campos nuevos → discutir primero

---

## Testing y verificación

NUNCA afirmar que algo funciona sin haberlo verificado.

Siempre especificar:
- qué fue probado
- cómo fue probado
- qué NO fue probado
- qué edge cases faltan

---

## Anti-patterns prohibidos

- NO overengineering
- NO archivos +300 líneas (dividir)
- NO componentes +500 líneas (dividir en subcomponentes)
- NO hooks que hagan más de 3 cosas
- NO magic numbers (usar constantes)
- NO any innecesario en TypeScript

---

## Skills utilizadas

Al final de cada mensaje donde se use una skill, reportar cuáles se usaron.

Formato:
```
Skills utilizadas: [nombre1], [nombre2]
```

Si no se usó ninguna skill → no reportar nada.

Ejemplo:
> Listo, el archivo está creado.
> 
> Skills utilizadas: frontend-design

Esto sirve para:
- transparencia sobre qué herramientas se activaron
- debugging si algo sale mal
- seguimiento de qué skills se usan en el proyecto

---

## Principio final

Si hay duda entre:
- velocidad vs seguridad → **seguridad**
- intuición vs verificación → **verificación**
- suposición vs pregunta → **pregunta**
