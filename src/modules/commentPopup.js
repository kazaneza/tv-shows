const popupContainer = document.querySelector('.comment-popup');

const commentPopup = async (
  id, image, name, language, genres, rating, schedule,
) => {
  popupContainer.innerHTML = '';

  popupContainer.innerHTML += `
        <div class="show-${id} show-poster">
        <img src=${image.original} alt="" class="movie-img" />
        <div class="close-icon">X</div>
      </div>
      <div class="show-info">
        <h2 class="show-title">${name}</h2>
        <div class="show-specs">
          <p>Language: ${language}</p>
          <p>Genre: ${genres.join(',')}</p>
          <p>Rating: ${rating.average}</p>
          <p>Schedule: ${schedule.time} on ${schedule.days}s</p>
        </div>
      </div>

      <div class="add-comment">
        <h2>Add Comments</h2>
        <form>
          <input type="text" name="text-name" id="text-name" placeholder="Your Name">
          <textarea name="text-insights" id="text-insights" cols="35" rows="7" placeholder="Your insights"></textarea>
          <button type="submit">Comment</button>
        </form>
      </div>         
    `;
};

export default commentPopup;