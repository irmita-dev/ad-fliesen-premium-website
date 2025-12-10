export function createJsonRequest(body: unknown, method = "POST") {
  return new Request("http://localhost/api/test", {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}

export async function parseJsonResponse(response: Response) {
  const json = await response.json();
  return { status: response.status, json };
}