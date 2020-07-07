import React , {useState, useEffect} from 'react';


function Card(props) {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    setMovies(props);
    console.log(props.movie)
  })
  return (
          <div style={{ width: '18rem' }}>
            <img src={props.movie_details} />
            <p>{props.movie_details}</p>
          </div>
    )
}

export default Card;