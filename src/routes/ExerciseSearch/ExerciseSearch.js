import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import ('./ExerciseSearch.css')
class ExerciseSearch extends React.Component {

 
  render(){
    return (
    <div className ='ExerciseSearch'>
    <h2 className="ExerciseHeader">Create a Search to Generate a Random AMRAP</h2>
    <SearchForm/>


    </div>
    )
  }
}

export default ExerciseSearch