import { getHomepageContent } from "@/core/usecases/getHomepageContent";

describe("getHomepageContent usecase", () => {
  it("returns complete homepage content", async () => {
    const content = await getHomepageContent();

    expect(content.heroTitle).toBeTruthy();
    expect(content.heroSubtitle).toBeTruthy();
    expect(content.heroPrimaryCta).toBeTruthy();
    expect(content.heroSecondaryCta).toBeTruthy();
    expect(content.heroImageUrl).toMatch(/^\/images\//);

    expect(Array.isArray(content.highlights)).toBe(true);
    expect(content.highlights.length).toBeGreaterThan(0);

    content.highlights.forEach((h) => {
      expect(h.id).toBeTruthy();
      expect(h.title).toBeTruthy();
      expect(h.description).toBeTruthy();
    });
  });
});