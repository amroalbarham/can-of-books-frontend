import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



 class UpdateForms extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showUpdateStatus} onHide={this.props.closeModalFx}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(event)=>this.props.editBook(event)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Name"  name="bookName" value={this.props.bookName} onChange={this.props.updateBookName} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" name="description" value={this.props.description} onChange={this.props.updateDescription} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" placeholder="Image URL" name="imgUrl" value={this.props.imgUrl} onChange={this.props.updateImgUrl} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" placeholder="status...." name="Status" value={this.props.status} onChange={this.props.updatestatus} />
                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                Update Book
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeModalFx}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default UpdateForms

