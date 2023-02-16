import './style.css';

import displayHomePage from './modules/display';

import fetchMovies from './modules/api';
import commentPopup from './modules/commentPopup';
import reservationPopup from './modules/reservation';
const showContainer = document.querySelector('.show-container');
const popupContainer = document.querySelector('.comment-popup');
const reservationContainer = document.querySelector('.reservation-model')

window.addEventListener('load', async () => {
  const shows = await fetchMovies();
  displayHomePage(shows);
  document.addEventListener('click', async (e) => {
    const commentButton = e.target.closest('.comments-btn');
    const closeButton = e.target.closest('.close-icon');
    const reservationButton = e.target.closest('.reservation-btn');
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
     if (reservationButton) {
       const selectedShow = shows.filter(
         (it) => it.id.toString() === reservationButton.id.toString()
       )[0];
       const { id, image, name, language, genres, rating, schedule } =
         selectedShow;
       showContainer.style.display = "none";
       reservationContainer.style.display = "block";
       reservationPopup(id, image, name, language, genres, rating, schedule);
     }

    if (closeButton) {
      popupContainer.style.display = 'none';
      showContainer.style.display = 'grid';
      displayHomePage(shows);
    }
  });
});