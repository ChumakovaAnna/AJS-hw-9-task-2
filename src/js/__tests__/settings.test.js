import Settings from "../settingsGeneral/settings";

describe("Settings", () => {
  const usedSet = new Settings();

  test("newSettings", () => {
    usedSet.newSetting = "light";
    usedSet.newSetting = "pop";
    usedSet.newSetting = "normal";
    const result = Array.from(usedSet.settings);
    const expected = [
      ["theme", "light"],
      ["music", "pop"],
      ["difficulty", "normal"],
    ];
    expect(result).toEqual(expected);
  });
});
