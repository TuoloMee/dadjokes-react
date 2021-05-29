import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import {Joke} from './Joke/Joke'
import { jokes } from './jokes';
import './style.css';

const App = () => {

// const [jokes, setJokes] = useState([]);

// useEffect (() => setJokes(jokes)
// ,);
// const handleLike = (likes) =>


return (
  <div className="container">
  {jokes.map((joke) =>(
    <Joke 
    key={joke.name}
    userAvatar={joke.avatar}
    userName={joke.name}
    text={joke.text}
    likes={joke.likes}
    dislikes={joke.dislikes}
    
    
    
    />
    ))}
  </div>
);}

render(<App />, document.querySelector('#app'));
