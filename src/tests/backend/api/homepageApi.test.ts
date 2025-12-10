import { GET } from "@/app/api/homepage/route";
import { parseJsonResponse } from "./testUtils";

describe("GET /api/homepage", () => {
  it("returns homepage content JSON", async () => {
    const response = await GET();
    const { status, json } = await parseJsonResponse(response);

    expect(status).toBe(200);
    expect(json.heroTitle).toBeTruthy();
    expect(json.highlights.length).toBeGreaterThan(0);
  });
});