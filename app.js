// DOM Elements
const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("movie-search-input");
const searchBtn = document.getElementById("movie-search-btn");
const navItems = document.querySelectorAll(".nav-item");

// Active filters state
let activeGenres = []; // empty array means "All Genres"
let activeRating = ""; // empty string means "All Ratings"
let searchQuery = "";

/**
 * Render movies in the movie list container
 * @param {Array} movieArray 
 */
function displayMovies(movieArray) {
    cardsContainer.innerHTML = "";
    
    if (movieArray.length === 0) {
        cardsContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                <span class="material-symbols-outlined" style="font-size: 48px; color: var(--accent-color); margin-bottom: 1rem;">movie_filter</span>
                <h3>No movies match your search or filter selection.</h3>
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">Try adjusting the active filters or clear your search query.</p>
            </div>
        `;
        return;
    }

    movieArray.forEach(movie => {
        const card = document.createElement("div");
        card.className = "mcard";
        card.innerHTML = `
            <div class="poster">
                <img class="posterimg" src="${movie.poster}" alt="${movie.title} Poster">
            </div>
            <div class="movieCardDes">
                <div class="btns">
                    <button class="playBtn" aria-label="Play Trailer">
                        <span class="material-symbols-outlined">play_arrow</span>
                    </button>
                    <div class="grp2">
                        <button class="saveBtn" aria-label="Bookmark Movie">
                            <span class="material-symbols-outlined">bookmark</span>
                        </button>
                        <button class="likeBtn" aria-label="Like Movie">
                            <span class="material-symbols-outlined">favorite</span>
                        </button>
                    </div>
                </div>
                <div class="cardinfo">
                    <h4 class="name">${movie.title} (${movie.year})</h4>
                </div>
                <div class="genre">
                    <p>${movie.genre}</p>
                </div>
                <div class="des">
                    <p>${movie.description}</p>
                </div>
                <div class="rating">
                    <span class="star">⭐ ${movie.rating}</span>
                </div>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

/**
 * Combine and apply all search query, genre, and rating filters
 */
function applyFilters() {
    let results = movies;

    // 1. Apply Search Query (Case-insensitive title search)
    if (searchQuery) {
        results = results.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery)
        );
    }

    // 2. Apply Genre Filter (Support multi-select)
    if (activeGenres.length > 0) {
        results = results.filter(movie => 
            activeGenres.includes(movie.genre)
        );
    }

    // 3. Apply Rating Filter
    if (activeRating) {
        const minRating = parseFloat(activeRating);
        results = results.filter(movie => movie.rating >= minRating);
    }

    displayMovies(results);
}

/* ==========================================
   Search Event Handlers
   ========================================== */
function handleSearch() {
    searchQuery = searchInput.value.trim().toLowerCase();
    applyFilters();
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        handleSearch();
    }
});
// Also update search live as user types for reactive experience
searchInput.addEventListener("input", handleSearch);


/* ==========================================
   Genre Filter Handlers
   ========================================== */
const genreButtons = document.querySelectorAll(".genre-btn-group .btn");

genreButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const clickedBtn = e.currentTarget;
        const genreId = clickedBtn.id;
        
        // Handle "All Genres" button
        if (genreId === "genre-all") {
            activeGenres = [];
            genreButtons.forEach(b => b.classList.remove("active"));
            clickedBtn.classList.add("active");
        } else {
            // Remove active state from "All Genres"
            document.getElementById("genre-all").classList.remove("active");
            
            // Extract the genre name (e.g., "Action" from id or innerText)
            const genreName = clickedBtn.textContent.trim();
            
            if (activeGenres.includes(genreName)) {
                // Toggle off
                activeGenres = activeGenres.filter(g => g !== genreName);
                clickedBtn.classList.remove("active");
            } else {
                // Toggle on
                activeGenres.push(genreName);
                clickedBtn.classList.add("active");
            }
            
            // If no genres are selected, revert to "All Genres" active
            if (activeGenres.length === 0) {
                document.getElementById("genre-all").classList.add("active");
            }
        }
        applyFilters();
    });
});


/* ==========================================
   Rating Filter Handlers
   ========================================== */
const ratingButtons = document.querySelectorAll(".rating-btn-group .btn");

ratingButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const clickedBtn = e.currentTarget;
        const ratingId = clickedBtn.id;
        
        ratingButtons.forEach(b => b.classList.remove("active"));
        clickedBtn.classList.add("active");
        
        if (ratingId === "rating-all") {
            activeRating = "";
        } else {
            // Extract the number from ID (e.g., "rating-9" -> "9")
            activeRating = ratingId.replace("rating-", "");
        }
        applyFilters();
    });
});


/* ==========================================
   Navigation Handlers
   ========================================== */
navItems.forEach(item => {
    item.addEventListener("click", function(event) {
        // If it's a hash link, let's keep smooth-scroll behavior and highlight active item
        navItems.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
        
        const targetId = this.getAttribute("href");
        if (targetId === "#") {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (targetId === "#movie-listing-section") {
            // Quick preset filters based on which link is clicked
            if (this.id === "nav-top-rated") {
                // Automatically filter by top rating (Above 9)
                const rating9Btn = document.getElementById("rating-9");
                ratingButtons.forEach(b => b.classList.remove("active"));
                rating9Btn.classList.add("active");
                activeRating = "9";
                applyFilters();
            } else if (this.id === "nav-categories") {
                // Reset to all genres but scroll down
                activeGenres = [];
                genreButtons.forEach(b => b.classList.remove("active"));
                document.getElementById("genre-all").classList.add("active");
                applyFilters();
            }
        }
    });
});

// Set active navigation based on scrolling
window.addEventListener("scroll", () => {
    const listingSection = document.getElementById("movie-listing-section");
    const scrollPosition = window.scrollY;
    
    if (listingSection) {
        const sectionTop = listingSection.offsetTop - 150;
        if (scrollPosition >= sectionTop) {
            // Highlight categories or top-rated nav depending on current rating selection
            navItems.forEach(nav => nav.classList.remove("active"));
            if (activeRating === "9") {
                document.getElementById("nav-top-rated").classList.add("active");
            } else {
                document.getElementById("nav-categories").classList.add("active");
            }
        } else {
            navItems.forEach(nav => nav.classList.remove("active"));
            document.getElementById("nav-home").classList.add("active");
        }
    }
});


// Initial render on load
document.addEventListener("DOMContentLoaded", () => {
    displayMovies(movies);
});
