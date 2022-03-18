import { combineReducers } from "redux";
import carouselMovieReducer from "../../cointainer/HomeTemplate/_components/Carousel/modules/reducer";

const rootReducer = combineReducers({
    carouselMovieReducer,
});

export default rootReducer;