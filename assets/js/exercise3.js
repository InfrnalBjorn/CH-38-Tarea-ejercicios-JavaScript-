function numerosOperaciones(numeros) {
  const sumaNumeros = numeros.reduce(
    (agrupador, numeroAgrupado) => agrupador + numeroAgrupado,
    0
  );
  console.log(numerosEntrada);
  console.log(`La suma de los números es: ${sumaNumeros}`);
  const multiplicacionNumeros = numeros.reduce(
    (agrupador, numeroAgrupado) => agrupador * numeroAgrupado,
    1
  );
  console.log(`El producto de los números es: ${multiplicacionNumeros}`);
}

const numerosEntrada = [1, 2, 4, 5];
numerosOperaciones(numerosEntrada);
