import React from 'react'
import '../css/contact.css'

const Contact = () => {
  return (
    <>
    <h2>ingrese sus datos</h2>
    <form>
    <div className='contac-contact'>
                                        <label for="nombre">Ingrese su nombre:</label>  
        
             <input className='data-contact' type="text" placeholder="Nombre y Apellido" id="nombre" minlength="2"  maxlength="12" required/>
        
      </div>
      <div>
                                          <label for="email">Ingrese su email:</label>          
          
          <input className='data-contact' type="email" placeholder="cosmefulanito@gmail.com" id="email"/> 
        
      </div> 


      <div>                                    
          <label for="asunto">Asunto</label>
                                     
            <input className='data-contact' type="text" placeholder="Asunto" id="asunto"/>
         
      </div>
                                       <label for="mensaje">Ingrese  mensaje    </label>
        <div>
                                        <textarea id="mensaje" cols="100" rows="10"></textarea>
        </div>
        <div className="botones-contact">
            <button type="submit">Enviar</button>
            <button type="reset">Restablecer</button>
        </div>
      </form>

    </>
    
  )
}

export default Contact