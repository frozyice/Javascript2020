let people = [];

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34
}

const person2 = {
    firstName: 'Steve',
    lastName: 'Jobs',
    age: 25
}

const person3 = {
    firstName: 'Susan',
    lastName: 'Smith',
    age: 30
}

people.push(person1);
people.push(person2);
people.push(person3);

console.log(people)

people.forEach(person =>{
    console.log(person.firstName);
})