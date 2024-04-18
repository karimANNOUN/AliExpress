
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
  {id:12,url:`/controlpanelseller/updateproduct/${params.prodId}`},{id:1,url:`/controlpanelseller/orders`}]

  return (
    <div className="App">
      { links.find(link=> link.url == location.pathname ) ? "" : <Header/>}
    <AllRoutes/>
    { links.find(link=> link.url == location.pathname ) ? "" : <ButtomPart/>}
    </div>
  );
}

export default App;
