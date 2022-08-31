import  { Fragment, useEffect } from "react";
import "./App.css";
import { getAllCases, clearErrors } from './features/cases/casesSlice';
import { useAppSelector, useAppDispatch } from './app/hooks'
import Loader from "./components/Loader/Loader";
import StateCases from "./components/StateCases/stateCases"
import {State} from './features/cases/casesSlice'



export interface StateProp {
  asset: State;
}
function App() {
  const dispatch = useAppDispatch();

  const { error, loading, data } = useAppSelector((state) => state.cases);

  useEffect(() => {
    if (error !== 'false') {
      // alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAllCases());
  }, [dispatch, error]);


  return (
    <div className="App">
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            
              <div className="body">
                <h1 className="title">COVID NIGERIA</h1>
                <h4 className='tested' >Total Samples Tested: {data.totalSamplesTested}</h4>
                <h4 className='confirmed'>Confirmed Cases: {data.totalConfirmedCases}</h4>
                <h4 className='admission'>Active Cases: {data.totalActiveCases}</h4>
                <h4 className='discharged'>Discharged: {data.discharged}</h4>
                <h4 className='death'>Deaths: {data.death }</h4>
                <div className="stateContainer">
                  {data.states?.map((state: State) => (
                    <StateCases key={state._id} state={state} />
                  ))}
                </div>
              </div>
          
          </Fragment>
        )}
      </Fragment>
    </div>
  );
}

export default App;
