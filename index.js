const dados = 2;
const tiradas = 200;
const arrayNumeroDados = [];

const randomize = function () {
  let count = 0;
  const arrayAleatorios = [];
  while (count < tiradas) {
    let randomNumber = parseInt(Math.random() * 6) + 1;
    arrayAleatorios.push(randomNumber);
    count += 1;
  }
  return arrayAleatorios;
};

const arrayDados = function (numeroDados, array) {
  for (let i = 0; i < numeroDados; i++) {
    array.push(randomize());
  }
  console.log(array);
  return array;
};

const estosDados = arrayDados(dados, arrayNumeroDados);

const suma = function (arrayFinal) {
  let arrayCalculos = [];

  for (let i = 0; i < arrayFinal[0].length; i++) {
    let suma = 0;
    for (let j = 0; j < arrayFinal.length; j++) {
      suma += arrayFinal[j][i];
    }

    arrayCalculos.push(suma);
  }

  return arrayCalculos;
};

const arrayConSumas = suma(estosDados);

const arrayOrdenado = arrayConSumas.sort();
console.log(arrayOrdenado);

const arrayToObject = function (array) {
  const objetoNumeros = {};
  for (let i = 0; i < array.length; i++) {
    let valor = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        valor += 1;
      }
    }
    objetoNumeros[array[i]] = valor;
  }
  return objetoNumeros;
};

console.log(arrayToObject(arrayOrdenado));
