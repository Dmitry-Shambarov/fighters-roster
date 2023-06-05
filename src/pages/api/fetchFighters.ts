import axios from 'axios';

export async function fetchFighters() {
  const apiKey = 'af7f2820721e4a35b3f5ec14a936eb35';
  const endpointUrl = 'https://api.sportsdata.io/v3/mma/scores/json/Fighters';

  try {
    const response = await axios.get(endpointUrl, {
      params: {
        key: apiKey,
      },
    });

    const fighters = response.data;
    return fighters;
  } catch (error) {
    console.error('Error fetching fighters:', error);
    throw error;
  }
}
