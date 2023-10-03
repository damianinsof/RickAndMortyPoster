import React from 'react'
import '../css/Header.css'
import { useGlobalContext } from '../context/GlobalContextProvider'

export const BotonesPagesEpisode = () => {

   
    const {controlE,urlEpisode,setUrlEpisode} = useGlobalContext()

     /* ojo- por page, funciona solo con rutas que devuelve datos de navegacion */ 
     /* si incluye page=, tiene numero, sino no se muestra y es cero*/

    const page = (urlEpisode.includes('page=') 
                  ?
                    ( urlEpisode != null && urlEpisode.split("=").pop()).toString() 
                  :
                    0
                  )

    const prev = (controlE.prev ==null ?   true :false)
    const proximo = (controlE.next ==null  ?   true :false)
  /*  las páginas que no necesito controles la oculto detail y detailResume*/ 
    // const verControlesAqui =  {display: url.includes('detail') ?'none':''}zzzz
  return (
    <div>
        {
 (urlEpisode)
 ?
<>
<div className='botones'>
<button  disabled = {prev} onClick={()=>setUrlEpisode(controlE.prev)}>Anterior</button>
<span className='intraButton'>{page} / {controlE.pages}  </span>
<button  disabled = { proximo} onClick={()=>setUrlEpisode(controlE.next)}>Siguiente</button>
</div>  
</>
:
<div></div>
        }
    </div>
  )
}