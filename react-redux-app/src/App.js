import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchBeer } from './actions/'
import BreweryList from './components/BreweryList'


function App(props) {

  useEffect( () => {
    props.fetchBeer();
  },[])

  // calling props.fetchBeer() will call the axios and show action creator - middleware - reducer
  // console.log(props.fetchBeer())

  return (
    <div className="App">
      <BreweryList beers={props.beers}/>
    </div>
  );
}


const mapStateToProps = state => {
  return{
    beers: state.beers,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchBeer})(App);
