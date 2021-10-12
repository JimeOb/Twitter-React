import './App.css';
import Peticiones from './components/Peticiones';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Breadcrumb } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Component } from 'react';
import Boton from './components/Boton';
 


class App extends Component {

 constructor(props){
  super(props);
  this.state= {
    direcciones: [
      {id:1, dir:"/Home"},
      {id:2, dir:"/Actualidad"},
      {id:3, dir:"/Categoria"},
      {id:4, dir:"/Orden"}
    ]
  }
 }

  

render(){
  return (
    <div className="App">   
    <div>
        <Peticiones/>
        <Router>
        <Switch>
          <Route path="/Actualidad" component={Boton}>
          <Route path="*">
          <h1 className = "error">404 Not found</h1>
        </Route>   
          </Route>
        </Switch>

        </Router>

        
    </div>
  
    <div >
      <Breadcrumb className="bread" style={{backgroundColor: 'black'}}>
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

}

export default App;
