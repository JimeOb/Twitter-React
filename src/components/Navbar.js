import React, { Component } from 'react'
import {Navbar, Container, Dropdown, DropdownButton} from 'react-bootstrap'


class barra extends Component {
    render() {
        return (
           
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <Navbar.Toggle />
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/174/174876.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Twitter App
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Filtrar por: {" "} 
      </Navbar.Text>
      
      <Navbar.Text>
       < Boton/>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>

        )
    }
}
class Boton extends Component{
    render(){
        return(

            <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title=""
            className="mt-2"
            size="sm"
          >
            <Dropdown.Item href="#/Actualidad" active>
              Mas reciente
            </Dropdown.Item>
            <Dropdown.Item href="#/Categoria">Categoria</Dropdown.Item>
            
            <Dropdown.Divider />
            <Dropdown.Item href="#home">Volver al incio</Dropdown.Item>
          </DropdownButton>

        )
    }

}

export default barra