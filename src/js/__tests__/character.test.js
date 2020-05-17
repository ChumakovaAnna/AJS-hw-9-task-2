import Character from "../characters/character";
import Magician from "../characters/types/magician";
import Undead from "../characters/types/undead";

test("created Character", () => {
  const result = new Character("Oleg");
  const expected = {
    name: "Oleg",
    health: 100,
    level: 1,
    damage: 0,
    stoned: false,
  };
  expect(result).toEqual(expected);
});

test("Character dead", () => {
  const magician = new Magician("Vlad");
  magician.death();
  const expected = {
    name: "Vlad",
    type: "Magician",
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
    damage: 0,
    stoned: false,
  };
  expect(magician).toEqual(expected);
});

describe("Character LevelUp", () => {
  const magician = new Magician("Sveta");
  test("Character LevelUp", () => {
    magician.levelUp();
    const expected = {
      name: "Sveta",
      type: "Magician",
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
      damage: 0,
      stoned: false,
    };
    expect(magician).toEqual(expected);
  });

  test("Character dead and LevelUp", () => {
    magician.death();
    expect(() => {
      magician.levelUp();
    }).toThrow();
  });
});

describe("getDamage", () => {
  const magician = new Magician("Tupik");
  magician.attack = 100;
  test("magician without stoned", () => {
    magician.getDamage = 2;
    expect(magician.damage).toBe(90);
  });

  test("magician with stoned", () => {
    magician.getStoned = true;
    magician.getDamage = 2;
    expect(magician.damage).toBe(85);
  });

  test("undead, without getDamage", () => {
    const undead = new Undead("Go");
    undead.getDamage = 2;
    expect(undead.damage).toBe(25);
  });

  test("Incorrect distance", () => {
    magician.getDamage = 20;
    expect(magician.damage).toBe(0);
  });
});

test("getStoned", () => {
  const magician = new Magician("Tupik");
  magician.getStoned = false;
  expect(false).toBe(magician.stoned);
});
