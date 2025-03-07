//nested object

const person = {
    name: "munim",
    1: "100",
    true: "yes",
    age: 23,
    friends: ["nibir", "apurbo", "tawseef"],
    details: {
        job: "yes",
        isMarrid: true,
        status: "not found",
        father: {
            name: "Md. Shahidul Islam",
            age: 59
        }
    }
}

// console.log(person.details.father.name)
// console.log(person.details.mother?.name) 
// if mother was not in the object, using (?) will not give an error message, it will give undefined.

// console.log(person["name"]);
console.log(person.details.father.name)
console.log(person["details"]["father"]["name"]);


// console.log(person.1);
console.log(person[1]);