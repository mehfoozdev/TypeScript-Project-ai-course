class Persons{
    name:string ;
    age:number;
    hobbies:string[];

    constructor(name:string, age:number, hobbies:string[]){
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }
}

const Person1 = new Persons('Mehfooz Ali', 23, ['cricket', 'football'])
const Person2 = new Persons('Faizan Ali', 26, ['cricket', 'gym'])

console.log(...rest : Person1)