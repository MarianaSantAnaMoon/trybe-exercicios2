const data = require ('./data');

//ADICIONA A PROPRIEDADE 'GAME' EM TODOS OS ELEMENTOS DO ARRAYS CARDS

const addProperty = (propKey, propValue) => {
   data.cards.forEach ((card) => card[propKey] = propValue)
};

addProperty('game', 'Yu-Gi-Oh!');

console.log(data.cards);