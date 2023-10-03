import React, {useContext, createContext, useState, useEffect} from 'react'
import getData from '../Data/GetDataFrom'

import precioPoster from '../Data/precioPoster'
import { UNSAFE_DataRouterStateContext } from 'react-router-dom'
import { BsFillCalendar2MonthFill } from 'react-icons/bs'

const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {

// const [page,setPage] = useState(1)
const[url,setUrl]=useState('https://rickandmortyapi.com/api/character?page=1')

const [control,setControl]= useState([])

const [character,setCharacter]=useState([])

// const [characterVisto,setCharactervisto]=useState([])

const [urlLocation,setUrlLocation]=useState('https://rickandmortyapi.com/api/location?page=1')
const [location,setLocation]=useState([])
const [controlL,setControlL]= useState([])

const [urlEpisode,setUrlEpisode]=useState('https://rickandmortyapi.com/api/episode?page=1')
const [episode,setEpisode]=useState([])
const [controlE,setControlE]= useState([])


const [cart, setCart] = useState([])

const [verShopDetail,SetVerShopDetail]=useState(false)

const handleDelProduct =(id) =>{
  
  const isInCart = cart.find(personaje => personaje.id == id)
  const isInCartandIsOne = cart.find(personaje => personaje.id == id && personaje.cant==1)

  if(isInCart){
    if (isInCartandIsOne){
      setCart([cart.filter((personaje) =>personaje.id != id)])
    }else
    setCart(
      cart.map((personaje) =>{
        if(personaje.id == id && personaje.cant > 1){
          personaje.cant--
  
        }
        return personaje
      })
    )
  }
}
  
const handleAddProduct = (id) =>{
  const characterFound = character.find(personaje => Number(personaje.id) === Number(id))
  const isInCart = cart.find(character => character.id == id)

  if(isInCart){
    setCart(
      cart.map((poster) =>{
        if(poster.id === id ){
          poster.cant++
              }
        return poster
      })
    )
  }
  else{
    setCart([...cart, 
        {
          "id":id,
        "precio":characterFound.precio, 
        cant: 1}])
      }
  
}



function agregarPrecio(tandaCharacters) {
  function buscarPrecio(id) {
    return precioPoster.find(p=>p.codigo == id).precio
  }
tandaCharacters.forEach(e => {e.precio = buscarPrecio(e.id)});
return (tandaCharacters)
}


    /**********************************/
    /*            useEfect            */
    /**********************************/
/**************************************************/
/* Agregar precio al array de Character - lo traigo de array precioPoster*/ 
/*********************************************/
/*         character    */
// function agregoNuevos(arrayChar){ 
//   function estabaVisto(miId){
//     return characterVisto.some(J=>J.id ==miId)
//   }
//   arrayChar.forEach(pers => 
//     (!estabaVisto(pers.id)) &&  setCharactervisto(...characterVisto,pers)) 
//  console.log(characterVisto)
  
// }

useEffect(()=>{
  async function getPage(url){
      const paquete = await getData(url)
      const tienePrecio = await agregarPrecio(paquete.results)
      setControl(paquete.info)
      setCharacter(tienePrecio)
      // agregoNuevos(tienePrecio)
      /*
            Quede con ganas de mostrar todos lo spersonajes en episodios y location
            pero deberia tener todos los perosnajes cargados
            se me habia ocurrido dejar character para paginacion y crear otro, pero
            esta mal habria que rediseñar para tener todos los character y 
            paginar distinto 
    */     }
   getPage(url)
},[url])

/*********************************************/
/*     locaction  */
useEffect(()=>{
  async function getPage(urlLocation){
  const paquete = await getData(urlLocation)
  setLocation(paquete.results)
  setControlL(paquete.info)
 }
getPage(urlLocation)
},[urlLocation])
/*********************************************/
/*     episode  */
useEffect(()=>{
  async function getPage(urlEpisode){
  const paquete = await getData(urlEpisode)
  setControlE(paquete.info)

    // setEpisode(agregoChar(paquete.results))  intente aca pero no..queria un string con todos los id de personajes del episodio
   setEpisode(paquete.results)

}
getPage(urlEpisode)
},[urlEpisode])


return (
    <GlobalContext.Provider 
        value={{
              character, url,setUrl,
              location, urlLocation,setUrlLocation,
              episode, urlEpisode,setUrlEpisode,
              control,controlE,controlL,
              verShopDetail,SetVerShopDetail,
              cart,handleAddProduct,handleDelProduct}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider