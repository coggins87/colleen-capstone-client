import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import './ExerciseSearch.css'

class ExerciseSearch extends React.Component {

 state = {
   visibleForm: true,
   result: []
 }

 toggleForm = ()=> {
   this.setState({
     visibleForm: !this.state.visibleForm
   })
 }

  render(){
    return (
    <div className ='ExerciseSearch'>
    <h2 className="ExerciseHeader">Generate a Random AMRAP</h2>

    {this.state.visibleForm ? <SearchForm/> : <></>}

    </div>
    )
  }
}

export default ExerciseSearch