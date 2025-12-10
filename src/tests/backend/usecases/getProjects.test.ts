import { getProjects } from "@/core/usecases/getProjects";

describe("getProjects usecase", () => {
  it("returns projects with required fields", async () => {
    const projects = await getProjects();

    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);

    projects.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.location).toBeTruthy();
      expect(Array.isArray(p.images)).toBe(true);
      expect(p.images.length).toBeGreaterThan(0);
      p.images.forEach((img) => {
        expect(img).toMatch(/^\/images\//);
      });
    });
  });
});