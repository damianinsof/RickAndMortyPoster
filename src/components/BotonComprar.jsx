import React from 'react'
import '../css/BotonComprar.css'
import { useGlobalContext } from '../context/GlobalContextProvider'

const BotonComprar = () => {
    
    const{cart,handleAddProduct,handleDelProduct}=useGlobalContext()
  

    // const existeUno 
    return (
    <>
    
    <div className='buttonContent'>
        <button className='little'>-</button>
        <p className='middle'></p>
        <button className='little'>+</button>
    </div>
    </>
  )
}

export default BotonComprar