class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return "Hi. I am " + this.name + "!";
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHome(){
        return !!this.homeLocation;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasHome()){
            description += ` My home is ${this.homeLocation}.`;
        }

        return description;
    }
}

const me = new Traveler("Ferenc Gutierrez", 30, "Houston");

console.log(me.getDescription());

const other = new Traveler();

console.log(other.getDescription());