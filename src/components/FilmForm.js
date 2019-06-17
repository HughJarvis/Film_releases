import React, {Component} from 'react';

class FilmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: ''
    }
  }

  render(){
    return(
      <form>
        <input type="text" placeholder="Film title" value={this.state.name}/>
        <input type="text" placeholder="Paste imdb link" value={this.state.url}/>
        <input type="submit" value="Add film"/>
      </form>
    );
  }
}

export default FilmForm;
