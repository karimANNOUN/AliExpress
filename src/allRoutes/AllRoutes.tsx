import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import { Worker } from '../Pages/Workers/Worker'
import { ProfilBayer } from '../Pages/storeShop/ProfilBayer'
import { CategoriesType } from '../Pages/storeShop/Components/categories/CategoriesType'


export default function AllRoutes() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<Worker/>} />
        <Route path='/store/:storeId' element={<ProfilBayer/>} />
          <Route path='/store/:storeId/:categories' element={<CategoriesType/>} />
      
        </Routes> 
    </>
  )
}