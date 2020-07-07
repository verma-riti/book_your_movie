import React, {useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Switch, Link, Route, Redirect} from 'react-router-dom';

import Home from './components/home';
import MovieList from './components/movie_list';
import BookTickets from './components/book_ticket';
import MovieDetails from './components/movie_details';
import Payment from './components/payment';


function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home
    },
    {
      pageLink: '/movies',
      view: MovieList
    },
    {
      pageLink: '/book-tickets',
      view: BookTickets
    },
    {
      pageLink: '/details/:id',
      view: MovieDetails
    },
    {
      pageLink: '/payment',
      view: Payment
    }
  ];

return (
  <div className="App">
    <Route 
      render={({location}) => (
        <div className="Almighty-Router">
          <Route exact path="/" render={() => <Redirect to="/" />} />
          
          {pages.map((page, i) => {
            return (<Route 
                    exact
                    path={page.pageLink}
                    component={page.view}
                    key={i}
                    />
                    );
          })}
        </div>
      )}
    />
  </div>
)
}

export default App;