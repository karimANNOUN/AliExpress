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
import { Piece } from '../Pages/mespiece/Piece'
import { Setting } from '../Pages/myCommandes/settings/Setting'
import { UploadImage } from '../Pages/myCommandes/settings/components/UploadImage'
import { ModifierProfil } from '../Pages/myCommandes/settings/components/ModifierProfil'
import { Contry } from '../Pages/myCommandes/settings/components/Contry'
import { EmailUpdate } from '../Pages/myCommandes/settings/components/EmailUpdate'
import { PasswordUpdate } from '../Pages/myCommandes/settings/components/PasswordUpdate'
import { NotificationEmail } from '../Pages/myCommandes/settings/components/NotificationEmail'
import { Login } from '../Pages/login/Login'
import { LoginVendeur } from '../Pages/login/loginbayer/LoginVendeur'
import { VendeurBoutique } from '../Pages/login/loginbayer/component/VendeurBoutique'
import { ReviewDecision } from '../Pages/login/loginbayer/component/ReviewDecision'
import { MotpassOublie } from '../Pages/login/loginbayer/component/passwordoublie/MotpassOublie'
import { ConfermationPassword } from '../Pages/login/loginbayer/component/passwordoublie/ConfermationPassword'
import { VendeurPage } from '../Pages/vendeurcontrol/VendeurPage'
import { Register } from '../Pages/login/register/Register'
import { ProtectedRoutes } from './ProtectedRoutes'


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
          <Route path='productuser' element={<ProtectedRoutes><HomeStore/></ProtectedRoutes>} />
          <Route path='payment' element={<ProtectedRoutes><PaymentStores/></ProtectedRoutes>} />
        </Route>
        <Route path='/home/commandes' element={<ProtectedRoutes><HomeCommandes/></ProtectedRoutes>} />

        <Route path='/p'  >
        <Route path='orders' element={<ProtectedRoutes><Commande/></ProtectedRoutes>} />
        <Route path='paiments' element={<ProtectedRoutes><Paiments/></ProtectedRoutes>} />
        < Route path='refund-dispute' element={<ProtectedRoutes><Remboursement/></ProtectedRoutes>} />
          </Route>

          <Route path='/avis/feedback' element={<ProtectedRoutes><FeedBack/></ProtectedRoutes>} />
          <Route path='/adress/livraison' element={<ProtectedRoutes><AdressLivraison/></ProtectedRoutes>} />
          <Route path='/serviceclient' element={<ProtectedRoutes><ServiceClient/></ProtectedRoutes>} />
          <Route path='/favorite' element={<ProtectedRoutes><Favorite/></ProtectedRoutes>} />
          <Route path='/mespiece' element={<ProtectedRoutes><Piece/></ProtectedRoutes>} />
          <Route path='/settings' element={<ProtectedRoutes><Setting/></ProtectedRoutes>} />
          <Route path='/Uploadimage' element={<ProtectedRoutes><UploadImage/></ProtectedRoutes>} />
          <Route path='/UpdateProfil' element={<ProtectedRoutes><ModifierProfil/></ProtectedRoutes>} />
          <Route path='/contryUpdates' element={<ProtectedRoutes><Contry/></ProtectedRoutes>} />
          <Route path='/emailUpdates' element={<ProtectedRoutes><EmailUpdate/></ProtectedRoutes>} />
          <Route path='/passwordUpdates' element={<PasswordUpdate/>} />
          <Route path='/emailnotification' element={<NotificationEmail/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/login/motpassoublie' element={<MotpassOublie/>} />
          <Route path='/login/motpassoublie/redirect' element={<ConfermationPassword/>} />
          <Route path='/loginvendeur' element={<LoginVendeur/>} />
          <Route path='/loginvendeurboutique' element={<VendeurBoutique/>} />
          <Route path='/decisionvendeurboutique' element={<ReviewDecision/>} />
          <Route path='/vendeurcompte' element={<VendeurPage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/addproduct' element={<VendeurPage/>} />

      
        </Routes> 
    </>
  )
}
