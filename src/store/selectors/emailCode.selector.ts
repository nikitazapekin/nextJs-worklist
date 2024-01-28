
import type { RootState } from '../store';
export const emailCodeSelector= (state: RootState) => state.emailCodeSlice.code
export const emailCodeLoadingStatusSelector= (state: RootState) => state.emailCodeSlice.emailCodeLoadingStatus