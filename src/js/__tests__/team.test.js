import Team from "../battlefield/team";

const daemon = { name: "Vlad", type: "daemon" };
const magician = { name: "Oleg", type: "magician" };

describe("Team", () => {
  test("team to array && add() without error", () => {
    const team = new Team();
    team.add(daemon);
    team.add(magician);
    const result = team.toArray();
    const expected = [
      { name: "Vlad", type: "daemon" },
      { name: "Oleg", type: "magician" },
    ];
    expect(result).toEqual(expected);
  });
  test("team addAll()", () => {
    const team = new Team();
    team.addAll(daemon, magician);
    const result = team.toArray();
    const expected = [
      { name: "Vlad", type: "daemon" },
      { name: "Oleg", type: "magician" },
    ];
    expect(result).toEqual(expected);
  });
  test("add() with error", () => {
    const team = new Team();
    team.add(daemon);
    team.add(magician);
    expect(() => {
      team.add(daemon);
    }).toThrow();
  });
});
