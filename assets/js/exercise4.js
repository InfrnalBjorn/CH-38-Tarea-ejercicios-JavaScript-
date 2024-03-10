let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

const resultado = student1Courses.filter((materia) =>
  student2Courses.includes(materia)
);
const resultado1 = student1Courses.filter(
  (materia) => !student2Courses.includes(materia)
);
const resultado2 = student2Courses.filter(
  (materia) => !student1Courses.includes(materia)
);
const total = resultado1.join(" ") + " " + resultado2.join(" ");

console.log(`Cursos que se repite: ${resultado}`);
console.log(`Cursos que no se repiten: ${total}`);
