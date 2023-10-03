import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { BotonesPagesEpisode } from './BotonesPageEpisode'
import '../css/episodes.css'
import { Link } from 'react-router-dom'

const EpisodeAll = () => {
const {episode}=useGlobalContext()
  
  return (
    <>
    <BotonesPagesEpisode/>

    <h2>Episodes</h2>
    <div  className="content-episodes">
    {
    episode.map(({id,name,air_date,episode,created})=> (
      <Episode 
      key={id} 
      id={id}
      name={name} 
      air_date={air_date} 
      episode={episode} 
      created={created} />
    ) )
    }
    </div>
    </>
  )
}

export default EpisodeAll

const Episode = ({id,name,air_date,episode,created}) => {

  return(
    <>
    <Link to={'/episode/'+id}>
    <div  className="cardEpisode">
      <p className='epi-title-card'><span>{name}</span></p>
      <p>ID {id}- Season-Episode:{episode}</p>
      <p>Air Date:{air_date}</p>
      <p>Created:{created}</p>
    </div>
    </Link>
    </>

  )
  }

export {Episode}

