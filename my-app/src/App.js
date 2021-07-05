'use strict'
import React from 'react'
import Home from './comonents/home';
import Fav from './comonents/fav';
import Header from './comonents/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{

  render()   {
    return(
    <div>
  



<Router>
<Header/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route  path="/fav"><Fav/></Route>

        </Switch>
      </Router>

    </div>
    
    
    
    
    
    )}
    
    
    
  

  
}


export default App










































// 'use strict'
// import React from 'react'
// import FormModal from './comonents/form';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import axios from "axios"
// class App extends React.Component{

// constructor(props){
//   super(props)
//   this.state={
//     name: '',
//     age: '' ,
//     show :false,
//     locData: '  ',
//     errMsgdisplay :false,
//     errMsg :"",
//     moreInformation :{},

//   }
// }

// locFunctions = async(event) =>{
//  event.preventDefault()
//  let serverURl = process.env.REACT_APP_SERVER
//   // let serachQue = event.target.serachQue.value
//   let URI = `${serverURl}/locData`
//   // let URI = `https://us1.locationiq.com/v1/search.php?key=pk.c9b497756c0bbbd5d4765f054c2abd94&q=${serachQue}&format=json`
//   try{
//     let LocFind = await axios.get(URI)
//     this.setState({
//       locData: LocFind.data,
     
//     })
//   }
//   catch{
//     this.setState({
//       errMsg :"error",
//       errMsgdisplay :true
//     })
//   }







// }


// moreInfo =async (e) => {
//   e.preventDefault()
//   let moreUrl = process.env.REACT_APP_SERVER
//    let serachQue = e.target.serachQue.value
//   let Url = `${moreUrl}/moredat?morename=${serachQue}`

//   try{
//     let more = await axios.get(Url)
//     this.setState({
//       moreInformation :more.data

//     })

//   }
//   catch{
//     this.setState({
//       errMsg :"error",
//       errMsgdisplay :true
//     })

//   }
  
// }









// show = () =>{
//   this.setState({
//     show:true
//   })

// }



// submitForm = (event) => {
//   event.preventDefault();
//   this.setState({
//     show:true
//   })
// }

// updateName = (event) => {
//   this.setState({
//       name: event.target.value
//   })
// }

// updateAge = (event) => {
//   this.setState({
//       age: event.target.value
//   })
// }
// handleClose = () =>{
//   this.setState({
//     show:false
//   })
// }



//   render(){
      
//     return(
//       <div>
//         <p>hi</p>
//         <form onSubmit={this.moreInfo}>
//           <input type="text" name="serachQue"></input>
//           <input type="submit" ></input>
//         </form>
        
//         <Form onSubmit={this.submitForm}>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>name</Form.Label>
//     <Form.Control type="text" placeholder="Enter name" onChange={this.updateName} />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword" onChange={this.updateAge}>
//     <Form.Label>age</Form.Label>
//     <Form.Control type="number" placeholder="Password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
// <FormModal
// show={this.state.show}
//  handelClose={this.handelClose}
// age={this.state.age}

//  name= {this.state.name}

//  />


// <p>{this.state.locData}</p>
// <p>{this.state.moreInformation.url}</p>



//       </div>
//     )
//   }
// }

// export default App;
