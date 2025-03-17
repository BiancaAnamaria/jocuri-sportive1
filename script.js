// script.js

const games = [
    {
        title: "Jocul de echilibru",
        description: "Elevii trebuie să stea pe un picior timp de 30 secunde, fără să cadă.",
        difficulty: "Ușor",
        category: "Echilibru"
    },
    {
        title: "Ștafetă cu obstacole",
        description: "Crează un parcurs cu obstacole (conuri, cercuri, jaloane) și împarte elevii în echipe. Cine termină primul, câștigă!",
        difficulty: "Mediu",
        category: "Agilitate"
    },
    {
        title: "Aruncarea mingii la țintă",
        description: "Elevii trebuie să arunce mingea într-un coș sau într-un cerc, din diferite poziții și distanțe.",
        difficulty: "Mediu",
        category: "Forță"
    },
    {
        title: "Sărituri cu coarda",
        description: "Elevii trebuie să sară cu coarda de cel puțin 30 de ori fără întrerupere.",
        difficulty: "Ușor",
        category: "Rezistență"
    },
    {
        title: "Sprint de viteză",
        description: "Cine ajunge primul la linia de sosire câștigă! Se poate juca individual sau în echipe.",
        difficulty: "Avansat",
        category: "Agilitate"
    },
    {
        title: "Traseu de coordonare",
        description: "Elevii trebuie să parcurgă un traseu prestabilit (sărituri, echilibru, alergare) în cel mai scurt timp posibil.",
        difficulty: "Mediu",
        category: "Coordonare"
    },
    {
        title: "Ținta în mișcare",
        description: "Un elev aruncă mingea către un coleg care trebuie să prindă și să returneze mingea cât mai rapid.",
        difficulty: "Mediu",
        category: "Coordonare"
    },
    {
        title: "Fotbal cu conuri",
        description: "Elevii trebuie să șuteze mingea printre conuri fără să le atingă.",
        difficulty: "Mediu",
        category: "Agilitate"
    },
    {
        title: "Tracțiuni la bară",
        description: "Elevii trebuie să facă cât mai multe tracțiuni la bară fixă într-un timp determinat.",
        difficulty: "Avansat",
        category: "Forță"
    },
    {
        title: "Trecerea prin cercuri",
        description: "Elevii trebuie să sară prin cercuri poziționate pe sol, fără să atingă marginile acestora.",
        difficulty: "Ușor",
        category: "Echilibru"
    },
    {
        title: "Mingea în cerc",
        description: "Elevii trebuie să dribleze mingea și să o plaseze într-un cerc desemnat de antrenor.",
        difficulty: "Mediu",
        category: "Coordonare"
    },
    {
        title: "Jocul caprei",
        description: "Elevii trebuie să sară peste colegii lor care stau ghemuiți, fără să-i atingă.",
        difficulty: "Mediu",
        category: "Agilitate"
    },
    {
        title: "Ținte mobile",
        description: "Elevii trebuie să lovească cu mingea colegi care se mișcă într-o zonă delimitată. Când sunt atinși, ies din joc.",
        difficulty: "Mediu",
        category: "Forță"
    },
    {
        title: "Joc de rezistență - alergare în cerc",
        description: "Elevii trebuie să alerge în cerc timp de 3 minute fără să se oprească.",
        difficulty: "Avansat",
        category: "Rezistență"
    },
    {
        title: "Lupta cu frânghia",
        description: "Elevii sunt împărțiți în două echipe și trag de o frânghie. Echipa care trage adversarii peste o linie marcată câștigă.",
        difficulty: "Mediu",
        category: "Forță"
    },
    {
        title: "Jocul de reflexe",
        description: "Elevii trebuie să reacționeze rapid la comenzile profesorului (ex: sari, ghemuiește-te, întoarce-te).",
        difficulty: "Ușor",
        category: "Coordonare"
    },
    {
        title: "Baschet rapid",
        description: "Elevii trebuie să paseze mingea și să înscrie cât mai multe coșuri într-un timp limitat.",
        difficulty: "Avansat",
        category: "Forță"
    },
    {
        title: "Alergare cu schimb de direcție",
        description: "Elevii trebuie să alerge rapid schimbând direcția la semnalul profesorului.",
        difficulty: "Mediu",
        category: "Agilitate"
    },
    {
        title: "Joc de echipă - tunelul uman",
        description: "Elevii formează un tunel și trebuie să treacă pe sub el cât mai repede, fără să atingă coechipierii.",
        difficulty: "Mediu",
        category: "Echilibru"
    },
    {
        title: "Releul cu mingi",
        description: "Elevii trebuie să transporte mingi de la un capăt la altul al terenului fără să le scape.",
        difficulty: "Mediu",
        category: "Coordonare"
    }
];

let favoriteGames = [];

function displayGames(gamesList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    gamesList.forEach((game, index) => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <p><strong>Descriere:</strong> ${game.description}</p>
            <p><strong>Dificultate:</strong> ${game.difficulty}</p>
            <p><strong>Categorie:</strong> ${game.category}</p>
            <button class="favorite-btn" onclick="toggleFavorite(${index})">❤️</button>
        `;
        container.appendChild(gameCard);
    });
}

function searchGame() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("category-filter").value;
    const difficulty = document.getElementById("difficulty-filter").value;

    let filteredGames = games.filter(game =>
        (game.title.toLowerCase().includes(searchTerm) || game.description.toLowerCase().includes(searchTerm)) &&
        (category === "" || game.category === category) &&
        (difficulty === "" || game.difficulty === difficulty)
    );

    displayGames(filteredGames, "games-list");
}

function toggleFavorite(index) {
    const game = games[index];

    if (favoriteGames.includes(game)) {
        favoriteGames = favoriteGames.filter(fav => fav !== game);
    } else {
        favoriteGames.push(game);
    }

    displayGames(favoriteGames, "favorites-list");
}

// Inițializăm lista de jocuri
displayGames(games, "games-list");
