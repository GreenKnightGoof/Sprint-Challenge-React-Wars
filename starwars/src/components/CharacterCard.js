import React from "react";

const CharacterCard = (props) => {
  return (
    <div className="character-card" key={props.id}>
      <h2>Character Name: {props.name}</h2>
      <img alt="Wubba Lubba Dub Dub!"
            className='character-image'
            src={props.image} />
    </div>
  );
};

export default CharacterCard;
