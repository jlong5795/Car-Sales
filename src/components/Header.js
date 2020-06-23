import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.carName} />
      </figure>
      <h2>{props.carName}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

export default Header;
