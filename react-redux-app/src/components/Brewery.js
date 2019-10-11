import React from 'react'

const Brewery = (props) => {


     return(
          <div className="brew-container">
    
               <h2>{props.name}</h2>
                   
 

               <div className="brewing-container">
                    <h3>Beer type: {props.brewery_type}</h3>
                    <p>City: {props.city}</p>
                    <p>State: {props.state}</p>
                    <p>Country: {props.country}</p>
               </div>
          </div>
     )
}

export default Brewery