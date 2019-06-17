import React, {Component} from 'react';
import Film from './Film.js'

const FilmList = (props) => {
  const filmNodes = props.data.map((film) => {
    return (
      <Film name={film.name} url={film.url} key={film.id}/>
    )
  })
    return (
      <div>
        {filmNodes}
      </div>
    );
  }


export default FilmList;
