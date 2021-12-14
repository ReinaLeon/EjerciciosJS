
let datos = document.getElementById("datos");
const nombreUsuario = () => {

    let nombre = prompt("ingresa tu nombre");
    alert("Ingresa tu nombre:" + nombre)

}

datos.onclick = function () {
    nombreUsuario();
}