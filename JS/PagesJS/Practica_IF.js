console.log(`Funcionando Archivo: Practica_IF`);


function verificarEdad () {
    let Edad = document.getElementById('edad').value;
    let Pais = document.getElementById('pais').value;
    
    if (Edad >= 18) { alert(`Eres mayor de edad en ${Pais}`)
        
    } else {
        alert(`No eres mayor de edad en ${Pais}`)
    }

}


function verificarEdad(arams) {
    let numero3 = document.getElementById('numero3').value;
    let numeroConvertido = parseInt(numero3)
    let mensajeParImpa = document.getElementById("mensajeParImpa").value

    if (numeroConvertido % 2 === 0) {
        mensajeParImpa.innerText = `Este numero es par`
        
    } else {
        mensajeParImpa.innerText = `Este numero es inpar`
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