import React from 'react'

const Film = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <a href="{props.url}">{props.url}</a>
      <br/>
    </div>
  );
}

export default Film;
