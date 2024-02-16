
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface OfferPayload {
  title: string;
  skills: string[];
  workingPerDay: number;
  location: string;
  salary: {
    from: string;
    to: string;
  };
}
interface SearchParamsState {
  payloadParams: OfferPayload;
}
const initialState: SearchParamsState = {
  payloadParams: {
    title: "",
    skills: [],
    workingPerDay: 0,
    location: "",
    salary: {
      from: "",
      to: ""
    } 
  }
}
export const searchParamsSlice = createSlice({
  name: 'pesr',
  initialState,
  reducers: {
    setSearchParamsState: (state, action: PayloadAction<OfferPayload>) => {
      state.payloadParams = action.payload;
      console.log("NEWWWWWWWWWWWW STATE "+ JSON.stringify(state.payloadParams))
    },
  }
});
export const { setSearchParamsState } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
