import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {imageUrl, name} = teamData
    return (
      <li className="team-card-list-container">
        <img src={imageUrl} alt={`${name}`} className="team-card-ipl-logo" />
        <p className="team-card-heading">{name}</p>
      </li>
    )
  }
}

export default TeamCard
