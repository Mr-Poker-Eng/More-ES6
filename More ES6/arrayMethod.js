const products = [
    {id: 1, name: "iphone", color: "black", price: 1200, brand: "apple"},
    {id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi"},
    {id: 3, name: "samsung", color: "gold", price: 1500, brand: "sum"},
    {id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple"},
    {id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi"},
]

//find method
// const product = products.find(p => p.color === "gold");
// console.log(product)


//filter method
// const newProducts = products.filter(product => product.price > 2000);
// console.log(newProducts);

const newProducts = products.filter(p => p.id != 3);
console.log(newProducts);


// forEach Method
// products.forEach(product => {
//     // console.log(product)
//     if(product["color"] === "black"){
//         console.log(product)
//     }
// })