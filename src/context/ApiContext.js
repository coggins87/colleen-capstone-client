import React from 'react'

const ApiContext = React.createContext({
  error: null,
  isLoggedIn: false,
  userId: null,
  setError: ()=>{},
  clearError: ()=>{}
})

export default ApiContext

export class ApiProvider extends React.Component {
  state = {
    error: null,
    isLoggedIn: false,
    userId: null,
  };
  setError = error => {
    console.error(error)
    this.setState({ error })

  }
  clearError = ()=>{
    this.setState({error: null})
  }

  render(){
    const value = {
      error: this.state.error,
      isLoggedIn: this.state.isLoggedIn,
      setError: this.setError,
      clearError: this.clearError,
      userId: this.state.userId
    }
    return(
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}

