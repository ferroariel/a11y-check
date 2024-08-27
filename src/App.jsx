import React, { useState } from 'react';
import SearchForm from './components/SearchForm.jsx';
import SearchResults from './components/SearchResults.jsx';

const App = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setError('');
    setResults([]);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${query}`
      );
      const data = await response.json();

      if (data.length === 0) {
        setError('No results found.');
      } else {
        setResults(data);
      }
    } catch (err) {
      setError('An error occurred while fetching results.');
    }
  };

  return (
    <main>
      <h1>Search users</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={results} error={error} />
    </main>
  );
};

export default App;
