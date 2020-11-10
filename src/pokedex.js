import React from 'react';
import Pokemon from './pokemon';
import Button from './button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pkmnIndex: 0};
  }

  fetchFilteredPokemons() {
    const {pokemons} = this.props;
    const {filteredType} = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }
  fetchPokemonTypes() {
    const {pokemons} = this.props;

    return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))];
  }

  nextPkmn(numberOfPokemons) {
    this.setState(state => ({
      pkmnIndex: (state.pkmnIndex + 1) % numberOfPokemons,
    }));
  }
  render() {

    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemon = filteredPokemons[this.state.pokemonIndex];
    const pokemonTypes = this.fetchPokemonTypes();
    return (
      <div>
        <Pokemon pokemon={pokemon}/>
        <div className="buttons">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button">
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button">
              {type}
            </Button>
          ))}
        </div>
        <button onClick={this.nextPkmn(filteredPokemons.length)}>Next</button>
        
      </div>
    )
  }
}

export default Pokedex;