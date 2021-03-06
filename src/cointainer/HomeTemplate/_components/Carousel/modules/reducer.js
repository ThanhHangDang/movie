import * as ActionType from "./constants";

const initialState = {   
    data: null,
    loading: false,
    error: null,
};

const carouselMovieReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionType.CAROUSEL_MOVIE_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};
        
        case ActionType.CAROUSEL_MOVIE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state};

        case ActionType.CAROUSEL_MOVIE_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state};

        default:
            return {...state};
    }
}

export default carouselMovieReducer;