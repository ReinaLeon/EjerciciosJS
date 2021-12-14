let fecha = new Date();
console.log(fecha);

let year = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let hora = fecha.getHours() + ":" + fecha.getMinutes();

let formatofecha = ` El dia es: ${dia} del ${mes} del año ${year} y la hora actual es ${hora}`
console.log(formatofecha);
console.log(`El día es: ${dia} del ${mes} del año ${year} y la hora actual es ${hora} `);