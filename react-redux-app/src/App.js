import React, {useState, useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { fetchBeer, fetchStateBeer } from './actions/'
import BreweryList from './components/BreweryList'


function App(props) {


  // useEffect( () => {
  //   props.fetchBeer();
  // },[])

  // calling props.fetchBeer() will call the axios and show action creator - middleware - reducer
  // console.log(props.fetchBeer())

  const [search, setSearch] = useState('')
  const handleChanges = event => {
    setSearch(event.target.value)
  }

  return (
    <div className="App">
      <h1>BEER FIRST.</h1>
      <button onClick={() => props.fetchBeer()}>Find a Brew</button>

      
      <input 
        type="text"
        name="search"
        value={search}
        onChange={handleChanges}
      />
      <button onClick={() => props.fetchStateBeer(search)}>Find a Brew by state</button>
  
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

export default connect(mapStateToProps, {fetchBeer, fetchStateBeer})(App);
