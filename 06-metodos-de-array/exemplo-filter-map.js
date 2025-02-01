const data = require('./data');
// EXIBA TODAS AS CARTAS DE UM DETERMINADO TIPO DA SEGUINTE FORMA:
/*
[
  { typeId: 1, name: 'Blue-Eyes White Dragon' },
  { typeId: 1, name: 'Red-Eyes Black Dragon' },
  { typeId: 1, name: 'Dragon Queen of Tragic Endings' }
}
*/

const getCardByType = (data, cardType) => data
   .filter(({ typeId }) => typeId === cardType)
   .map(({ typeId, name}) => ({ typeId, name}));

console.log(getCardByType(data.cards, 3));
