let person = {
    name: "Etisyai", //within string it is a string
    age: 28, //number is just the number 
    isStudent: true, //boolean just means true or false
};

person.city = "Atlanta";

console.log(person.name);
console.log(person.age);

console.log(person["name"]);
console.log(person.city);