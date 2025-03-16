document.getElementById('randomDog').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verifica o que está sendo retornado
            const imgElement = document.getElementById('randomPetImage');
            imgElement.src = data.message;
        })
        .catch(error => {
            console.error('Erro ao buscar imagem de cachorro:', error);
        });
});

document.getElementById('randomCat').addEventListener('click', function() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verifica o que está sendo retornado
            const imgElement = document.getElementById('randomPetImage');
            imgElement.src = data[0].url;
        })
        .catch(error => {
            console.error('Erro ao buscar imagem de gato:', error);
        });
});

// Evento para o botão de surpresa
document.getElementById('surprisePet').addEventListener('click', function() {
    // Criar promessas para as requisições de cachorros e gatos
    const dogPromise = fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => data.message);

    const catPromise = fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => data[0].url);

    // Usar Promise.any para lidar com a primeira promessa resolvida
    Promise.any([dogPromise, catPromise])
        .then(url => {
            const imgElement = document.getElementById('randomPetImage');
            imgElement.src = url; // Atualiza o src da imagem com a URL retornada
        })
        .catch(error => {
            console.error('Erro ao buscar imagem de animal:', error);
        });
});