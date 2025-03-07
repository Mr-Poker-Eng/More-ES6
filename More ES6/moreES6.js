const person = {
    name: "munim",
    age: 23
}
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

delete person.age;
console.log(person)

const{age, name} = person;
// console.log(age);

const friends = ["rahim", "karim", "mahim"];


const [first, second, third] = friends;

// console.log(third);

// console.log(...friends)

const newFriends = ["munim", ...friends]
// console.log(...newFriends)

console.log("hi\n how are you\n i am fine")

// console.log(`hi
//     how are you
//     i am fine
//     what about you?
//     `)

console.log(`hi
    how are you ${newFriends[0]}
    i am fine
    what about you?
    `)