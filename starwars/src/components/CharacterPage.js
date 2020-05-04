import React, { useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'


const CharacterPage = (props) => {
  const [character, setCharacter] = useState([])

  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((response) => {
      console.log(response.data);
      console.log(CharacterData);
    })
    .catch((error) => {
      console.log(error);
    });
   
  
  
  console.log(props);
  console.log(props.data)
  return (
    <div className="character-container">
      {((element) => {
        return <CharacterCard character={character} setCharacter={setCharacter}/>
      })}
    <div>
      
    </div>

      
      
    </div>
  );
};

export default CharacterPage;
