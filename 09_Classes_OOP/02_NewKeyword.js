function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 3;

// console.log(multiplyBy5(4));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function product(name, price) {
    this.name = name;
    this.price = price

    this.increment = function () {
        this.price++;
        return this.price;
    };
}

product.prototype.printName = function () {
    console.log(`Product Name is ${this.name} and Price is ${this.price}`);
}


const chai = new product("chai", "10rs")
const coffee = new product("coffee", "50")
console.log(chai);
console.log(coffee.increment());
coffee.printName()
