let person = {
  name: "Rizvan",
  age: 39,
  sayNameAge: () => {
    alert(`Mein Name ist ${person.name} und ich bin ${person.age} Jahre alt `);
  },
};
console.log(person.name);
console.log(person.age);


person.sayNameAge();
