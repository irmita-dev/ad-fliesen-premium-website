import { GET } from "@/app/api/services/route";
import { parseJsonResponse } from "./testUtils";

describe("GET /api/services", () => {
  it("returns services JSON array", async () => {
    const response = await GET();
    const { status, json } = await parseJsonResponse(response);

    expect(status).toBe(200);
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThan(0);

    json.forEach((s: any) => {
      expect(s).toHaveProperty("id");
      expect(s).toHaveProperty("title");
      expect(s).toHaveProperty("shortDescription");
      expect(s).toHaveProperty("slug");
    });
  });
});