import {BEER_START, BEER_SUCCESS, BEER_FAILURE} from '../actions/'


const initialState = {
     beers:[],
     isFetching: false,
     error:''
}

const reducer = (state = initialState, action) => {
     switch(action.type){
          case BEER_START:
               return{
                    ...state,
                    isFetching:true,
                    error:''
               }
          case BEER_SUCCESS: 
               return{
                    ...state,
                    beers: action.payload,
                    isFetching:false,
                    error:''
               }
          case BEER_FAILURE:
               return{
                    ...state,
                    isFetching:false,
                    beers: action.payload,
                    error: "Uh oh! Couldn't grab you a beer"
               }
          default:
          return state
     }
}

export default reducer;

