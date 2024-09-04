import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (query.trim() === '') {
      setError('Please enter a keyword to search.');
      return;
    }

    onSearch(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit} aria-label='Search Form'>
        <label htmlFor='searchInput'>Search for users:</label>
        <input
          type='text'
          id='searchInput'
          name='search'
          aria-required='true'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Enter a keyword'
        />
        <button type='submit'>Search!</button>
      </form>
      {error && <p role='alert'>{error}</p>}
    </>
  );
};

export default SearchForm;
