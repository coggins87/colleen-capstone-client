import React from 'react'

class Result extends React.Component{

  render (){

   let output = this.props.result
   if(output == null) {
     return <></>
   } else
    return (<>
      <ul>
      <h3>In {output.time} minutes complete:</h3>
      {output.movements.map(movement=> {
        return (<li key={movement.id}>{movement.reps} {movement.name} </li>)
      })}
    </ul>
    </>
    )
  }
}

export default Result