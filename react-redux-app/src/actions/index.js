import axios from 'axios'

export const BEER_START = "BEER_START";
export const BEER_SUCCESS = "BEER_SUCCESS";
export const BEER_FAILURE = "BEER_FAILURE";

export const fetchBeer = () => dispatch => {
     dispatch( {type: BEER_START});
     axios.get('https://api.openbrewerydb.org/breweries')
     .then(response => {
          dispatch( {type: BEER_SUCCESS, payload: response.data})
          console.log(response.data)
     })
     .catch(error => {
          dispatch( {type: BEER_FAILURE, payload:error})
     })
}

// export const 

// export const fetchingBeer = () dispatch => {
//      dispatch({ type: BEER_START})
// }