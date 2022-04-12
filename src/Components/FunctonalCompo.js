import React from 'react'

const Para ={
    color:'blue',
    fontWeight: 350,
    textAlign: 'center',
    fontSize:'18px'
}  

const FunctonalCompo = () => {
  return (
    <div className='container3'>
            This is created using Functional Component 
        <p className="ext">This is done using external CSS</p>
        <p style={Para}>This is done using inline CSS</p>
        </div>
    
  )
}

export default FunctonalCompo