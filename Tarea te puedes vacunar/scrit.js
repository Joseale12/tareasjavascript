console.log("¿Me puedo vacunar?")
const age = parseInt(prompt("cual es tu edad?"));
const getTown = prompt("Vives en un municipio fronterizo?");

const isAdult = age >= 18;
const isFrontierTown = getTown.toLowerCase() === "si";

const gender = prompt("¿Eres mujer?");
const isSheGender = gender.toLowerCase() === "si";

const pregnant = prompt ("¿Estas embarazada?");
const isShePregnant = pregnant.toLowerCase() === "si";

const person = prompt("¿Cumples 30 o mas este año?");
const isPerson = person.toLowerCase() === "si";

if (isAdult && isFrontierTown) {
  console.log('te puedes vacunar!');
} else  if (isSheGender && isShePregnant) {
  console.log("Te puedes vacunar");
} else if(isPerson) {
    console.log("Te puedes vacunar");
} else {
  console.log('no te puedes vacunar!');
}
