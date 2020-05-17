/**
 * Класс для хранения персонажей команды в поле
 */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  /**
   * Метод для добавления выбранного персонажа в команду
   * @param  {string} char - выбранный персонаж
   */
  add(char) {
    if (this.members.has(char)) {
      throw new Error("Этот персонаж уже выбран");
    }
    this.members.add(char);
  }

  /**
   * Метод длы выбора всех персонажей в команду
   * @param  {} ...rest - все персонажи
   */
  addAll(...rest) {
    rest.forEach((ele) => {
      this.members.add(ele);
    });
  }

  /**
   * Метод для конвертации Set в массив
   */
  toArray() {
    return Array.from(this.members);
  }
}
