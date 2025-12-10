import { POST } from "@/app/api/contact/route";
import { createJsonRequest, parseJsonResponse } from "./testUtils";

describe("POST /api/contact", () => {
  it("returns success for valid request", async () => {
    const req = createJsonRequest({
      name: "Max Mustermann",
      email: "max@example.com",
      message: "Ich plane eine Badsanierung.",
    });

    const response = await POST(req);
    const { status, json } = await parseJsonResponse(response);

    expect(status).toBe(200);
    expect(json.success).toBe(true);
    expect(json.referenceId).toMatch(/^FLS-/);
  });

  it("returns 400 for invalid request", async () => {
    const req = createJsonRequest({
      name: "",
      email: "",
      message: "",
    });

    const response = await POST(req);
    const { status, json } = await parseJsonResponse(response);

    expect(status).toBe(400);
    expect(json.success).toBe(false);
    expect(typeof json.error).toBe("string");
  });
});