const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
};

/*Questão 2: Adicione um novo livro favorito na chave favoriteBooks, 
que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:*/

reader.favoriteBooks.push(
{
title: 'Harry Potter e o Prisioneiro de Azkaban',
author: 'JK Rowling',
publisher: 'Rocco',
},
);
console.log(reader);


/*Questão 1:Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: 
“O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.*/

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}".`);

/*Nessa solução, temos duas saídas. Se o número de livros favoritos for maior que 1, escreve "livros favoritos", no plural. 
Se não for maior que 1, escreve no singular: "livro favorito".*/
const numFavoriteBooks = reader.favoriteBooks.length;

numFavoriteBooks > 1 
  ? console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`) 
  : console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`);