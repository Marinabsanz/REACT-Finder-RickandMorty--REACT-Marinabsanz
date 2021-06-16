import React from "react";

const CardPerson = (props) => {
  const { name, species, gender, status, image , id} = props.personajes;

  // <li key = {id} className= ''> </li>


  return (
    <article>
      <img className="img" src={image} alt={`foto de ${image}`} />
      <h4> {name} </h4>
      <p> {species}</p>
      <p> {gender}</p>
      <p> {status}</p>
      
    </article>
  );
};

export default CardPerson;
