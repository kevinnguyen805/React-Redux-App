import axios from 'axios'

export const BEER_START = "BEER_START";
export const BEER_SUCCESS = "BEER_SUCCESS";
export const BEER_FAILURE = "BEER_FAILURE";

export const fetchBeer = () => dispatch => {
     dispatch( {type: BEER_START});
     axios.get('https://api.openbrewerydb.org/breweries')
     .then(response => {
          dispatch( {type: BEER_SUCCESS, payload: response.data})
          // console.log(response.data)
     })
     .catch(error => {
          dispatch( {type: BEER_FAILURE, payload:error})
     })
}

export const STATE_START="STATE_START";
export const STATE_SUCCESS="STATE_SUCCESS";
export const STATE_FAILURE="STATE_FAILURE";

export const fetchStateBeer = (search) => (dispatch) => {
     console.log(search)
     dispatch({ type: STATE_START});
     axios.get(`https://api.openbrewerydb.org/breweries?by_state=${search}`)
     .then(response => {
          console.log(response.data)
          dispatch({type: STATE_SUCCESS, payload: response.data})
     })
     .catch(error => {
          dispatch( {type: STATE_FAILURE, payload: error})
     })
}