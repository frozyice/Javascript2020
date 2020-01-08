
const name = "Karmo";
const age = 33;
const city = "Tallinn";
const job = "Jr Software Developer";
console.log("Name", name);
console.log('Age:', age, typeof(age));

function hello(){
    console.log("hello");
}

//hello();

//let html = '<ul><li>Name:'+name+'</li></ul>';

//Template Literal ES6
let html = `
    <ul>
        <li>Name: ${name}</li>
    </ul>
`;
document.body.innerHTML = html;

//arrays
const numbers1 = [1,2,3,4,5];
numbers1.push(6);
numbers1.unshift(0);
numbers1.shift();
numbers1.slice(2,1);

let removedElement = numbers1.pop();
console.log(numbers1);
console.log(typeof(numbers1[0]));

let mixedArray = [22, "banana", true];
mixedArray.forEach(element => {
    console.log(element);
    console.log(typeof(element))
    
});

console.log(mixedArray[1].length)

//objects

let john = {
    name: "John",
    age: 30
}

let steve = {
    name: "Steve",
    age: 100
}

let people = [john, steve];
console.log(people);

people.forEach(person => {
    console.log('${person.name} is ${person.age} years old.');

});
