
import { useLocation, useParams } from 'react-router-dom';
import './App.css';
import AllRoutes from './allRoutes/AllRoutes';
import { ButtomPart } from './components/footer/ButtomPart';
import { Header } from './components/header/Header';

function App() {

  const location=useLocation()

  const params=useParams()

  const links= [{id:1,url:'/login'},{id:2,url:'/loginvendeur'},{id:3,url:'/loginvendeurboutique'},
  {id:4,url:'/loginvendeurboutique'},{id:5,url:'/login/motpassoublie'},
  {id:6,url:'/login/motpassoublie/redirect'},{id:7,url:'/decisionvendeurboutique'},{id:8,url:'/register'},
  {id:9,url:'/addproduct'},{id:10,url:'/controlpanelseller/dashboard'},{id:11,url:'/controlpanelseller/products'},
  {id:12,url:`/controlpanelseller/updateproduct/:prodId`},{id:13,url:`/controlpanelseller/orders`},
  {id:14,url:`/controlpanelseller/customers`},{id:15,url:`/controlpanelseller/reviews`},
  {id:16,url:`/controlpanelseller/transactions`},{id:17,url:`/controlpanelseller/storeSettings`},
  {id:18,url:'/controlpanelseller/hotoffres'},{id:19,url:'/controlpanelseller/settings'},
  {id:20,url:'/controlpanelmoderate/dashboard'},{id:21,url:'/controlpanelmoderate/sellers'},
  {id:22,url:'/controlpanelmoderate/customers'},{id:23,url:`/controll/${params.sallerId}`},
  {id:24,url:'/controlpanelmoderate/signale'}]

  return (
    <div className="App">
      { links.find(link=> link.url == location.pathname ) ? "" : <Header/>}
    <AllRoutes/>
    { links.find(link=> link.url == location.pathname ) ? "" : <ButtomPart/>}
    </div>
  );
}

export default App;
