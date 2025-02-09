export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Loaded from .env
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Using the same API key for security
  },
};

export const fetchData = async (url, options) => {
  try {
    // console.log('Fetching data from:', url);
    // console.log('Using API Key:', process.env.REACT_APP_RAPID_API_KEY);

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return []; // Return an empty array to prevent crashes
  }
};
// 1 change
