import React from 'react'
import Brewery from './Brewery'

function BreweryList(props){

     return(
          <div>
               {
                    props.beers.map(item => {
                         return (<Brewery key={item.id} {...item} />)
                    })
               }
          </div>
     )
}


export default BreweryList 