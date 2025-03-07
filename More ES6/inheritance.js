class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price
    }
    move(){
        console.log("vehicle can move");
    }
}

class Bus extends vehicle{
    constructor(name, price, seat){
        super(name, price);
        this.seat = seat;
    }
    route(){
        console.log("dhaka to cox");
    }
}

const greenLine = new Bus("greenLine", "12", 50);
console.log(greenLine)
// greenLine.move()

class Truck extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load
    }
}