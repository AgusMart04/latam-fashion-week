export const config = {
  matcher: ["/directo"],
};

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const res = await fetch(url.origin);
  const html = await res.text();

  const modified = html.replace(
    /content="https?:\/\/[^"]*\/og-image\.jpg"/g,
    (match) => match.replace("og-image.jpg", "og-directo.jpg"),
  );

  return new Response(modified, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
