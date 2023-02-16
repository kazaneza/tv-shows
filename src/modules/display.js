import fetchMovies from './api'

const showContainer = document.querySelector('.show-container');


const displayHomePage = async () => {
  try {
    showContainer.innerHTML = '';
    const shows = await fetchMovies();
    shows.forEach((show) => {
      const listShow = document.createElement('div');
      listShow.classList.add(`show-${show.id}`);
      listShow.innerHTML = `
        <img src=${show.image.medium} alt="movie-image" class="image-pic" />
        <div class="desc">
          <p class="movie-title">${show.name}</p>
          <div class="likes">
            <i class="fa-sharp fa-regular fa-heart"></i>
            <p data-id="${show.id}">5 likes</p>
          </div>
        </div>
        <button id="comment-btn" id=${show.id}>Comments</button>
        <button id="reservation-btn" id=${show.id}>Reservation</button>
      `;
      showContainer.appendChild(listShow);
    });
    
  } catch (error) {
    console.error('Error rendering home page:', error);
  }
  
};

export default displayHomePage;
