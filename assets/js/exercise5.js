let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(`Los nombres son: ${people.join(", ")}`);

let people1 = people.splice(1, 1);
console.log(`Al eliminar el primer nombre solo queda: ${people.join(", ")}`);

let people2 = people.splice(2, 1);
console.log(`Al eliminar el segundo nombre solo queda: ${people.join(", ")}`);

const luisNombre = people.indexOf("Luis");
if (luisNombre > 0) {
  const luis = people.splice(luisNombre, 1)[0];
  people.unshift(luis);
}
console.log(`Agregamos Luis al inicio: ${people.join(", ")}`);

let people3 = people.push("Pedro");
console.log(`Al agregar mi nombre al fina queda: ${people.join(", ")}`);

romperNomobre: for (let nombres = 1; nombres < people.length; nombres++) {
  console.log(`Al salir del bucle queda: ${people[nombres]}`);
  if (people[nombres] === "Maria") break romperNomobre;
}

let index = people.indexOf("Maria");
console.log(`El índice de "Maria" es: ${index}`);
