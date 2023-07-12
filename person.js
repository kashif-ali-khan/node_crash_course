class person {
    constructor(name, age){
        this.name = name;
        this.age = age;        
    }

    greet(){
        console.log(`My name is ${this.name} and I am ${this.age} year old`)
    }

}

module.exports = person;