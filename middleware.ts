export const config = {
  matcher: ["/directo", "/inscripciones", "/inscripciones-formosa"],
};

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const res = await fetch(url.origin);
  const html = await res.text();

  let modified = html;

  if (url.pathname === "/directo") {
    modified = html.replace(
      /content="https?:\/\/[^"]*\/og-image\.jpg"/g,
      (match) => match.replace("og-image.jpg", "og-directo.jpg"),
    );
  } else if (url.pathname === "/inscripciones") {
    modified = html.replace(
      /content="https?:\/\/[^"]*\/og-image\.jpg"/g,
      (match) => match.replace("og-image.jpg", "og-inscripciones.jpg"),
    );
  } else if (url.pathname === "/inscripciones-formosa") {
    modified = html.replace(
      /content="https?:\/\/[^"]*\/og-image\.jpg"/g,
      (match) => match.replace("og-image.jpg", "og-inscripciones-formosa.jpg"),
    );
  }

  return new Response(modified, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
