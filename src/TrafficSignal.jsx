// src/TrafficSignal.jsx
import CarsContext from './context/CarsContext';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

export default class TrafficSignal extends Component {
  renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  render() {
    const { color } = this.context.signal;
    const { changeSignal } = this.context;
  
    return (
      <div>
         <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={this.renderSignal(color)} alt="" />
      </div>
    )
  }
}

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

TrafficSignal.contextType = CarsContext;
