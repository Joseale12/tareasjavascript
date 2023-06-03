document.write("Calcularemos tu IMC");
//Creamos el objecto llamado person
var person = {
    weight: null,
    height: null,
    result: null
}
//Solicitamos que ingrese la altura y el peso
person.weight = prompt("Ingresa tu peso en kilogramos");
person.height = parseFloat(prompt("Ingresa tu altura. Ejemplo 1.70"));

//Calculamos el IMC peso / altura al cuadrado
const imc = (person.weight /  Math.pow(person.height, 2));
//Redondeamos el IMC a un decimal
person.result = Number(imc.toFixed(1));


//imprimimos altura, peso y result que es el IMC
document.write("<p>Tu peso es de: ",person.weight," klg</p><br>");
document.write("<p>Tu altura es de: ",person.height," m</p><br>");
document.write("<p>Tu IMC es de: ",person.result,"</p><br>");

//Indicamos el nivel de peso segun tu IMC
if (person.result <18.5) {
    document.write("Segun tu IMC estas bao de peso");
} else if (person.result >= 18.5 && person.result <= 24.9 ) {
    document.write("Segun tu IMC estas adecuado");
} else if (person.result >= 25 && person.result <= 29.9) {
    document.write("Segun tu IMC estas en sobrepeso");
} else if (person.result >= 30 && person.result <= 34.9) {
    document.write("Segun tu IMC estas en obesidad grado I");
} else if (person.result >= 35 && person.result <= 39.9) {
    document.write("Segun tu IMC estas en obesidad grado II");
} else {
    document.write("Segun tu IMC estas en obesidad grado III");
}


