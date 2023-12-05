import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import { Worker } from '../Pages/Workers/Worker'
import { ProfilBayer } from '../Pages/storeShop/ProfilBayer'


export default function AllRoutes() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<Worker/>} />
        <Route path='/store/:storeId' element={<ProfilBayer/>} />
        </Routes> 
    </>
  )
}
