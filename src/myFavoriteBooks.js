import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Button, Modal, InputGroup, FormControl } from 'react-bootstrap/';
import FormModal from './component/FormModal';



class MyFavoriteBooks extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showCatsComponent: false,
      showBooks: false,
      showModal: false,
      bookName: '',
      description: '',
      imgUrl: '',
      status: '',
    }

  }

  componentDidMount = async () => {
    const bookData = await axios.get(`http://localhost:3001/books?name=${this.props.auth0.user.email}`);
    this.setState({
      books: bookData.data,
      showCatsComponent: true,
    });
  }

  handleShowModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  updateBookName = (event) => {
    this.setState({
      bookName: event.target.value,

    })
    console.log(this.state.bookName);

  }
  updateDescription = (event) => {
    this.setState({

      description: event.target.value

    })
    console.log(this.state.description);
  }
  updateImgUrl = (event) => {
    this.setState({
      imgUrl: event.target.value
    })
    console.log(this.state.imgUrl);
  }
  updatestatus = (event) => {
    this.setState({
      status: event.target.value,
    })
  }

  addBook = async (event) => {
    event.preventDefault();

    const bookFormData = {
      name: this.state.bookName,
      description: this.state.description,
      img: this.state.imgUrl,
      status: this.state.status,
      email: this.props.auth0.user.email
    }

    const newBooks = await axios.post('http://localhost:3001/addBooks', bookFormData)

    this.setState({
      books: newBooks.data,
      showModal: false
    })
  }


  deleteBook = async (index) => {
    const email = {
      email: this.props.auth0.user.email
    }

    let newBooks = await axios.delete(`http://localhost:3001/deleteBook/${index}`, { params: email })

    this.setState({
      books: newBooks.data
    })
  }


  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Button variant="primary" onClick={this.handleShowModal}>Add a Book</Button>

        {this.state.showModal && <FormModal closeModalFx={this.handleCloseModal} showModal={this.state.showModal} updateBookName={this.updateBookName} updateDescription={this.updateDescription} updateImgUrl={this.updateImgUrl} updatestatus={this.updatestatus} addBook={this.addBook} />}

        <>


          { this.state.showCatsComponent &&
            this.state.books.books.map((item, idx) => {
              return (

                <div key={idx}>

                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img} className="imgEdit" />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.status}
                        {item.description}
                      </Card.Text>
                      <Button variant="primary" onClick={()=>this.deleteBook(idx)}>Delete</Button>
                    </Card.Body>
                  </Card>
                </div>

              )
            })
          }

        </>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
