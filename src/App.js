import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/index';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({addFeature, removeFeature, additionalPrice, car, options}) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };
  const removeItem = item => {
    // dispatch an action here to remove an item
    removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeItem}/>
      </div>
      <div className="box">
        <AdditionalFeatures  additionalFeatures={options} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};


// export default App;

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    options: state.additionalFeatures
  };
};

export default connect( mapStateToProps, { addFeature, removeFeature } )(App);
