class Persona {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName = () => {
    return `${this.name} ${this.surname}`
  }
}

const persona = new Persona('Cristian', 'Rojas');
console.log(persona.getFullName());


