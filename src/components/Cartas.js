import React, { Component,componentDidMount } from 'react'
import './Style.css'
import {Card, Col,Row} from 'react-bootstrap'


export class Cartas extends Component {

    constructor(props){
        super(props);
        this.state={
            
            
        }

    }

    

    
    render(){
        
        const miscartas = this.props.twit.map((m,i) => {
            const fecha1 =m.date.substring(0,10)
            const fecha2 =m.date.substring(11,16)
            const fecha = fecha1 + "     |   " + fecha2
            return (
                <div className="row mt-8" >
                                 
                    <Col  class="col-md-6 col-lg-4">
                        <Card  style={{height: "11rem",width:'40rem',border:"3px solid black", margin: "auto auto"}} className= "card mt-5" >
                            <Card.Header className="border1" as="h6">{m.author}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{m.content}</Card.Title>
                                    <Card.Text className= "color">
                                        Publicado :{fecha}
                                    </Card.Text>                                                
                                </Card.Body>
                        </Card>
                    </Col>
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
