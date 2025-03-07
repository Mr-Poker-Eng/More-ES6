// const person = {
//     name: "munim",
//     action: function(){
//         console.log(this.name)
//     }
// }

// person.action();



class person{
    #status;
    constructor(name, age, status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }

    eat(){
        console.log(`${this.name} eat at 1 AM`);
    }

    relation(){
        console.log(this.#status);
    }
}
// # == private

const munimuddin = new person("munim", 23, "single");
// console.log(munimuddin.status)
munimuddin.relation()


// const kolim = new person("kolim", 62);

