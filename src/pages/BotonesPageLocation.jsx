import React from 'react'
import '../css/Header.css'
import { useGlobalContext } from '../context/GlobalContextProvider'

export const BotonesPagesLocation = () => {

   
    const {controlL,urlLocation,setUrlLocation} = useGlobalContext()

     /* ojo- por page, funciona solo con rutas que devuelve datos de navegacion */ 
     /* si incluye page=, tiene numero, sino no se muestra y es cero*/
    const page = (urlLocation.includes('page=') 
                  ?
                    ( urlLocation != null && urlLocation.split("=").pop()).toString() 
                  :
                    0
                  )

    const prev = (controlL.prev ==null ?   true :false)
    const proximo = (controlL.next ==null  ?   true :false)
  /*  las páginas que no necesito controles la oculto detail y detailResume*/ 
    // const verControlesAqui =  {display: url.includes('detail') ?'none':''}zzzz
  return (
    <div>
        {
 (urlLocation)
 ?
<>
<div className='botones'>
<button  disabled = {prev} onClick={()=>setUrlLocation(controlL.prev)}>Anterior</button>
<span className='intraButton'>{page} / {controlL.pages}  </span>
<button  disabled = { proximo} onClick={()=>setUrlLocation(controlL.next)}>Siguiente</button>
</div>  
</>
:
<div></div>
        }
    </div>
  )
}