import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import '../css/shopDetail.css'


export default function ShopDetail ({verDetail, cerrar, totPedido})  {
    if(!verDetail) return true

const {cart} =useGlobalContext()


  return (
    <>
    {verDetail && 
    <div className="modal">
        <div className="overlay" onClick={cerrar}></div>
        <div className="modal-content">
        <p onClick={cerrar}>X</p>
            <div className='shop-title-detail'>Detalle compra</div>
            <p className='cab-detalle'>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
            </p>
            {
                cart.map((posters,index)=>(
                    <DetailLine key={index} compra={posters}/>

                ))
            }
            <p className='totalPedido'>Total Compra      ${totPedido}   </p>
            <p className='costoPedido'>Pagar </p>
        
        
        </div>
    </div>
    }

    </>
    
  )
}

const DetailLine = ({compra}) =>{

    return(
      <>
      <div className='linea-compra'>  
      <span>{compra.cant}</span>
      <span>$ {(compra.precio)}</span>
      <span>$ {(compra.cant *compra.precio)}</span>
      </div>
  
      </>
    )
  
  }
  
  export {DetailLine}
  