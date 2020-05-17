/**
 * Класс, который хранит пользовательские настройки
 */
export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    this.userSettings = new Map();
  }

  /**
   * свойство, распределяющее и сохраняющее пользовательские настройки
   * @param  {string} ele - значение, выбранное пользователем
   */
  set newSetting(ele) {
    if (ele === "light" || ele === "gray") {
      this.userSettings.set("theme", ele);
    }
    if (ele === "pop" || ele === "rock" || ele === "chillout" || ele === "off") {
      this.userSettings.set("music", ele);
    }
    if (ele === "normal" || ele === "hard" || ele === "nightmare") {
      this.userSettings.set("difficulty", ele);
    }
  }

  /**
   * свойство, возвращающее все действующие настройки
   */
  get settings() {
    const set = new Map([...this.defaultSettings, ...this.userSettings]);
    return set;
  }
}
