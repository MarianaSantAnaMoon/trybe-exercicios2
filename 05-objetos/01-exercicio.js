/* 
RELATÓRIO DE ITEMS VENDIDOS NO MC DONALDS
Crie uma função que retorna um relatório com a quantidade de cada item vendido. Esse relatório precisa estar no seguinte formato:
{
  sanduiches: 0,
  acompanhamentos: 0,
  sobremesas: 0,
  bebidas: 0,
}
*/

const menu = require('./data');

const getMcInfo = () => {
    const report = {
    sanduiches: 0,
    acompanhamentos: 0,
    sobremesas: 0,
    bebidas: 0,
}

const keys = Object.keys(menu);

for (let index = 0; index < keys.length; index +=1 ){
    report[keys[index]] = menu[keys[index]].length;
};
return report;
}

//console.log(getMcInfo());

module.exports = {
  getMcInfo,
}