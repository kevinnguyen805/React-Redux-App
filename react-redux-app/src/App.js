import React from 'react';
import './App.css';
import {connect} from 'react-redux'



function App() {
  return (
    <div className="App">
      hi
    </div>
  );
}


const mapStateToProps = state => {
  return{
    beer: state.beer
  }
}

export default connect(mapStateToProps, {})(App);
