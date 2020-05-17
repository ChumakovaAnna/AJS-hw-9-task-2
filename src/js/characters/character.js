/**
 * Основной класс для всех персонажей
 */
export default class Character {
  /**
   * @param  {string} name - имя персонажа
   */
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.damage = 0;
    this.stoned = false;
  }

  /**
   * Метод для повышения уровня персонажа
   */
  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      throw new Error("Нельзя повысить level умершего");
    }
  }

  /**
   * Метод, вызываемый, когда наступает смерть персонажа
   */
  death() {
    this.health = 0;
  }

  /**
   * Свойство, высчитывающее урон, в зависимости от типа нападающего и других свойств персонажа
   * и расстояния в клетках до цели
   * @param  {number} distance - расстояние в количестве клеток
   */
  set getDamage(distance) {
    if (this.type === "Daemon" || this.type === "Magician") {
      if (distance > 10 || distance < 0) {
        this.damage = 0;
      } else {
        this.damage = this.attack * (1 - (distance - 1) / 10);
        if (this.stoned) {
          this.damage -= Math.log2(distance) * 5;
        }
      }
    } else {
      this.damage = this.attack;
    }
  }

  /**
   * Свойство, отвечающее за действие заклятия "дурман"
   * @param  {boolean} value - действует заклятие или нет
   */
  set getStoned(value) {
    if (value) {
      this.stoned = true;
    }
  }
}
