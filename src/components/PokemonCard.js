import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: true
  }

  handleClick = () => {
    const currentState = this.state.clicked
    this.setState({clicked: !currentState})
  }

  render() {
    const poke = this.props.poke
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {this.state.clicked ? 
            <img alt="oh no!" key={poke.id} src={poke.sprites.front} />
            :
            <img alt="oh no!" key={poke.id} src={poke.sprites.back} />
            }
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {poke.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
