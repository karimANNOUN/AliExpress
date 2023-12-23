
import { useLocation } from 'react-router-dom';
import './App.css';
import AllRoutes from './allRoutes/AllRoutes';
import { ButtomPart } from './components/footer/ButtomPart';
import { Header } from './components/header/Header';

function App() {

  const location=useLocation()

  return (
    <div className="App">
      { location.pathname == '/login' || location.pathname == '/loginvendeur' || location.pathname == '/loginvendeurboutique' ? "" : <Header/>}
    <AllRoutes/>
    { location.pathname == '/login' || location.pathname == '/loginvendeur' || location.pathname == '/loginvendeurboutique' ? "" : <ButtomPart/>}
    </div>
  );
}

export default App;
