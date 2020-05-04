import React, { useState } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Character = (props) => {
  const [character, setCharacter] = useState(props.results);
  
  console.log(props);

  return (
    <div className="character-container">
      <div className="character-image-wrapper">
        <img
          alt="character-thumbnail"
          className="character-image"
          src={props.results}
        />
      </div>
      
      <div className = 'character-card'>
        <Card character={character} setCharacter={setCharacter}>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle> Name: {character}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Character;
