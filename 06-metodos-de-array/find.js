const data = require ('./data');

//ENCONTRE UMA CARTA DE ACORDO COM SEU NOME

const findcard = (data, cardName) =>{
const cardFound = data.find((card) => card.name === cardName)

return cardFound
};

console.log(findcard(data.cards, 'Dark Magician'));