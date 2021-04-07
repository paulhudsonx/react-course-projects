

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1000));

const user = {
    name: 'Paul',
    cities: ['London', 'Cardiff', 'Burbage'],
    printPlaces() { // ES6 function
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })

    }
};

user.printPlaces();

const multiplier = {
    numbers: [5, 4, 3],
    multiplier: 10,
    multiply() {
        return this.numbers.map((n) => n * this.multiplier);
    }
}


console.log(multiplier.multiply());
