const booksdata = {
    books: [
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
          name: 'George R. R. Martin',
          birthYear: 1948,
        },
        releaseYear: 1991,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
          name: 'J. R. R. Tolkien',
          birthYear: 1892,
        },
        releaseYear: 1954,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
          name: 'Isaac Asimov',
          birthYear: 1920,
        },
        releaseYear: 1951,
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
          name: 'Frank Herbert',
          birthYear: 1920,
        },
        releaseYear: 1965,
      },
      {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
          name: 'Stephen King',
          birthYear: 1947,
        },
        releaseYear: 1986,
      },
    ],
  };

/*Implemente a função formattedBookNames que deve retornar um array de strings no formato:
 Nome do livro - Gênero - Nome da pessoa autora.*/
 
 const formattedBookNames = (books) => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formattedBookNames(booksdata.books));

/*Implemente a função nameAndAge que deve retornar um array de objetos, cada objeto deve conter:
A chave author, e o valor deve ser o nome da pessoa autora;
A chave age, e o valor deve ser a idade da pessoa autora quando lançou o livro.*/

const nameAndAge = (books) => {
    return books.map((book) => ({
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear,
    }));
  };
  
  console.log(nameAndAge(booksdata.books));