import React, { Component } from 'react'
import {Navbar, Container, Badge} from 'react-bootstrap'
import FiltroB from './FiltroB'
import ListaCategorias from './ListaCategorias'


class Barra extends Component {

    constructor(props){
      super(props)
      this.state={
        busqueda: ''
      }
    }

    handleInput = (e) =>{
      this.setState({busqueda: e.target.value})
    }

    render() {
      const miscartas = this.props.twit.map((m,i) => {
        let numero  = [i]

      })
      
        return (
           
          <Navbar bg="dark" variant="dark">
            <Container>
              {console.log(this.props.array)}
              <Navbar.Brand href="/home">
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
              <Badge bg="light" text="dark">
              65
              </Badge>
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                    {" "} 
              </Navbar.Text>
              <Navbar.Text>
              
              <FiltroB />
              </Navbar.Text>
            </Navbar.Collapse>
            </Container>
          </Navbar>

        )
    }
}



export default Barra