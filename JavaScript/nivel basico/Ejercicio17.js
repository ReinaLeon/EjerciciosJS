
const bottom = document.getElementsByid("datos");

let nombreLS = localStorage.getItem("nombre");
console.log(nombreLS)

const prueba = () =>{

    let nombre = prompt("ingrese su nombre");
    localStorage.setItem("nombre", nombre)
}

boton.onclick = function(){
    prueba();
}

