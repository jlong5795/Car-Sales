import React from 'react';
import { connect } from 'react-redux';


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

const mapStateToProps = state => {
  return {
    image: state.car.image,
    carName: state.car.name,
    price: state.car.price
  };
};

export default connect(mapStateToProps, {})(Header);
