import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <h2>Invalid dog!</h2>;

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={`/${dog.src}`} alt={dog.name} />
      <h3>{dog.age} years old</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogDetails;