import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {Route, Redirect} from "react-router-dom";
import MovieList from './movie_list'


function Home(){
	const history = useHistory();
	const setShow =() =>{
		history.push('/movies');
	}

	return (
		<header className="App-header">
	        <h1>Book Your Movie</h1>
	        <hr />
	        <div className="d-flex justify-content-end">
	          <Button onClick={() => setShow(false)} variant="outline-success">
	            Click here
	          </Button>
	        </div>
      	</header>
	)
}

export default Home;