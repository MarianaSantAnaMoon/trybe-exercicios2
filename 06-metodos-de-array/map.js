const data = require('./data');

//Adiciona uma propriedade para cada elemento
const addProperty = (data, propName, propValue) => data.map((card) => ({ ...card, [propName]: propValue }));

console.log(addProperty(data.cards, 'game', 'YU-GI=OH!'))