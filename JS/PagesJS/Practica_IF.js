console.log(`Funcionando Archivo: Practica_IF`);


function verificarEdad() {
    let edad = document.getElementById("edad").value
    let pais =  document.getElementById("pais").value

    console.log(`${edad} ${pais}`)
}


function verificarParInpar() {
    let numero3 = document.getElementById('numero3').value;
    let numeroConvertido = parseInt(numero3)
    let mensajeParImpar = document.getElementById("mensajeParImpar")

    if (numeroConvertido % 2 === 0) {
        mensajeParImpar.innerText = `Este numero es par`
        
    } else {
        mensajeParImpar.innerText = `Este numero es inpar`
    }
    
}


function evaluarNota() {
    let nota = document.getElementById("nota").value;
    let numeroConvertido = parseInt(nota)

    if (numeroConvertido >= 90) {
        alert(`Exelente nota`)
        
    } 
    else if(numeroConvertido >= 70) {
        alert("Aprobado")

    }
    else {
        
        alert("Desaprobado")
        
    }
}



function calcularDescuento() {

    let cantidadCompra = document.getElementById("monto").value;
    let descuento =10 * parseInt(cantidadCompra) / 100;

    

    if(cantidadCompra >= 100) {
        alert(`Tu descuento es de ${descuento}`)
      
    } else {
      alert(`Lo siento no hay descuento`)
    
}
}


function verificarMayorMenor() {
    let edad = document.getElementById("edadSimple").value

    if(edad >= 18) {
        alert(`Tienes ${edad} eres mayor de edad puedes ingresar.`)
      
    } else {
        alert(`Prohibido ingreso tienes ${edad} años.`)
      
    }
    
}