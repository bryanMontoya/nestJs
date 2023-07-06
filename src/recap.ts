const myName = 'Brayan';
const myAge = 12;

const suma = (a: number, b: number) => {
    return a + b;
};

suma(12, 12);

class Persona {
    private age;
    private name;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    getSummary() {
        return 'My name is ${this.name} and I am ${this.age} years old';
    }

    setAge(age: number) {
        this.age = age;
    }
    setName(name: string) {
        this.name = name;
    }
}

const brayan = new Persona(13, 'Brayan');
brayan.setAge(12);
brayan.setName('Brayan Montoya');
brayan.getSummary();
