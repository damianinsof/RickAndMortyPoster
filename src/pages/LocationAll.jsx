import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { BotonesPagesLocation } from './BotonesPageLocation'
import '../css/locations.css'
import { Link } from 'react-router-dom'

const LocationAll = () => {
const {location}=useGlobalContext()
  return (
    <>
    <BotonesPagesLocation/>
    <h2>Locations</h2>
    <div className="content-location">
    {
    location.map(({id,name,type,dimension,created})=> (
      <Location key={id} id={id} name={name} type={type} dimension={dimension} created={created}/>
    ) )
    }
    </div>
    </>
  )
}

export default LocationAll
const Location = ({id,name,type,dimension,created}) => {
    return(
    <>
    <Link to={'/location/'+id}>
    <div className="card-locationAll">
  
    <p>{id}-{name}</p>
    <p>{type}</p>
    <p>{dimension}</p>
    <p>{created}</p>
    </div>
    </Link>
    </>

  )
  }

export {Location}
