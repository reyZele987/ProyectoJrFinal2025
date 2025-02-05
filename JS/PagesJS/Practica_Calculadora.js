
console.log(`Funcionando Archivo: Practica_Calculadora`);

 function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    console.log('Mostrar nombre:',nombre);
    console.log('Mostrar Edad:',edad);

}

function realizarSuma () {
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value
    let resultado = document.getElementById('resultado');
    
    let suma = parseInt(numero1) + parseInt(numero2)
    

     resultado.innerHTML = `${suma}`

   
}