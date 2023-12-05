
import './App.css';
import AllRoutes from './allRoutes/AllRoutes';
import { ButtomPart } from './components/footer/ButtomPart';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    <AllRoutes/>
    <ButtomPart/>
    </div>
  );
}

export default App;
