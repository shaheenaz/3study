import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class FormModal extends React.Component{
    render(){
        return(
            <div>
 <Modal
        show={this.props.show} onHide={this.props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  onSubmit={this.props.updateFun}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" name="name" defaultValue={this.props.name} />
    <Form.Label>url</Form.Label>
    <Form.Control type="text" name="url" defaultValue={this.props.url} />
  </Form.Group>
  <Button variant="primary" type="submit" >
    save
  </Button>
</Form>
        </Modal.Body>
      
      </Modal>

            </div>
        )
    }
}
export default FormModal