import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/featureActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  
  const removeFeature = item => {
    props.removeFeature(item);
  };

  const buyItem = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header carName={props.carName} image={props.image} price={props.price}/>
        <AddedFeatures features={props.features} removeFeature={removeFeature}/>
        
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={props.additionalFeatures}
          buyItem={buyItem}
        />
        <Total price={props.price} additionalPrice={props.additionalPrice}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    image: state.car.image,
    carName: state.car.name,
    price: state.car.price,
    features: state.car.features,
    additionalFeatures:state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature})(App);
