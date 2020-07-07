import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import data from "../json/movies-coming-soon.json";

function MovieDetails(props) {
	const movie_id = props.match.params.id
	const movie = data.filter(_movie => _movie.id === movie_id )[0]
	const history = useHistory();
	const bookTickets =()=>{
		history.push('/book-tickets');
	}

	return(
      <div >
      	<Row className="movie_details_body" >
      		<Col sm={4} className="container-box" >
      			<div className="cover-img">
			      	<img src={movie.posterurl} height="400"/>
			    </div>
     		</Col>
     		<Col sm={8} className="title-details text-white">
     			<h1>{movie.title}</h1>
		      	<p>Release Date : {movie.releaseDate}</p>
     		</Col>
      	</Row>
      	<Row className="mt20">
      		<Col sm={4} className="container-box" >
      			
     		</Col>
     		<Col sm={8} className="sub-details">
		      	<p className="m10">{movie.storyline}</p>
		      	
		      	<div className="cast m10">
		      		Cast : {movie.actors.map(actor =>{
		      			return(<span>{actor} &nbsp; &nbsp;</span>)
		      		})}
		      	</div>
		      	<p className="m10">Duration : {movie.duration}</p>
		      	<div className="cast m10">
		      		Genre : {movie.genres.map(genre =>{
		      			return(<span>{genre} &nbsp; &nbsp;</span>)
		      		})}
		      	</div>
		      	<p className="m10">IMDB Ratings : {movie.imdbRating}</p>
		      	<Button onClick={() => bookTickets(false)} variant="outline-success">Book Now</Button>

     		</Col>
      	</Row>
      </div>
	)

}

export default MovieDetails;