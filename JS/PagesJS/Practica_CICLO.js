console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];


let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

//clientes.forEach(element => {
    //console.log(element.nombre,element.activo)
//});




console.log(personas[1].nombre)

clientes.forEach(element => {

    if (element.activo == true) {
        console.log(element.nombre,element.activo)
    }

});



console.log(personas.length)


// Ejercicio 1


let  buscarNombre = personas.find(X =>X.nombre === "Ana") 


console.log(buscarNombre)


let buscarActivo = personas.find(X=>X.activo === true
)

console.log(buscarActivo)




function filtrar() {

    let valor = document.getElementById('sensitivo').value;
    console.log(valor)
    
}

// Ejercicio 2

function buscarDesdeInput() {
    let input1 = document.getElementById("buscarNombre").value
    let resultado = document.getElementById('resultadoBusqueda')

    let busqueda = personas.find(x=>x.nombre === input1)

    if (busqueda) {
        resultado.innerHTML += `Encontrado a la persona ${busqueda.nombre}`
    } else {
        resultado.InnerHTML += `No encontrada a la persona`
        
    }
    
}


// Ejercicio 6

function primeraPersonaActiva() {
    let resultado = document.getElementById("resultadoActivo")

    let busqueda = personas.find(x=>x.activo === true)

    if (busqueda) {
        resultado.innerHTML = `Primera persona encontrada ${busqueda.nombre}`
    } else {
        resultado.InnerHTML = `No se encontro nadie activo`
        
    }
    
}


// function personasActivas() {

//     let resultado = document.getElementById("listaActivos")
    
// personas.forEach(element => {
//     if (element.activo === true) {

//         resultado.innerHTML += `<li> nombre: ${element.nombre}<li>`

        
//     } 
        
//     });
    
// }

