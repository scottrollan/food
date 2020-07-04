import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'atlanta',
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong.');
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  useEffect(() => {
    searchApi('vegetarian');
  }, []);

  return [searchApi, results, errorMessage];
};
