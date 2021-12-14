let personas = [];
let animales = ["perro", "gato", "serpiente", "lobo", "escorpion", "conejo"];
//console.log(animales.length);
//console.log(animales);

//for(let i = 0; i < animales.length; i++){
  //  console.log(animales[i]);
//}

//animales[2] = "Dragon";
//for (let i = 0; i < animales.length; i++){
 //   console.log(animales[i]);
//}

//animales.push("Ardilla")
//for (let i = 0; i < animales.length; i++){
//    console.log(animales[i]);
//}

//animales.unshift("Tigre");
//animales.pop();
animales.splice(4,1);
for (let i = 0; i < animales.length; i++){
    console.log(animales[i]);
}
