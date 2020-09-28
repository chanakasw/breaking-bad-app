import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
  return (
    characters.map(character => 
      <Card  
        key={character.char_id}
        name={character.name}
        status={character.status}
        img={character.img}
        portrayed={character.portrayed}
      />
    )
  );
};

export default CardList;

