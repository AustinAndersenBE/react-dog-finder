import React from 'react';
import { Link } from 'react-router-dom';

//dogs is an array of objects
function DogList({ dogs }) {
  return (
    <div>
      <h2>Select a Dog:</h2>
      {dogs.map(dog => (
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>
            <h3>{dog.name}</h3>
            <img src={`/${dog.src}`} alt={dog.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;