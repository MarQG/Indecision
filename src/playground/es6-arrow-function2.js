const add = (a, b) => {
    return a + b;
}

console.log(add(2, 3, 4));

const user = {
    name: "Ferenc",
    cities: ["Houston", "Uvita", "Baytown"],
    printPlacesLived(){
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 10,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());