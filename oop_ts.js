var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var Person1 = new Persons('Mehfooz Ali', 23, ['cricket', 'football']);
var Person2 = new Persons('Faizan Ali', 26, ['cricket', 'gym']);
console.log(Person1);
