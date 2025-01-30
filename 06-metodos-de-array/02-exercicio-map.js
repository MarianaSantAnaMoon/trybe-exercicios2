/*Dado um array de números, crie uma função que retorne um novo array com as raízes quadradas dos números. 
No entanto, se um número for negativo, a função deve substituí-lo por NaN (Não é um Número).*/

const numbers = [4, 9, -1, 16, -5, 25];

const calculateSquareRoots = (numbers) => {
    let squareRoots = numbers.map((number) => {
      if (number >= 0) {
        return Math.sqrt(number);
      } else {
        return NaN;
      }
    });
  
    return squareRoots;
  };
  
console.log(calculateSquareRoots(numbers));
// [ 2, 3, NaN, 4, NaN, 5 ]