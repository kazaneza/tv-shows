const fetchMovies = async () => {
  try {
  const response = await fetch('https://api.tvmaze.com/shows');
  const show = await response.json();
  return show.slice(1,21);
  } 
  catch (error) {
    console.error('Error fetching movie data:', error);
    return [];
  }
};

export default fetchMovies;