import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../../app/store";


// Define a type for the slice state

export type State = {
  state: string;
  _id: string;
  confirmedCases: number;
  casesOnAdmission: number;
  discharged: number;
  death: number;
};
export type ReportData = {
  // totalSamplesTested: string | null;
  // totalConfirmedCases: number | null;
  // totalActiveCases: number | null;
  // discharged: number | null;
  // death: number | null;
  // states: State[] | null;
  totalSamplesTested: string;
  totalConfirmedCases: number;
  totalActiveCases: number;
  discharged: number;
  death: number;
  states: State[];
};

interface ReportPayload {
  payload: ReportData 
  // | string;
}

export type Error = {
  message: string;
};
export type CasesState = {
  loading: boolean;
  error: ReportData | string;
  // error: Error | boolean;
  data: ReportData 
    | {
        totalSamplesTested: null,
        totalConfirmedCases: null,
        totalActiveCases: null,
        discharged: null,
        death: null,
        states:  null;
      };
  // cases: State;
};

// Define the initial state using that type
const initialState: CasesState = {
  loading: true,
  error: 'false',
  data: {
  totalSamplesTested: null,
  totalConfirmedCases: null,
  totalActiveCases: null,
  discharged: null,
  death: null,
  states: null
}
};

export const casesSlice = createSlice({
  name: "cases",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    getCases: (state, action: ReportPayload) => {
       state.error = action.payload;
       state.loading = false;
       state.data = action.payload;
    },
  },
});

export const { getCases } = casesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const getAllCases =
  () =>
  async (
    dispatch: (arg0: { type: string; payload?: ReportData | unknown }) => void
  ) => {
    try {
      // dispatch({ type: ALL_CASES_REQUEST });

      const { data } = await axios.get(
        "https://covidnigeria.herokuapp.com/api"
      );
        console.log(data.data)
      dispatch(getCases(data.data))
      // dispatch({ type: ALL_CASES_SUCCESS, payload: data });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        // dispatch(getCases(error.message));
        //  dispatch({
        //    type: ALL_CASES_FAIL,
        //    payload: error.message,
        //  });
      } else {
        console.log("Unexpected error", error);
      }
    }
  };

  // Clearing Errors
export const clearErrors = () => async (dispatch: (arg0: { type: any; }) => void) => {
  // dispatch(getCases('false'));
};
export const selectCases = (state: RootState) => state.cases;

export default casesSlice.reducer;
