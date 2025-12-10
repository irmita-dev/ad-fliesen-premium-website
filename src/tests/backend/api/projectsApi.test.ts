import { GET } from "@/app/api/projects/route";
import { parseJsonResponse } from "./testUtils";

describe("GET /api/projects", () => {
  it("returns projects JSON array", async () => {
    const response = await GET();
    const { status, json } = await parseJsonResponse(response);

    expect(status).toBe(200);
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThan(0);
  });
});