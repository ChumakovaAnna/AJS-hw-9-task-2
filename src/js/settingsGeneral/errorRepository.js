/**
 * Класс для всех ошибок проекта
 */
export default class ErrorRepository {
  constructor() {
    this.collectionErrors = new Map([
      [1, "Имя персонажа должно быть от 2 до 10 символов"],
      [2, "Этот персонаж уже выбран"],
      [3, "Нельзя повысить level умершего"],
    ]);
  }

  /**
   * Метод для получения текста ошибки по коду
   * @param  {number} code - код ошибки
   */
  translate(code) {
    return (this.collectionErrors.has(code) ? this.collectionErrors.get(code) : "Unknown error");
  }
}
