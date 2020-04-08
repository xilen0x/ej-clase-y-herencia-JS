//ejemplo de herencia usando la misma clase creada
class Persona {
    constructor(nombre, apellido, nacionalidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
    }

    saludar() {
        return `Hola!, mi nombre es ${this.nombre} ${this.apellido} y soy ${this.nacionalidad}! `;
    }
}
// aqui creo mi nueva clase que heredará los atributos de mi clase Persona
class Profesor extends Persona {
    constructor(nombre, apellido, nacionalidad, edad, sexo){
    super(nombre, apellido, nacionalidad);
    this.edad = edad;
    this.sexo = sexo;
    }
    invitar() {
        return `Te esperamos si tienes al menos ${this.edad} años y eres de sexo ${this.sexo}.`
    }
}
const instancia1 = new Profesor('Carlos', 'Astorga', 'Chilena', '21', 'Masculino');
console.log(instancia1)
