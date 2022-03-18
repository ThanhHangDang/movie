import * as ActionType from "./constants";
import axios from "axios";

const actCarouselMovieRequest = () => {
    return {
        type: ActionType.CAROUSEL_MOVIE_REQUEST,
    }
}

const actCarouselMovieSuccess = (data) => {
    return {
        type: ActionType.CAROUSEL_MOVIE_SUCCESS,
        payload: data,
    }
}

const actCarouselMovieFail = (err) => {
    return {
        type: ActionType.CAROUSEL_MOVIE_FAILED,
        payload: err,
    }
}

export const actFetchCarouselMovie = (id) => {
    return (dispatch) => {
        //request
        dispatch(actCarouselMovieRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=3`,
            method: "GET",
        })
            .then((result) => {
                //Success
                dispatch(actCarouselMovieSuccess(result.data));
            })
            .catch((err) => {
                //Fail
                dispatch(actCarouselMovieFail(err));
            })
    }
}