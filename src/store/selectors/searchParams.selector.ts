
import type { RootState } from '../store';

export const searchParamsSelector= (state: RootState) => state.searchParamsSlice.payloadParams
//export const loginLoadingStatusSelector= (state: RootState) => state.loginSlice.loginLoadingStatus
