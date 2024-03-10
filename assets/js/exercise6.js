let array = [3, 6, 12, 5, 100, 1];

function ordenamientoBurbuja(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let nuevo = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = nuevo;
      }
    }
  }
  return array;
}

console.log(`Los numeros a arreglar son: ${array.join(", ")}`);
console.log(
  `Los numeros ya arreglados quedan asi: ${ordenamientoBurbuja(array).join(
    ", "
  )}`
);
