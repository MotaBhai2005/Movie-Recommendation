const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const currentActive = document.querySelector('.nav-item.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        this.classList.add('active');
        
        console.log(`Switched view to: ${this.textContent}`); // to display switching in console
    });
});

//serach engine

const searchInput = document.getElementById('movie-search-input');
const searchButton = document.getElementById('movie-search-btn');


function performMovieSearch() {

    const query = searchInput.value.trim().toLowerCase();
    if (query === "") {
        alert("Please enter a movie title to search!");
        return;
    }

    console.log(`Searching for title containing keyword: "${query}"`);
    const matchingMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(query);
    });
    displaySearchResults(matchingMovies);
}


function displaySearchResults(results) {
    const displayContainer = document.getElementById('movie-listing-section');
    displayContainer.innerHTML = "";
    if (results.length === 0) {
        displayContainer.innerHTML = `
            <div style="padding: 2rem; color: var(--text-muted);">
                <h3>No movies found matching that title.</h3>
                <p>Try searching for a different keyword (e.g., "Interstellar").</p>
            </div>
        `;
        return;
    }
    let summaryHTML = `<h3 style="margin-bottom: 1rem; color: var(--accent-color);">Found ${results.length} Match(es):</h3>`;
    
    results.forEach(movie => {
        // FIXED: Dynamically pulls the image/poster URL from your dataset
        const posterSrc = movie.poster;

        summaryHTML += `
            <div style="background: var(--bg-secondary); margin: 10px auto; padding: 15px; max-width: 500px; border-radius: 8px; text-align: left; border-left: 4px solid var(--accent-color); display: flex; gap: 15px; align-items: center;">
                
                <img src="${posterSrc}" alt="${movie.title}" style="width: 70px; height: 100px; object-fit: cover; border-radius: 4px; flex-shrink: 0;">
                
                <div>
                    <strong>🎬 ${movie.title}</strong> (${movie.year})<br>
                    <small>Genre: ${movie.genre} | Rating: ⭐ ${movie.rating}</small>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">${movie.description}</p>
                </div>
                
            </div>
        `;
    });

    displayContainer.innerHTML = summaryHTML;
}

//Operation activation

searchButton.addEventListener('click', performMovieSearch); // by click on button


searchInput.addEventListener('keyup', function(event) {         //by pressing enter
    if (event.key === 'Enter') {
        performMovieSearch();
    }
});