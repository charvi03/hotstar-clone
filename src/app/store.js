import { configureStore} from "@reduxjs/toolkit/dist";
import  userReducer  from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
  },

});
