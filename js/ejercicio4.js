let pedido =  prompt("¿Que tamaño de pizza desea ordenar?");

if (pedido === "personal"){
    let sabor = prompt("Escoja el sabor de su pizza Hawaiana, Pollo y champiñones, carnes, vegetariana");

        if(sabor === "hawaiana"){

                let adicionales= prompt("Sin Piña, Sin Jamon");

                switch (adicionales) {
                    case "sin piña":
                    alert("su pizza es:"+ pedido +" " +sabor +" " +adicionales+ " con salami");
                    break;
                    switch (adicionales) {
                        case "sin jamon":
                        alert("su pizza es:"+ pedido +" " +sabor +" " +adicionales + " con salami");
                        break;
            default:
                alert("ese no es un adicional");
                break; 
    }}}
if (sabor === "pollo y champiñones") {

            let adicionales1= prompt("con queso o sin queso");

            switch (adicionales1) {
                case "con queso":
                    break;
                case "sin queso":
                default:
                    alert("esa no es un opcion")
                    break;
            }
            let adicionales2= prompt("Con salsa o borde de Bocadillo");
                switch (adicionales2) {
                    case "con salsa":
                        alert("su pizza es:"+ pedido +" " +sabor +" " +adicionales1 +" "+ adicionales2 );
                        break;
                    default:
                        alert("Ese no es un ingrediente");
                        break;
                }
        }


        if (sabor === "carnes") {

            let adicionales1= prompt("sin salami");

            switch (adicionales1) {
                case "sin salami":
                default:
                    alert("esa no es un opcion")
                    break;
            }
            let adicionales2= prompt("con queso");
                switch (adicionales2) {
                    case "con queso":
                        alert("su pizza es:"+ pedido +" " +sabor +" " +adicionales1 +" "+ adicionales2 );
                        break;
                    default:
                        alert("Ese no es un ingrediente");
                        break;
                }
        }


}