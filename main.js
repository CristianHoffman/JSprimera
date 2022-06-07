//////////////algoritmo en ciclo////////////////

let count = 0
while (count < 20) {
    console.log(count)
    if (count == 15){
        break
    }
    count++;
}


for (let index = 0; index < 20; index++) {
    console.log(index)
    
}

////////clave con while////////

// let clave = prompt("ingrese su clave")

// while (clave !== "asdasd") {
//     entrada = prompt("ingrese nuevamente la clave")
    

// }
// alert("Correcto")

//////////function///////////////////
function indicarMoneda() {
    
  let moneda = prompt ("Que auto te compras? ingrese su monto")
    
    if (moneda >=800 && moneda <= 999){
        alert("Podes comprarte el auto azul")
    }else if (moneda >=1000 && moneda <1999){
        alert("Podes comprarte el auto rojo")
    }else if (moneda >=2000 && moneda <=2999){
        alert("Podes comprarte el blanco")
    }else{
        alert("no podes comprarte ninguno")
    }
}

indicarMoneda ()

/////////////funciones parametros/////////////

function resta(num1, num2 ) {
    let res = num1 - num2;
    document.write("el resultado es " + res)
    
}
 resta (33, 12)

 //////////funcion flecha ////////////

 const saludo = (nombre) => { 
    document.write("<br>")
     document.write("Hola " + nombre)
     
 }

 saludo("Facu")
