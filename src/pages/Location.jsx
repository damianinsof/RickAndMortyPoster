import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContextProvider'
import '../css/locations.css'

const Location = () => {
const {id} =useParams()

const {location} = useGlobalContext()
const miLocation = location.find(p=>p.id ==id)

const chars = miLocation.residents.map(p=>p.split('/').pop())


return (
    <div>
        {
            (miLocation)?
            <>
            <h2 className='h2-data'>Location selected</h2>
            <div className='loca-detail-one'>
            <p>Name {miLocation.name} </p>
            <p>Location: {miLocation.id} </p>
            <p>Type:{miLocation.type}</p>
            <p>Dimension:{miLocation.dimension}</p>
            <p>Created:{miLocation.created}</p>
            </div>
            <h2 className='h2-data' >Characters residents</h2>
            <div className="loca-char-container">
            {
                chars.map((idChar,index)=>(
                    <CharFromLocation
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

export default Location

const CharFromLocation = ({charId}) =>{
  const {character}=useGlobalContext()
  const estaID = character.find(p=>p.id == charId)
    return(
      <>
           {(estaID)
            ?
           // <Link to={'/detail/'+charId}>
            <img className='imagen-chica' src={estaID.image} alt="" />
           // </Link>
        :
        <div className='cardChar-single'>{charId} </div>
           }
  
      </>
    )
    }
    export {CharFromLocation}
/*
si descomento Link falla en Locaton 3 por ejemplo
sin tiempo para corregir, en otras paginas puede que no falle :(
*/    

  