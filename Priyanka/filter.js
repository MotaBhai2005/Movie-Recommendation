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

function intersectFilters(arrG, arrR) {

}


displayMovies(movies)


let filterdArray = [];
let activeGenre = [];
let activeRating;
let netMovies = [];


document.querySelectorAll('.genre-btn-group .btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {

        let genre = e.currentTarget.innerText.trim();

        function allmovies() {
            while (activeGenre.length) {
                activeGenre.pop();
            }
            displayMovies(movies);
            document.querySelectorAll('.genre-btn-group .btn').forEach(btn => {
                btn.classList.remove('active');
            })
            document.querySelector('.genre-btn-group .all-btn').classList.add('active');
            return;
        }

        if (genre == "All") {
            allmovies();
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
            activeGenre = activeGenre.filter(g => g != genre)
        }

        filterdArray = movies.filter(movie => activeGenre.includes(movie.genre));

        if (filterdArray.length == 0) {
            allmovies();
            return;
        }

        displayMovies(filterdArray);

    })
})

document.querySelectorAll('.rating-btn-group .btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        activeRating = e.currentTarget.id;
        function allmovies() {
            activeRating = "";
            displayMovies(movies);

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
                document.querySelector('.rating-btn-group .btn').classList.remove('active');
                e.currentTarget.classList.add('active');
            }
        }

        filterdArray = movies.filter(movie => { return movie.rating >= Number(activeRating) });

        if (filterdArray.length == 0) {
            allmovies();
            return;
        }

        displayMovies(filterdArray);

    })
})



