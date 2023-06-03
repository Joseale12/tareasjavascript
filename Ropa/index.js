console.log("Si te gusta la playa te recomendaremos un traje de baño.");
const women = prompt("¿Eres mujer");
const isWomen = women.toLowerCase() === "si";

const man = prompt("¿Eres hombre?");
const isMan = man.toLowerCase() === "si";

const skinny = prompt("¿Eres delgada/o?");
const isSkinny = skinny.toLowerCase() === "si";
const sublings = skinny.toLowerCase() === "no";

const fullSuit = prompt("¿Te gusta el traje de baño completo?");
const isFullSuit = fullSuit.toLowerCase() === "si";
const isFullSuitSublings = fullSuit.toLowerCase() === "no";

const combine = prompt("¿Te gustaria combinar tu traje con el de tu pareja?");
const weCombine = combine.toLowerCase() === "si";

if (isWomen && isSkinny && isFullSuitSublings) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/Mujer delgada traje por partes.jpg'>");
} else if (isWomen && sublings && isFullSuit) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/completogordita.jpg'>");
} else if (isWomen && isSkinny && isFullSuit) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/traje de baño mujer una pieza.png'>");
} else if (isWomen && sublings && isFullSuitSublings) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/Traje de baño traje por partes gordida.jpg'>");
} else if (isMan &&  sublings && isFullSuitSublings) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/hombre una pieza.jpg'>");
} else if (isMan && sublings && isFullSuit ) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/traje completo hombre.jpg'>");
} else if (isMan && isSkinny && isFullSuit ) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/traje completo hombre.jpg'>");
} else if (isMan && isSkinny && isFullSuitSublings ) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write("<img src='./Imagenes/hombre una pieza.jpg'>");
}else if (weCombine) {
    document.write("<p>Te recomiendo este traje de baño</p><br>");
    document.write( "<img src='./Imagenes/Traje de baño delgados.jpg'>");
} else {
    document.write("Gracias. Pero no tenemos recomendacion para usted");
}
