import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { dashboardSlice } from './dashboard'
import { publicAppSlice } from './publicApp/PublicAppSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dashboard: dashboardSlice.reducer,
    publicApp: publicAppSlice.reducer,
  },
})