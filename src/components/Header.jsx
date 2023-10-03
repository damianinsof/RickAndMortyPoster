import React from 'react'
import  '../css/Header.css'
import { FiShoppingCart } from 'react-icons/fi';
import  { useGlobalContext } from '../context/GlobalContextProvider';
import ShopDetail from './ShopDetail';
import { Link } from 'react-router-dom';

const Header = () => {

const {verShopDetail,SetVerShopDetail,cart} =useGlobalContext()

const sumTot = cart.reduce((acumulo, pedido) => {
  acumulo += Number(pedido.cant);
  return Number(acumulo);
}, []);

const sumPedido = cart.reduce((acumulo, pedido) => {
  acumulo += Number(pedido.cant*pedido.precio);
  return Number(acumulo);
}, []);


   return (
    <header className='cabecera'>
      <div className='cab-primera-linea'>
        <img src="http://imgfz.com/i/kbEu63Q.png" alt="" />
        <h1> Rick And Morty </h1>
        <div className='carrito' >
          <FiShoppingCart size='40px'/>
          <span onClick={()=>SetVerShopDetail(true)} className='cant-tot-compra'>{sumTot}</span>
        </div>
        <ShopDetail verDetail={verShopDetail} cerrar={()=>SetVerShopDetail(false)} totPedido={sumPedido}/>
      </div>
      
      <div className='menu-button'>
        <Link to={'/home'}><span>Character</span></Link> 
        <Link to={'/locationAll'}><span>Locations</span></Link>
        <Link to={'/episodeAll'}><span>Episodes</span></Link> 
      </div>

    </header>
  )
}

export default Header

