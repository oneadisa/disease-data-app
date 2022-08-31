import React from 'react'
import { State } from "../../features/cases/casesSlice";
import './stateCases.css'

export interface StateProp {
  state: State;
}

const StateCases = ({ state }: StateProp) => {
  return (
    // <div className="stateBox">
      <div className="stateItems">
        <h1>{state.state}</h1>
        <p className='confirmed'>{state.confirmedCases}</p>
        <p className='admission'>{state.casesOnAdmission}</p>
        <p className='discharged'>{state.discharged}</p>
        <p className='death'>{state.death}</p>
      </div>
    // </div>
  );
};

export default StateCases