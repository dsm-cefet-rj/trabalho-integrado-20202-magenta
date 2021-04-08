import { configureStore } from '@reduxjs/toolkit'

import demandsReducer from './features/demand/DemandSlice'

export const store = configureStore({
    reducer: {
        demands: demandsReducer
    }
})
