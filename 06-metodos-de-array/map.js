const data = require('./data');

// CRIAR UMA STRING PARA CADA CARTA COM SEU ATAQUE E DEFESA

const getCardAtkAndDef = (cards) =>{
return cards.map((card) => {
    if (card.atk !== undefined && card.def !== undefined){
        return `A carta ${card.name} possui o ataque de ${card.atk} e defesa de ${card.def}.`;
    } 
        return `Essa carta não possui e/ou defesa.`
    
    
});
};

console.log(getCardAtkAndDef(data.cards));