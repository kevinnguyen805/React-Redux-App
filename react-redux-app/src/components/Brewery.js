import React from 'react'

const Brewery = (props) => {


     return(
          <div>
               <div>
                    <h2>{props.name}</h2>
                    <h3>{props.brewery_type}</h3>
                    <p>{props.website_url}</p>
               </div>

               <div>
                    <p>{props.city}</p>
                    <p>{props.state}</p>
                    <p>{props.country}</p>
               </div>
          </div>
     )
}

export default Brewery