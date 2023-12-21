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
import { Commande } from '../Pages/myCommandes/commandes/Commande'
import { Paiments } from '../Pages/myCommandes/paiments/Paiments'
import { Remboursement } from '../Pages/myCommandes/romborsement/Remboursement'
import { FeedBack } from '../Pages/myCommandes/feedback/FeedBack'
import { AdressLivraison } from '../Pages/myCommandes/adresslivraison/AdressLivraison'
import { ServiceClient } from '../Pages/myCommandes/serviceclient/ServiceClient'
import { Favorite } from '../Pages/myCommandes/favorite/Favorite'


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
        <Route path='/home/commandes' element={<HomeCommandes/>} />

        <Route path='/p'  >
        <Route path='orders' element={<Commande/>} />
        <Route path='paiments' element={<Paiments/>} />
        < Route path='refund-dispute' element={<Remboursement/>} />
          </Route>

          <Route path='/avis/feedback' element={<FeedBack/>} />
          <Route path='/adress/livraison' element={<AdressLivraison/>} />
          <Route path='/serviceclient' element={<ServiceClient/>} />
          <Route path='/favorite' element={<Favorite/>} />

      
        </Routes> 
    </>
  )
}
