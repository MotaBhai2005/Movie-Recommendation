const cardsContainer = document.getElementById("cardsContainer");

function displayMovies(movieArray) {

    cardsContainer.innerHTML = "";

    movieArray.forEach(movie => {

        const card = document.createElement("div");

        card.className = "mcard";

        card.innerHTML = `
            <div class="poster">
                <img class="posterimg"
                    src="${movie.poster}"
                    alt="${movie.title}">
            </div>

            <div class="cardinfo">
                <p class="name">${movie.title}</p>
                <p>
                    <span class="rating">${movie.rating}⭐</span>
                    <span class="year">${movie.year}</span>
                </p>
            </div>
        `;

        cardsContainer.appendChild(card);

    });

}

displayMovies(movies);