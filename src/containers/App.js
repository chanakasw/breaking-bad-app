import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import StatusSelect from '../components/StatusSelect';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(response => response.json())
      .then(characters => setCharacters(characters))
      .catch(error => 
        console.log('Error fetching breaking bad characters...', error)
      );
  }, []);

  const onSearchChange = event => {
    setSearchCharacter(event.target.value);
  };

  const onStatusChange = event => {
    setStatus(event.target.value);
  };

  const filterCharacters = (searchCharacter, status) => {
    if (!searchCharacter && !status) {
      return characters;
    } else if (searchCharacter && status) {
      return characters.filter(character => {
        return (
          character.name.toLowerCase().includes(searchCharacter.toLowerCase()) &&
          character.status.toLowerCase().includes(status.toLowerCase())
        );
      });
    } else if (searchCharacter && !status) {
      return characters.filter(character => {
        return character.name.toLowerCase().includes(searchCharacter.toLowerCase())
      });
    } else if (!searchCharacter && status) {
      return characters.filter(character => {
        return character.status.toLowerCase().includes(status.toLowerCase());
      });
    }
  };

  const filteredCharacters = filterCharacters(searchCharacter, status);

  return (
    <div className="tc">
      <h1 className="f1">Breaking Bad Characters</h1>
      <SearchBox searchChange={onSearchChange} />
      <StatusSelect statusChange={onStatusChange} />
      <Scroll>
        <CardList characters={filteredCharacters} />
      </Scroll>
    </div>
  );
}

export default App;

