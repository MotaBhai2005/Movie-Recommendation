const cardsContainer = document.getElementById("cardsContainer");
let html;

function displayMovies(movieArray) {
    cardsContainer.innerHTML = "";
    movieArray.forEach(movie => {

        cardsContainer.innerHTML +=
            ` <div class="mcard">
            <div class="poster">
                <img class="posterimg"
                    src=${movie.poster}>
            </div>
            <div class="cardinfo">
                <p class="name">${movie.title}</p>
                <P> <span class="rating">${movie.rating}⭐</span> <span class="year">${movie.year}</span></P>
            </div>
        </div>
   `
    });
}

displayMovies(movies)

let activeGenre = [];
let activeRating = "";


function applyFilters() {
    let result = movies;

    if (activeGenre.length > 0) {
        result = result.filter(movie => activeGenre.includes(movie.genre));
    }

    if (activeRating != "") {
        result = result.filter(movie => activeRating <= movie.rating);
    }

    displayMovies(result);
}


document.querySelectorAll('.genre-btn-group .btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {

        let genre = e.currentTarget.innerText.trim();

        function allmovies() {

            while (activeGenre.length) {
                activeGenre.pop();
            }

            document.querySelectorAll('.genre-btn-group .btn').forEach(btn => {
                btn.classList.remove('active');
            })
            document.querySelector('.genre-btn-group .all-btn').classList.add('active');
            applyFilters();
            return;
        }

        if (genre == "All") {
            allmovies();
            return;
        }

        else {
            document.querySelector('.genre-btn-group .all-btn').classList.remove('active');
        }


        if (!activeGenre.includes(genre)) {
            e.currentTarget.classList.toggle('active');
            activeGenre.push(genre);
        }
        else {
            e.currentTarget.classList.toggle('active');
            activeGenre = activeGenre.filter(g => g != genre);
            if (activeGenre.length === 0) {
                allmovies();
                return;
            }
        }

        applyFilters();

    })
})

document.querySelectorAll('.rating-btn-group .btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        activeRating = e.currentTarget.id;
        function allmovies() {
            activeRating = "";
            applyFilters();
            document.querySelectorAll('.rating-btn-group .btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.rating-btn-group .all-btn').classList.add('active');
            return;
        }

        if (activeRating == "All") {
            allmovies();
        }

        else {

            if (e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.remove('active');
                allmovies();
            }

            else {
                document.querySelectorAll('.rating-btn-group .btn').forEach(btn => btn.classList.remove('active'));
                e.currentTarget.classList.add('active');
            }
        }
        applyFilters();


    })
})



