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

 clientes.forEach(element => {
     console.log(element.nombre,element.activo)
});




 console.log(personas[1].nombre)

 clientes.forEach(element => {

     if (element.activo == true) {
       console.log(element.nombre,element.activo)
    }

 });



 console.log(personas.length)





let  buscarNombre = personas.find(X =>X.nombre === "Ana") 

 console.log(buscarNombre)

 let buscarActivo = personas.find(X=>X.activo === true
)

 console.log(buscarActivo)


 function filtrar() {

    let valor = document.getElementById('sensitivo').value;
    console.log(valor)
     }


















//  Ejercicio 1

 function buscarDesdeInput() {
     let input1 = document.getElementById("buscarNombre").value
     let resultado = document.getElementById('resultadoBusqueda')

     let busqueda = personas.find(x => x.nombre === input1)

     if (busqueda) {
        resultado.innerHTML = `Se encontro a la persona ${busqueda.nombre}`
        
    } else {

         resultado.innerHTML = `No se encontro a la persona `
        resultado.classList.add("colorjs")
        
        
    }

    
 }






 //Ejercicio 2

  function primeraPersonaActiva() {
    let resultado = document.getElementById("resultadoActivo")

      let busqueda = personas.find(x => x.activo === true)
      if (busqueda) {
         resultado.innerHTML = `Primera persona encontrada ${busqueda.nombre}`
      } else {
       resultado.InnerHTML = `No se encontro nadie activo`
        
    }
    
 }




//Ejercicio 3

 function primeraMayorDeEdad() {

    let resultadoMayor = document.getElementById("resultadoMayor")

    let busqueda = personas.find(x => x.edad >= 18)

    if (busqueda) {
      resultadoMayor.innerHTML = `${busqueda.nombre} es la primera persona mayor de edad con ${ busqueda.edad} años`
    }


   else{
        alert("Nada inportante")  }
        
 }












// Ejercicio 4

 function mostrarTodasLasPersonas() {
    let listaPersonas = document.getElementById("listaPersonas")
    let thead = document.getElementById("thead")

     personas.forEach(element => {

        

         listaPersonas.innerHTML +=  `
        
       <li> ${element.nombre}  ${element.edad}  ${element.activo} </li>
        
        `


       
      
     } );
 }


// Ejercicio 5 



function mayoresDeEdad() {
    let listaMayores = document.getElementById("listaMayores")

    personas.forEach(element => {
        if (element.edad >= 18) {
            listaMayores.innerHTML += `<li> Nombre: ${element.nombre} Edad: ${element.edad} </li>`
            
        } else {

    
            
        }
        
    });
}













 //Ejercicio 6

 function personasActivas() {

    let resultado = document.getElementById("listaActivos")
    
 personas.forEach(element => {
      if (element.activo === true) {

        resultado.innerHTML += `<li> nombre: ${element.nombre}</li>`

        
  } 
        
    });
    
}

