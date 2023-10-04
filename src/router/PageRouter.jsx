import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact, Home, Episode, LocationAll, PosterDetail, Location, EpisodeAll } from '../pages'
import  Error404  from '../components/Error404'

const PageRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/locationAll/' element={<LocationAll/>}/>
            <Route path='/episodeAll/' element={<EpisodeAll/>}/>  
            <Route path='/contact/' element={<Contact/>}/>  
            <Route path='/detail/:id' element={<PosterDetail/>}/>
            <Route path='/location/:id' element={<Location/>}/>
            <Route path='/episode/:id' element={<Episode/>}/>

            <Route path='/contact' element={<Contact/>}/>
                      
            <Route path='*' element={<Error404 mensaje={'La ruta buscada no existe'} />}/>
        </Routes>
    </>
  )
}

export default PageRouter

