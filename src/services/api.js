// services/api.js
import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

// Fetch list of cryptocurrencies
export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/markets?vs_currency=usd`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};


