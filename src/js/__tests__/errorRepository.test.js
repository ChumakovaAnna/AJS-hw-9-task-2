import ErrorRepository from "../settingsGeneral/errorRepository";

describe("ErrorRepository", () => {
  const allErrors = new ErrorRepository();

  test("translate() has text", () => {
    const result = allErrors.translate(1);
    const expected = "Имя персонажа должно быть от 2 до 10 символов";
    expect(result).toBe(expected);
  });
  test("translate() has not text", () => {
    const result = allErrors.translate(4);
    const expected = "Unknown error";
    expect(result).toBe(expected);
  });
});
