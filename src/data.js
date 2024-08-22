const animals = [
  { name: "cat", sound: "meow" },
  {
    name: "dog",
    sound: "woof",
    foodRequirements: {
      food: 3,
      water: 2,
    },
  },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      return animal.sound;
    },
  ];
}

export default animals;
export { useAnimals };
