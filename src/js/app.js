import Daemon from "./characters/types/daemon";

console.log("worked");
const daemon = new Daemon("Choo");
daemon.getDamage = 2;
console.log(daemon.damage);

daemon.getStoned = true;
daemon.getDamage = 2;
console.log(daemon.damage);
