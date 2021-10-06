import './App.css';
import Barra from './components/Navbar';
import Cartas from './components/Cartas';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">   
    <div>
    <Barra/> 
    </div>
    <div>
      <Cartas/>
    </div>
    </div>
  );
}

export default App;
