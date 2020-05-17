import Validator from "../settingsGeneral/validator";

describe("validatorUsername true", () => {
  test("skyWalker", () => {
    const name = new Validator("skyWalker");
    expect(name.validatorUsername()).toBe(true);
  });
  test("AR4ANGEL", () => {
    const name = new Validator("AR4ANGEL");
    expect(name.validatorUsername()).toBe(true);
  });
  test("ALC3PO", () => {
    const name = new Validator("ALC3PO");
    expect(name.validatorUsername()).toBe(true);
  });
  test("E-two-E-four", () => {
    const name = new Validator("E-two-E-four");
    expect(name.validatorUsername()).toBe(true);
  });
  test("OB-_-1-_-CannotB", () => {
    const name = new Validator("OB-_-1-_-CannotB");
    expect(name.validatorUsername()).toBe(true);
  });
  test("ma573r", () => {
    const name = new Validator("ma573r");
    expect(name.validatorUsername()).toBe(true);
  });
  test("e404pagen0tf0und", () => {
    const name = new Validator("e404pagen0tf0und");
    expect(name.validatorUsername()).toBe(true);
  });
  test("Kai10_00Ren", () => {
    const name = new Validator("Kai10_00Ren");
    expect(name.validatorUsername()).toBe(true);
  });
});

describe("validatorUsername false", () => {
  test("#8)_0sip", () => {
    const name = new Validator("#8)_0sip");
    expect(() => { name.validatorUsername(); }).toThrow();
  });
  test("Zahar__E2_R2D2", () => {
    const name = new Validator("Zahar__E2_R2D2");
    expect(() => { name.validatorUsername(); }).toThrow();
  });
  test("антон", () => {
    const name = new Validator("антон");
    expect(() => { name.validatorUsername(); }).toThrow();
  });
  test("Kai1000Ren", () => {
    const name = new Validator("Kai1000Ren");
    expect(() => { name.validatorUsername(); }).toThrow();
  });
});
