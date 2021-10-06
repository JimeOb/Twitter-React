import React, { Component } from 'react'
import {Mensajes} from '../tuits.json'
import './Style.css'
import {Card} from 'react-bootstrap'

export class Cartas extends Component {

    constructor(){
        super();
        this.state={
            Mensajes
        }
    }

    render(){
        const miscartas = this.state.Mensajes.map((Mensajes,i) => {
            return(
                <div class="col-md-6 col-lg-4">
                <Card className= "card mt-4">
                <Card.Header as="h6">{Mensajes.author}</Card.Header>
                <Card.Body>
                <Card.Title>{Mensajes.date}</Card.Title>
                <Card.Text>
                    {Mensajes.content}
                </Card.Text>
                
                </Card.Body>
                </Card>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row mt-4">
                    {miscartas}
                </div>
            </div>
            
        )
    }
}
export default Cartas
