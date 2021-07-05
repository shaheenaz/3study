'use strict'
import React from 'react'
import {Card,Button,Col,Row}from 'react-bootstrap'
import FormUp from './form'
import axios from 'axios'

class Fav extends React.Component{
  constructor(props){
    super(props)
    this.state={ // هون بحطهم عشان استعملهم بسرعة وسهولة اثناء الريندر
      name:"",
      url : "",
      favInfo : [],
      show:false,
      name:'',
      url:"",
      index :-1,

    }
  }


  componentDidMount = async()=>{
    const url ='http://localhost:3011'
    let getUrl = await axios.get(`${url}/getFav`)  // هدول من الباك ايند اللي عملنالهم بوست 
    // console.log(getUrl.data)
    this.setState({
        favInfo:getUrl.data // هون بحفظ اللي من الباك اند ب نفس الاراي وبكون ناقص اللي عملتلو ديليت عشان اعملهم ريندر
    })


}

deleteFunc = async(id) =>{
  const url ='http://localhost:3011'
  let newarr = await axios.delete(`${url}/deleteFav?id=${id}`) // هون بعملو باس لبارميتر 
  // console.log(getUrl.data)
  this.setState({
    favInfo:newarr.data // هون بحفظ اللي من الباك اند ب اراي جديد عشان اعملهم ريندر
})

}


showFun = (inx) =>{
this.setState({
  show: true,
  name: this.state.favInfo[inx].name,
  url: this.state.favInfo[inx].url,
  index:inx,


})
}
handleClose =() =>{
  this.setState({
    show:false
  })
}

  
updateFun = async(event) =>{
event.preventDefault()
const obj = {
  name:event.target.name.value,
  url : event.target.url.value,
  id:this.state.favInfo[this.state.index]['_id'],
}

  const url ='http://localhost:3011'
  let getl = await axios.put(`${url}/updateFav`,obj)
  console.log(getl.data)
  this.setState({
    favInfo:getl.data,
    show:false,
  })



}






  render()   { 
     return(



<div>

<Row xs={1} md={2} className="g-4">
{this.state.favInfo.map((item,inx)=>{

return(
<>

<Col>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
    {item.url}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.deleteFunc(item._id)}>delete</Button> 
    <Button variant="primary" onClick={()=>this.showFun(inx)} >update</Button>
  </Card.Body>
</Card>
    
    
    
    </Col>










</>

)







})}













</Row>

<FormUp
name={this.state.name}
url = {this.state.url}
show = {this.state.show}
handleClose={this.handleClose}
updateFun={this.updateFun}










/>










</div>





























  )}
  
    // <div>
/* <Row xs={1} md={2} className="g-4"></Row>
{this.state.info.map((item,inx)=>{
    return(
        <div>
        <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
    {item.url}
    </Card.Text>
    <Button variant="primary" >delete</Button>
  </Card.Body>
</Card>
    
    
    
    </Col>
    </div>
    </Row>
    </div> 
    
  
)} */}




export default Fav
