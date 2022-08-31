import {
  ALL_CASES_FAIL,
  ALL_CASES_REQUEST,
  ALL_CASES_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/casesConstants";

// import {ReportData, State} from '../App'


export type Error = {
  message: string;
};
export type ReducerState = {
  loading: boolean;
  error: Error;
  // data: ReportData;
  // cases: State
}

// : { type: string; payload:ReportData; }

  export const allCasesReducer = (state = { cases: [] }, action: { type: any; payload: { states: any; }; }) => {
    switch (action.type) {
      case ALL_CASES_REQUEST:
        return {
          loading: true,
        };

      case ALL_CASES_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          cases: action.payload.states,
        };

      case ALL_CASES_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };

      default:
        return state;
    }
  };