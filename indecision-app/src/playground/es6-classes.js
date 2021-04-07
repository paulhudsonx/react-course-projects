class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let description = super.getGreeting();

        if (!!this.homeLocation) {
            description += ` I am visiting from ${this.homeLocation}.`;
        }

        return description;
    }
}

const me = new Traveller("Paul Hudson", 56, 'Nuneaton');
console.log(me.getGreeting());
console.log(me.getDescription());
const you = new Person();
console.log(you.getGreeting());
console.log(you.getDescription());
