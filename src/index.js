import './style.css';

import displayHomePage from './modules/display';
import fetchMovies from './modules/api';
import commentPopup from './modules/commentPopup';

const showContainer = document.querySelector('.show-container');
const popupContainer = document.querySelector('.comment-popup');

window.addEventListener('load', async () => {
  const shows = await fetchMovies();
  displayHomePage(shows);
  document.addEventListener('click', async (e) => {
    const commentButton = e.target.closest('.comments-btn');
    const closeButton = e.target.closest('.close-icon');

    if (commentButton) {
      const selectedShow = shows.filter(
        (it) => it.id.toString() === commentButton.id.toString(),
      )[0];
      const {
        id, image, name, language, genres, rating, schedule,
      } = selectedShow;
      showContainer.style.display = 'none';
      popupContainer.style.display = 'block';
      commentPopup(id, image, name, language, genres, rating, schedule);
    }

    if (closeButton) {
      popupContainer.style.display = 'none';
      showContainer.style.display = 'grid';
      displayHomePage(shows);
    }
  });
});