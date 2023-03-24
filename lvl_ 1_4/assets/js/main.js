let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
unsereHaustiere[1].names.forEach((dogName) => {
  console.log(dogName);
});
const changeDogName = (oldName, newName) => {
  unsereHaustiere[1].names.forEach((dogName, index) => {
    if (dogName === oldName) {
      unsereHaustiere[1].names[index] = newName;
    }
  });
};
changeDogName("Knöpfchen", "Toby😃");
changeDogName("Pinselchen", "Boby😃");
changeDogName("Droopy", "Popy😃");
console.log(unsereHaustiere[1].names);
