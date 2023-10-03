import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContextProvider'
import '../css/episodes.css'

const Episode = () => {
const {id} =useParams()
const {episode}=useGlobalContext()
const miEpisode = episode.find(p=>p.id ==id)


const chars = miEpisode.characters.map(p=>p.split('/').pop())


return (
    <div>
        {
            (miEpisode)?
            <>
            <h2>Episode selected</h2>
            <div className='epi-detail-one'>
            <p>
                <span >Name:</span> 
                {miEpisode.name} 
            </p>
            <p>
                <span >Episode:</span> 
                    {miEpisode.id} 
                    <span>Season:</span> 
                    {(miEpisode.episode).substr(1,2)}
            </p>
            <p>
                <span >Created:</span>
                {miEpisode.created}
            </p>
            <p>
                <span >On air:</span>
                {miEpisode.air_date}
            </p>
            </div>
            
            <h2 className='h2-mas-suave'>Characters in this episode</h2>
            
            <div className="epi-char-container">
            {
                chars.map((idChar,index)=>(
                    <CharFromEpisode
                    key={index}
                    charId={idChar}
                    />
                ))
            }
            </div>
            </>
            :
            <div></div>
        }
    </div> 
  )
}

export default Episode

const CharFromEpisode = ({charId}) =>{
    const {character}=useGlobalContext()
   
    const estaID = character.find(p=>p.id == charId)
    return(
      <>
      { (estaID)
            ?
             <Link to={'/detail/'+charId}>
            <img className='imagen-chica' src={estaID.image} alt="" />
             </Link>
        :
        <div className='cardChar-single'>{charId} </div>
        }
      
      </>
    )
  
  }
  
  export {CharFromEpisode}

