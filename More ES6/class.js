class product{
    constructor(name, price, brand, owner){
        // console.log(name, price, brand)
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.owner = owner;
    }

    details(){
        console.log(`here is the ${this.name}
            is the product details.
            `)
    }
}

const iphone = new product("iphone", "1234", "apple", "steve");
// console.log(iphone.details())
iphone.details()
// console.log(iphone)

const xiaomi = new product("redmi", 1000, "xiaomi", "unknowned");
console.log(xiaomi)
xiaomi.details()