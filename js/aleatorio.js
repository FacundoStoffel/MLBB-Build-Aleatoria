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

        //linea 
        const linea = equipamiento.lineas;
        const lineaKeys = Object.keys(linea);
        const randomIndexLinea = Math.floor(Math.random() * lineaKeys.length);
        const randomLineaKey = lineaKeys[randomIndexLinea];
        const randomLinea = linea[randomLineaKey];
        const lineaImg = document.getElementById('linea-img')

        lineaImg.src = randomLinea;

        //emblema principal
        const emblemaP = equipamiento.emblemas.principales;
        const emblemaPKeys = Object.keys(emblemaP);
        const randomIndexEmblemaP = Math.floor(Math.random() * emblemaPKeys.length);
        const randomEmblemaPKey = emblemaPKeys[randomIndexEmblemaP];
        const radomEmblemaP = emblemaP[randomEmblemaPKey];
        const emblemaPImg = document.getElementById('emblema-principal');

        emblemaPImg.src = radomEmblemaP;

        //emblema 1
        const emblema1 = equipamiento.emblemas.E01;
        const emblema1Keys = Object.keys(emblema1);
        const randomIndexEmblema1 = Math.floor(Math.random() * emblema1Keys.length);
        const randomEmblema1Key = emblema1Keys[randomIndexEmblema1];
        const randomEmblema1 = emblema1[randomEmblema1Key];
        const emblema1Img = document.getElementById('emblema01');

        emblema1Img.src = randomEmblema1;

        //emblema 2
        const emblema2 = equipamiento.emblemas.E02;
        const emblema2Keys = Object.keys(emblema2);
        const randomIndexEmblema2 = Math.floor(Math.random() * emblema2Keys.length);
        const randomEmblema2Key = emblema2Keys[randomIndexEmblema2];
        const randomEmblema2 = emblema2[randomEmblema2Key];
        const emblema2Img = document.getElementById('emblema02');

        emblema2Img.src = randomEmblema2;

        //emblema 3
        const emblema3 = equipamiento.emblemas.E03;
        const emblema3Keys = Object.keys(emblema3);
        const randomIndexEmblema3 = Math.floor(Math.random() * emblema3Keys.length);
        const randomEmblema3Key = emblema3Keys[randomIndexEmblema3];
        const randomEmblema3 = emblema3[randomEmblema3Key];
        const emblema3Img = document.getElementById('emblema03');

        emblema3Img.src = randomEmblema3;
    });
}