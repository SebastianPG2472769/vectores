let edad = ["18","19","20","21","22","23"];

 console.log(edad);

let nombre = ["sebastian","eliana","paula","leonardo","mery","hernan"];

 console.log(nombre);

let apellido = ["pelaez","garcia","palacio","gaviria","petro","perez"];

 console.log(apellido);

let numero = ["3052229774","3114567443","3007804705","3145433546","3242312683","316206117"];

 console.log(numero);

let direccion = ["calle 63","calle 64","carrera 1","carrera 2","carrera 3","avenida 1"];

console.log(direccion);

for (let i = 0;i < nombre.length;i++){
    console.log(nombre[i] 
        + " " + apellido[i]
        + " " + numero[i]
        + " " + direccion[i]
        + " " + edad[i]);
        console.log(`${nombre[i]} ${apellido[i]} ${numero[i]} ${direccion[i]} ${edad[i]}`);
}
let persona = {"nombre":"sebastian","apellido":"pelaez","gustos":["futbol,baloncesto,pintar"]};
console.log(persona);
let cursos = [{
    "nombre":"ADSI",
    "id":"1",
    "fecha":"20220202",
    "duracion":10,
    "valor":"gratis"
},{
    "nombre":"ADSO",
    "id":"3",
    "fecha":"20230202",
    "duracion":110
    
},{
    "nombre":"RECURSOS HUMANOS",
    "id":"3",
    "fecha":"20230103",
    "duracion":5
},{
    "nombre":"CARPINTERIA",
    "id":"4",
    "fecha":"20211230",
    "duracion":10
}];
console.log(cursos);
