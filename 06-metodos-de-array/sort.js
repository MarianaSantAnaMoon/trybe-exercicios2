const data = require('./data');

// PEGUE TODAS AS CARTAS QUE POSSUEM ATAQUE E COLOQUE EM ORDEM CRESCENTE POR ATAQUE. MOSTRE DA SEGUINTE FORMA:
/*[
  { name: 'D.D. Crow', atk: 100 },
  { name: 'Eka the Flame Buddy', atk: 1500 },
  ...
]*/

const sortCardsAtk = (data) => data.filter((card) => card.atk !== undefined)
   .map(({name, atk}) => ({name, atk}))
   .sort((a, b) => a.atk - b.atk);

console.log(sortCardsAtk(data.cards));