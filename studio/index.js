"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
var Cargo_1 = require("./Cargo");
var Rocket_1 = require("./Rocket");
var falcon9 = new Rocket_1.Rocket('Falcon 9', 7500);
// let astronauts: Astronaut[] = [
//    new Astronaut(75, 'Mae'),
//    new Astronaut(81, 'Sally'),
//    new Astronaut(99, 'Charles')
// ];
// for (let i = 0; i < astronauts.length; i++) {
//    let astronaut = astronauts[i];
//    let status = '';
//    if (falcon9.addAstronaut(astronaut)) {
//       status = "On board";
//    } else {
//       status = "Not on board";
//    }
//    console.log(`${astronaut.name}: ${status}`);
// }
var cargo = [
    new Cargo_1.Cargo(3107.39, "Satellite"),
    new Cargo_1.Cargo(1000.39, "Space Probe"),
    new Cargo_1.Cargo(753, "Water"),
    new Cargo_1.Cargo(541, "Food"),
    new Cargo_1.Cargo(2107.39, "Tesla Roadster"),
];
// for (let i = 0; i < cargo.length; i++) {
//    let c = cargo[i];
//    let loaded = '';
//    if (falcon9.addCargo(c)) {
//       loaded = "Loaded"
//    } else {
//       loaded = "Not loaded"
//    }
//    console.log(`${c.material}: ${loaded}`);
// }
// console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);
