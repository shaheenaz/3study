
import axios from 'axios'
import React from 'react'
import {Card,Button,Row,Col}from 'react-bootstrap'
import Cards from './cards'

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state={
            info:[],
        }

        
    }
    componentDidMount = async()=>{
        const url ='http://localhost:3011'
        let getUrl = await axios.get(`${url}/all`)
        console.log(getUrl.data)
        this.setState({
            info:getUrl.data
        })


    }


    addFav = async(inx) =>{
        const Url = 'http://localhost:3011'
        const obj = {
            name : this.state.info[inx].name,
            url : this.state.info[inx].url
        }

await axios.post(`${Url}/addFav`,obj)

    }

  render()   {
    return(
    <div>
        <Row xs={1} md={4} className="g-4">
{this.state.info.map((item,inx)=>{
    return(
        <div>
        <Col>
    <Cards
    key={inx}
    item={item}
    inx={inx}
    addFav= {this.addFav}
    
    
    />
    </Col>
    </div>
    )
   
  })}
 </Row>

    </div>
    
    
    
    
    
    )}
    
    
    
  

  
}


export default Home
