import React from 'react'
import '../css/Header.css'
import { useGlobalContext } from '../context/GlobalContextProvider'

export const BotonesPages = () => {

   
    const {control,url,setUrl} = useGlobalContext()

     /* ojo- por page, funciona solo con rutas que devuelve datos de navegacion */ 
     /* si incluye page=, tiene numero, sino no se muestra y es cero*/
    const page = (url.includes('page=') 
                  ?
                    ( url !=null && url.split("=").pop()).toString() 
                  :
                    0
                  )

    const prev = (control.prev ==null ?   true :false)
    const proximo = (control.next ==null  ?   true :false)
  /*  las páginas que no necesito controles la oculto detail y detailResume*/ 
    // const verControlesAqui =  {display: url.includes('detail') ?'none':''}zzzz
  return (
    <div>
        {
 (url)
 ?
<>
<div className='botones'>
<button  disabled = {prev} onClick={()=>setUrl(control.prev)}>Anterior</button>
<span className='intraButton'>{page} / {control.pages}  </span>
<button  disabled = { proximo} onClick={()=>setUrl(control.next)}>Siguiente</button>
</div>  
</>
:
<div></div>
        }
    </div>
  )
}
