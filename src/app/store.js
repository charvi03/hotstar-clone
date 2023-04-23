import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit/dist";
import { userReducer } from "..features/user/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  },

});
