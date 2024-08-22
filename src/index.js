// import animals, { useAnimals } from "./data";

// console.log(animals);

// const [cat, dog] = animals;
// console.log(dog);

// const { name, sound } = dog;
// console.log(name);

// const { name: dogName, sound: dogSound } = dog;
// console.log(dogName);

// const [name, makeSound] = useAnimals(dog);
// console.log(makeSound());

// CHALLENGE: uncomment the code below and see the car stats rendered

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

//tesla
const { speedStats, coloursByPopularity } = tesla;
const [teslaTopColour] = coloursByPopularity;
const { topSpeed: teslaTopSpeed } = speedStats;

//honda
const { speedStats: hondaSpeedStats, coloursByPopularity: hondaColors } = honda;
const { topSpeed: hondaTopSpeed } = hondaSpeedStats;
const [hondaTopColour] = hondaColors;
console.log(hondaTopColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
