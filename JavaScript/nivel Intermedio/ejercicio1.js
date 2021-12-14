let fecha = new Date();
console.log(fecha);

let year = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let hora = fecha.getHours() + ":" + fecha.getMinutes();
console.log(year + "/" + mes + "/" + dia + "/" + hora);

