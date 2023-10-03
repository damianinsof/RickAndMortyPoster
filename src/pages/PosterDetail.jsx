
import React from 'react'
import  Error404  from '../components/Error404'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContextProvider'
import '../css/PosterDetail.css'
import BotonComprar from '../components/BotonComprar'


const PosterDetail = () => {
  const {id} = useParams() 

  const{cart,handleAddProduct,handleDelProduct}=useGlobalContext()
   
   const {character} = useGlobalContext()
   const isHere = character.some((p)=>p.id ==id)
   const characterSelected =  character.find((p)=>p.id ==id)

   const estaPedido = cart.some((poster)=>poster.id==id)
   
 const listaEpisodios =  (characterSelected.episode).map(p=>p.split('/').pop())
 
  
  // function getListEpisode(e){
  //   const listaEpisodios = (characterSelected.episode).map(function(s){
  //     return s.split('/').pop()
  //   })
  //   // console.log(listaEpisodios)
  //   // return listaEpisodios.map(p=>(p.split("/").pop())
  // }
   
   
  

    return (
      <>
      <div>
      {
        (isHere)?
        <>
        <div className="fichaCharacter">
          <img src={isHere && characterSelected.image} alt="" />
          <div className="dataCharacter">
          <p>(id:{characterSelected.id}) Nombre:{characterSelected.name} </p>
          <p>Especie:{characterSelected.species}</p>
          <p>Estado:{characterSelected.status}
             Género:{characterSelected.gender}</p>
          <p>Creado:{(characterSelected.created)}</p>
          <p>Origen:{characterSelected.origin.name} </p>
          <p>Location: {characterSelected.location.name}</p>
          <p>{characterSelected.type =='' ?'':'tipo:'}{characterSelected.type}</p>
          <p className='precio'> ${(characterSelected.precio)}</p> 
           

          {/*            Boton de compra     */ }
          <div className='buttonContent'>
            <button disabled={!characterSelected.precio} 
                    onClick={()=>handleDelProduct(id)}
                    className='little'>-</button>
            <p  className='middle'></p>
            <button onClick={()=>handleAddProduct(id)} className='little'>+</button>
          </div>
        </div>
          
         </div>
 
          <div className='contentEpisode'>

            <h2 className='h2-title'>Episodios</h2>

          {
            (listaEpisodios)?
            
            listaEpisodios.map((e,index)=>(
              // <Link to={'/episode/:'+e}>
                <CardEpisode  key={index} episodenumber={e}/>
              // </Link>
                  ))
                  
                      
            :<div></div>
          }
          </div>
        </>  
        : 
        <Error404 mensaje={"error en carga"}></Error404>
      }
      </div>
          </>
 
  )
}

export default PosterDetail

const CardEpisode = ({episodenumber}) =>{

  return(
    <>
    <div className='cardEpisode-single'>{episodenumber} 
    </div>

    </>
  )

}

export {CardEpisode}
