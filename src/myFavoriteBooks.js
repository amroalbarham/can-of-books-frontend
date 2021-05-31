import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showCatsComponent: false,
    }

  }

  componentDidMount = async () => {
    const bookData = await axios.get(`http://localhost:3001/books?name=${this.props.auth0.user.email}`);
    // console.log('before setstate', bookData[0]);
    this.setState({
      books: bookData.data,
      showCatsComponent: true,

    })
    console.log('asdf', this.props.auth0.user);
    console.log('xcvb', this.state.books.books[0]);


  }
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        <>
          { this.state.showCatsComponent &&
            this.state.books.books.map((item, idx) => {
              return (
                <div key={idx}>
                 <p> {item.name}</p>
                <p> {item.status}</p> 
                <p>{item.description}</p>
                  <img src={item.img} alt={'asd'}className="imgEdit" />
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
