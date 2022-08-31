import  { Fragment, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllCases, clearErrors } from "./features/cases/casesSlice";
import { useAppSelector, useAppDispatch } from './app/hooks'
import Loader from "./components/Loader/Loader";
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{data.totalSamplesTested}</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </Fragment>)}
      </Fragment>
    </div>
  );
}

export default App;
