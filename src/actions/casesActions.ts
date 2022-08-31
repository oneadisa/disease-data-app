import axios from "axios";
import {
  ALL_CASES_FAIL,
  ALL_CASES_REQUEST,
  ALL_CASES_SUCCESS,
  CLEAR_ERRORS
} from "../constants/casesConstants";

import { ReducerState} from "../reducers/casesReducer";

export const getAllCases = () => async (dispatch: (arg0: { type: string; payload?: ReducerState | unknown; }) => void) => {
  try {
    dispatch({ type: ALL_CASES_REQUEST });

    const { data } = await axios.get("https://covidnigeria.herokuapp.com/api");

    dispatch({ type: ALL_CASES_SUCCESS, payload: data });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      dispatch({
        type: ALL_CASES_FAIL,
        payload: error.message,
      });
    } else {
      console.log('Unexpected error', error);
    }
    
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: (arg0: { type: any; }) => void) => {
  dispatch({ type: CLEAR_ERRORS });
};
