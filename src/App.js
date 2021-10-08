import './App.css';
import Barra from './components/Navbar';
import Cartas from './components/Cartas';
import Peticiones from './components/Peticiones';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Breadcrumb } from 'react-bootstrap';
 


function App() {
  return (
    <div className="App">   
    <div>
        <Peticiones/>
    </div>
  
    <div >
      <Breadcrumb style={{backgroundColor: 'black'}}>
        <Breadcrumb.Item href="https://drive.google.com/drive/u/1/folders/1b6uRqWI4gud6BSsfUU4MD1s83DHWB_DR" >Drive GIWEB</Breadcrumb.Item>
        <Breadcrumb.Item href="https://react-bootstrap.github.io/">
          React-Bootstrap
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://twitter.com/?lang=es">Twitter</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    </div>
  );
}

export default App;
