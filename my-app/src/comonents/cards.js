'use strict'
import React from 'react'
import {Card,Button}from 'react-bootstrap'


class Cards extends React.Component{

  render()   {
    return(
    <div>
{/* <p>hi</p>
{this.props.item.name} */}

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.item.name}</Card.Title>
    <Card.Text>
    {this.props.item.url}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.props.addFav(this.props.inx)}>add to fav</Button>
  </Card.Body>
</Card>
    </div>
    
    
    
    
    
    )}
    
    
    
  

  
}


export default Cards
