const data = require ('./data');

//Encontre a primeira carta de acordo com seu tipo

const firstCardBytype = (typeName) => {
  const getType = data.types.find ((type) => type.name === typeName);
  const getCard = data.cards.find (({ typeId }) => typeId === getType.id);

  return {
    typeId: getType.id,
    typeName: getType.name,
    cardName: getCard.name,
  };
};

console.log(firstCardBytype('Spellcaster'));