import React from 'react'
import TokenService from '../../services/token-service'
import PrivateSearchForm from '../../components/PrivateSearchForm/PrivateSearchForm'
class UserSearchPage extends React.Component {
  render(){
    return (
    <>
    <h2>Create a Search to Generate a Random AMRAP</h2>
    <PrivateSearchForm saveWorkout={this.props.saveWorkout}/>
    </>
    )
  }
}

export default UserSearchPage