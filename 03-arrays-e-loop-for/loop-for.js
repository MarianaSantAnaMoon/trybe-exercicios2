const lotteryNumbers = [];
const firstGame = [4, 8, 15, 16, 23, 42];

//Sorteio dos números
for (let index = 0; index < 6; index += 1){
    lotteryNumbers.push(Math.ceil(Math.random() * 60));
};

//Comparação do sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];

for(let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1){
   for( indexGame = 0; indexGame < firstGame.length; indexGame += 1){
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]){
         numberOfHits += 1;
         hits.push(lotteryNumbers[indexLottery])
    }
   }
}
//Quantidade de acertos

console.log(`Números sorteados: ${lotteryNumbers}`);
console.log(`Jogo: ${firstGame}`);
console.log(`Quantidade de acertos: ${numberOfHits}`);
console.log(`Números acertados: ${hits}`);


