import { greet } from "../src/index";
describe("greet", () => {
  test("greets a person by name", () => {
    expect(greet("TypeScript")).toBe("Hello, TypeScript!");
  });
});
