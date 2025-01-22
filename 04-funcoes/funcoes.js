//Crie uma função que retorne o maior e o menor algoritimo de um array.

function biggestSmallerNumber (array){
    let bigger = array[0];
    let smaller = array[0];

    for ( let index = 1; index < array.length; index +=1 ){
        if (array[index] > bigger) {
       bigger = array[index];
        } else if (array[index] < smaller){
            smaller = array[index];
        }
    }

    return `Menor: ${smaller}
Maior: ${bigger}`;
};

console.log(biggestSmallerNumber([1, 2, 3, 6, 10, 4, 17, -2, 0]));
console.log(biggestSmallerNumber([21, 32, 2, -9, -19, 0, 12, 324, 5454, 6577, 323, 89]));
