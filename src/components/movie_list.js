import React from 'react';
import Card from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import data from "../json/movies-coming-soon.json";

function MovieList () {
	const history = useHistory();
	const bookTickets =()=>{
		history.push('/book-tickets');
	}

	const viewDetails = (id) => {
		const url = "/details/" +id
		history.push(url)
	}

	return (
		<div className="mt75">
			<Container>
			<h1 className="mb30">Coming Soon!</h1>
			  <Row md={4}>
			    {data.map((movie,i) =>{
		            return(
		              <Col key={i} className="mb20 container-box" >
		              	<img src={movie.posterurl} height="400"/>
		              	<div className="overlay">
			              	<div className="text">
			              		<Button onClick={() => viewDetails(movie.id)} variant="outline-success">View Details</Button>
	       				  		<Button onClick={() => bookTickets(false)} variant="outline-success">Book tickets</Button>
			              	</div>
			            </div>
		              </Col>
		            )
		          })}
			  </Row>
			</Container>
		</div>
	)
}

export default MovieList;