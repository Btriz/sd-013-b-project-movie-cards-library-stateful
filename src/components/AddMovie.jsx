import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Subtitle,
  Storyline,
  Image,
  Genre,
  Rating,
} from './AddMovieFields/index';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          value={ title }
          change={ this.handleChange }
        />

        <Subtitle
          value={ subtitle }
          change={ this.handleChange }
        />

        <Image
          value={ imagePath }
          change={ this.handleChange }
        />

        <Storyline
          value={ storyline }
          change={ this.handleChange }
        />

        <Rating
          value={ rating }
          change={ this.handleChange }
        />

        <Genre
          value={ genre }
          change={ this.handleChange }
        />

        <button
          data-testid="send-button"
          type="reset"
          onClick={ () => (onClick(this.state)) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

// const select = { selectTextId: 'genre', selectValue: genre, id: 'genre-input', onChange: this.handleChange };
//     const option = { optionTestId: 'genre-option', options: [{ value: 'action', txt: 'Ação' }, { value: 'comedy', txt: 'Comédia' }, { value: 'thriller', txt: 'Suspense' }] };