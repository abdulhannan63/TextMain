import React, { useState } from 'react'
import './Accordian.css'
const Accordian = ({ title, desc }) => {
  const [val, setval] = useState(false)
  const toggleApply = () => {
    setval(!val);
  }
  return (
    <>
      <div className="accordian" >
        <div className="accordian-item">
          <div onClick={toggleApply} className="accordian-title">
            <h3>{title}</h3>
            <div className="Pos" >
              <strong >{val?'-':'+'}</strong>
            </div>
          </div>
          {
            val && <div className="accordian-des">
              {desc}
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Accordian