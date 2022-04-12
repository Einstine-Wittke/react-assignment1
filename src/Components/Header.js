import React, { useState } from 'react'
import FunctonalCompo from './FunctonalCompo'
import ClassCompo from './ClassCompo'

const Header = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
  return (
      <>
    <h1 className='container'>Style Using Functional & Class Component</h1>
    <button className="button1" onClick={()=>setToggle1(!toggle1)}>To See Styling in Functional Component</button>
    <button className="button2" onClick={()=>setToggle2(!toggle2)}>To See Styling in Class Component</button>
    {toggle1 && <FunctonalCompo/>}
    {toggle2 && <ClassCompo/>}
    </>
  )
}

export default Header