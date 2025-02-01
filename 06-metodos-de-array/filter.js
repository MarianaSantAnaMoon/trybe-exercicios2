const data = require('./data');
// EXIBA TODAS AS CARTAS DE UM DETERMINADO TIPO DA SEGUINTE FORMA:

const getCardsByAtk = (data, atknumber) =>  data.filter((card) => card.atk > atknumber);

console.log(getCardsByAtk(data.cards, 2000));