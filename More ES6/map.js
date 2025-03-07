// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let temp = [];
// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const sum = element + 1;
//     temp.push(sum)
// }


// console.log(temp)


// map function

// for single line
// const newArray = numbers.map(number=>number+1);

//for multiple line 
// const newArray = numbers.map(number=>{
//     number = number + 2;
//     return number;
// });


// console.log(newArray)


// const numbers = [1, 2, 3, 4, 5, 6, 7]; 
// const squareArray = numbers.map(element => {
//     return element * element;
// });
// console.log(squareArray);



const friends = ["riddi", "nibir", "tawseef", "apurbo", "munim"];

const totalFriends = friends.map((friend, index) => {
    console.log(index);
    console.log(friend)
    // return friend;
})

// console.log(totalFriends)

// for(let i=0; i<friends.length; i++){
//     const element = friends[i];
//     console.log(element);
// }