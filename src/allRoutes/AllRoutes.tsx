import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import { Worker } from '../Pages/Workers/Worker'
import { ProfilBayer } from '../Pages/storeShop/ProfilBayer'
import { CategoriesType } from '../Pages/storeShop/Components/categories/CategoriesType'
import { AvisVendeur } from '../Pages/storeShop/Components/avisvendeur/AvisVendeur'
import { HomeStore } from '../Pages/ProductStore/Homestore/HomeStore'
import { PaymentStores } from '../Pages/ProductStore/PaymentStore/PaymentStores'
import { HomeCommandes } from '../Pages/myCommandes/HomeCommandes'


export default function AllRoutes() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<Worker/>} />
        <Route path='/store/:storeId' element={<ProfilBayer/>} />
        <Route path='/store/:storeId/:categories' element={<CategoriesType/>} />
        <Route path='/store/:storeId/avis' element={<AvisVendeur/>} />
        <Route path='/stores'  >
          <Route path='productuser' element={<HomeStore/>} />
          <Route path='payment' element={<PaymentStores/>} />
        </Route>
        <Route path='/p/commandes' element={<HomeCommandes/>} />
      
        </Routes> 
    </>
  )
}
