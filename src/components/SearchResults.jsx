import React from 'react';

const SearchResults = ({ results, error }) => {
    return (
        <>
            <div id="results" className="results" role="region" aria-live="polite">
                {error && <p>{error}</p>}
                {results && <p>{results.length} user(s) found.</p>}
            </div>
            {results && results.map((user) => (
                <div key={user.id} className="result-item">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
};

export default SearchResults;
