import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import TokenService from '../../services/token-service'

class ExerciseSearch extends React.Component {

 
  render(){
    return (
    <>
    <h2>Create a Search to Generate a Random AMRAP</h2>
    <SearchForm/>


    </>
    )
  }
}

export default ExerciseSearch