import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      imageUrl: eachData.team_image_url,
    }))
    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamsData} = this.state
    return (
      <ul className="team-list-items">
        {teamsData.map(eachTeam => (
          <TeamCard teamData={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00bfff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <div className="ipl-container">
          <div className="ipl-container">
            <div className="header-container">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="header-heading">IPL Dashboard</h1>
            </div>
            {isLoading ? this.renderLoader() : this.renderTeamsList()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
