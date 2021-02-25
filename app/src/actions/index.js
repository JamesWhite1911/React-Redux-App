//https://randomfox.ca/floof/

//import axios
import axios from 'axios'

//export action constants
export const FETCH_IMAGE_LOADING = "FETCH_IMAGE_LOADING";
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS";
export const FETCH_IMAGE_FAIL = "FETCH_IMAGE_FAIL";

//export action functions
export const getImage = () => dispatch => {
    dispatch(fetchImageLoading());

    axios
        .get('https://randomfox.ca/floof/')
        .then(res => {
            dispatch(fetchImageSuccess(res.data.image))
        })
        .catch(err => {
            dispatch(fetchImageFail(err.Response.code))
        })
}

export const fetchImageLoading = () => {
    return ({ type: FETCH_IMAGE_LOADING })
}

export const fetchImageSuccess = (image) => {
    return ({ type: FETCH_IMAGE_SUCCESS, payload: image })
}

export const fetchImageFail = (error) => {
    return ({ type: FETCH_IMAGE_FAIL, payload: error })
}