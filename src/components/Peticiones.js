import React, { Component,componentDidMount } from 'react'
import Cartas from './Cartas';
import Barra from './Navbar';
import {Row,Form,Button} from 'react-bootstrap'

class Peticiones extends Component{

    
    constructor(props){
        super(props)   
        this.state ={
            twits :[],
            author:"",
            content:"",
            type:""

            
        }     
        
        this.handleChangeNombre = this.handleChangeNombre.bind(this)
        this.handleChangeTwit = this.handleChangeTwit.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
        this.sendData = this.sendData.bind(this)
        
        
        
    }

    handleChangeNombre = (e) =>{
        this.setState({author:e.target.value})

        console.log(this.state.author)
    }
    handleChangeTwit = (e) =>{
        this.setState({content:e.target.value})
    }
    handleChangeType = (e) =>{
        this.setState({type:e.target.value})
    }

    async sendData(){
        let dataSet ={
            "author": this.state.author,
            "content": this.state.content,
            "type": this.state.type
        }
        const response = await fetch('https://saldatweets.herokuapp.com/publications',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dataSet)
        })
        const data = await response.json()

    }
    
    async componentDidMount(){
        const response = await fetch('https://saldatweets.herokuapp.com/publications') 
        const data = await response.json() 
        this.setState({twits:data})
        //console.log(this.state.twits)

    }
    
    render(){
        
        return(
            <div>
                <Barra array={this.state.twits}/>
                <Cartas twit ={this.state.twits} />
                <br></br><br></br>
                <div   style={{width:"400px" ,margin: "auto auto"}} >    
                    <Form style={{border:"3px solid white"}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required size ="lg" placeholder="Ingrese su nombre" onChange={this.handleChangeNombre} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Twit</Form.Label>
                            <Form.Control required size ="lg"  placeholder="Ingrese su Twit" onChange={this.handleChangeTwit}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control required size ="lg" placeholder="Ingrese el tipo de twit" onChange={this.handleChangeType}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.sendData}>
                            Enviar
                        </Button>
                    </Form>
                </div>
                <br></br><br></br>
            </div>
        )
    }
    
    
    
}   



export default Peticiones