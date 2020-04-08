//ejemplo de clase
class Persona {
    constructor(nombre, apellido, nacionalidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
    }

saludar(){
    return `Hola!, mi nombre es ${this.nombre} ${this.apellido} y tengo nacionalidad ${this.nacionalidad}! `;
}
}
//ejemplo de instancia:
const profesor = new Persona('Carlos', 'Astorga', 'Chilena');
//const profesor2 = new Persona('Claudia', 'Baeza', 'Chilena');

console.log(profesor.saludar());
//console.log(profesor2.saludar());