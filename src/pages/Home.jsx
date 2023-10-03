import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContextProvider'
import '../css/Card.css'
import {BsFillCircleFill} from 'react-icons/bs';
import { BotonesPages } from './BotonesPages';

const Home = () => {
    const {character} = useGlobalContext()
   
 
  return (
    <>
    <BotonesPages/>
    <div className='contentCard'>
        {
            character.map(({id,name,image,precio,species,status,location,origin})=>(        
                <Card key={id} id={id} name={name} image={image} precio={precio}
                species={species} status={status} locationName ={location.name} 
                originName={origin.name}/>
            ))
            }        
        </div>
    </>
  )
}

export default Home


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
   /*                         FORMATO DE TARJETA */

   /*-----Función para que que textos largos de la API no arruinen la tarjeta ---------*/
const Card = ({id,name, image,precio,species,status,locationName,originName}) => {
  /*                          Acortamos textos largos */ 
  function fit(texto){
    switch (texto){
        case 'Earth (Replacement Dimension)':return 'Earth (Replace)'
        
        case 'Earth (Unknown dimension)':return 'Earth (Unknown)'
        
        case 'Near-Duplicate Reality':return 'Near-Duplicate...'
        
        case 'Cirque du Soleil Zumanity Member':return 'Circle Du Solei...'
    
        case 'Shmlangela Shmlobinson-Shmlower': return 'Shmlangela S.S.'
        
        case 'Tickets Please Guy Nightmare': return 'Ticket Please..'
      
        default:
            return texto;
    }

   
   }
   function ocultarSiEsUnknown(texto){
    return {display: texto === 'unknown' ? 'none':''}
   }
   const estado = (status =='Alive') ? 'Vivo': (status =='Dead') ? 'Muerto':' Desconocido '
   const colorEstado = {color: status =='Alive'?'lightgreen':(status =='Dead') ? 'red':'Blue'}
   
    return (
      <>
        <Link to={'/detail/'+id}>  
          <div className='charCard'>
          
            <div className='charTitle'>{fit(name)}</div>   
          
            <div className='charContentData'>
              <div className='charData'>
              <span className='primeraData'><BsFillCircleFill style={colorEstado}/> {estado} - {species}  <span className='deta-id'>{id}</span></span>
                {/* <p style={{color:'yellow'}}>Código: {id}</p> */}
                
                <div >
                  
                <p className='cabTitle'>Last known location</p>
                  {/* <Link to={'/location/'+id}> */}
                  <p className='cabData'>Origen: {fit(originName)}</p>
                  {/* </Link> */}
                </div>
                <div >
                  <p className='cabTitle'>First seen in</p>
                  {/* <Link to={'/episode/'+id}> */}
                  <p className='cabData'>{fit(locationName)}</p>
                {/* </Link> */}
                </div>
                <p id='precio'> $ {precio}</p>
               
              </div>
              <img className='charImage' src={image} alt="" />  
            </div>
        </div>
        </Link>
        </>
    )
}

export {Card} 