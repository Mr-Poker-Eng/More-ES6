// const person = {
//     name: "munim",
//     age: 12,
//     1: 100,
//     father: {
//         name: "Md. Shahidul Islam",
//         age: 57
//     }
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// console.log(person.name)
// console.log(person[1])

// console.log(person.mother?.name);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNumbers = numbers.map(num => num * num);
// console.log(newNumbers)


const products = [
    {id: 1, name: "iphone", color: "black", price: 1200, brand: "apple"},
    {id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi"},
    {id: 3, name: "samsung", color: "gold", price: 1500, brand: "sum"},
    {id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple"},
    {id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi"},
]


// const singleProduct = products.find(p => p.id === 3);
// console.log(singleProduct)


// const newProduct = products.filter(p => p.color === "gold");
// console.log(newProduct)

// const newProduct = products.filter(p => p.id != 3);
// console.log(newProduct)

// products.forEach(p => {
//     if(p.name === "iphone"){
//         console.log(p)
//     }
// })



class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class munim extends person{
    constructor (name, age, status){
        super(name, age);
        this.status = status;
    }
}

// const munim = new person("munim", 23);
// console.log(munim)


// const product = {name: 'laptop', model: 'yoga 3', price: 49000, dusk: '512SSD'}

// const {price} = product;
// console.log(price)


const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);