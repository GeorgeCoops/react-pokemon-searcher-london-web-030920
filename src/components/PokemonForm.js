import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const newPoke = {
      name: this.state.name, 
      stats: [{},{},{},{},{},
              {"value": this.state.hp,
                "name": "hp"
              }],
      sprites: {front: this.state.frontUrl, 
                back: this.state.backUrl         
      }
    }
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.props.addPokemon(e, newPoke)} >
          <Form.Group widths="equal"  >
            <Form.Input fluid label="Name" onChange={this.handleChange} placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid label="hp" onChange={this.handleChange} placeholder="hp" name="hp" value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" onChange={this.handleChange} placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" onChange={this.handleChange} placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button onSubmit={this.props.addPoke} >Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
