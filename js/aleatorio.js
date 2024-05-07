// Función para cargar el archivo JSON
function cargarHeroes(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './js/heroes.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}

function cargarEquipamiento(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './js/equipamiento.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}

// Función para mostrar un héroe aleatorio
function mostrarHeroeAleatorio() {
    cargarHeroes(function (heroes) {
        const randomIndex = Math.floor(Math.random() * heroes.length);
        const randomHero = heroes[randomIndex];
        const heroImgElement = document.getElementById('hero-img');
        const heroNameElement = document.getElementById('hero-name');

        heroImgElement.src = randomHero.img;
        heroNameElement.textContent = randomHero.nombre;
    });

    cargarEquipamiento(function (equipamiento) {
        //equipamiento random en botas
        const botas = equipamiento.botas;
        const botasKeys = Object.keys(botas);
        const randomIndexBotas = Math.floor(Math.random() * botasKeys.length);
        const randomBotasKey = botasKeys[randomIndexBotas];
        const randomBotas = botas[randomBotasKey];
        const botasImg = document.getElementById('botas-img');

        botasImg.src = randomBotas;

        //equipamiento en items
        const items = equipamiento.items;
        const itemsKeys = Object.keys(items);
        // Itera sobre cada elemento con la clase 'item-img' y asigna una imagen aleatoria
        const itemImgs = document.querySelectorAll('.item-img');
        itemImgs.forEach((itemImg) => {
            const randomIndex = Math.floor(Math.random() * itemsKeys.length);
            const randomItemKey = itemsKeys[randomIndex];
            const randomItem = items[randomItemKey];
            itemImg.src = randomItem;
        });


    });
}