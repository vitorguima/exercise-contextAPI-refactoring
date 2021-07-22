import React, { Component } from 'react';
import CarsContext from './CarsContext';

export default class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(color) {
    this.setState({
      signal: { color },
    })
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    const { children } = this.props;

    return (
      <div>
        <CarsContext.Provider value={context}>
        {children}
        </CarsContext.Provider>
      </div>
    );
  };
}
