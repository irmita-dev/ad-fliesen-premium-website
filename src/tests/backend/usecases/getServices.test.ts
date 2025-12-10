import { getServices } from "@/core/usecases/getServices";

describe("getServices usecase", () => {
  it("returns non-empty list of services with correct fields", async () => {
    const services = await getServices();

    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);

    services.forEach((s) => {
      expect(s.id).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.shortDescription).toBeTruthy();
      expect(s.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });
});