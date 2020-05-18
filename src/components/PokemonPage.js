import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

// --PokemonPage 
//  --PokemonForm 
//  --Search 
//  --PokemonCollection 
//   --PokemonPage

class PokemonPage extends React.Component {

  state = {
    pokes: [], 
    searchTerm: ''
  }

  POKEURL = 'http://localhost:3000/pokemon'

  apiHeaders = {
    "Content-type": "application/json",
    Accept: "application/json",
  };

  post = (URL) => {
    fetch(URL,{
      method: 'POST',

    })
  }

  fetchPokes = () => {
    fetch(this.POKEURL)
    .then(resp => resp.json())
    .then(pokes => this.setState({pokes: pokes}))
  }

  componentDidMount(){
    this.fetchPokes()
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  filteredPokemon = () => {
    const pokes = [...this.state.pokes]
    return pokes.filter(poke => poke.name.includes(this.state.searchTerm))
  }

  addPokemon = (event, newPokemon) => {
    event.preventDefault()
    fetch(`http://localhost:3000/pokemon`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newPokemon)
      }).then( this.fetchPokes() )
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={(e) => this.handleChange(e)}  term={this.state.searchTerm} />
        <br />
        <PokemonCollection pokes={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
