import React, { useState } from 'react'
import './TextArea.css'
const TextArea = () => {
  const [Text, setText] = useState("")

  const settingText = (ele) => {
    setText(ele.target.value);
  }
  const toUpperCase = () => {
    let val = Text.toUpperCase();
    setText(val);
  }
  const toLowerCase = () => {
    let val = Text.toLowerCase();
    setText(val);
  }
  const toClear = () => {
    setText('');
  }
 const ApplySpace = () => {
  let arr = Text.split(/\s+/).filter((ele) => {
    return ele.length !== 0;
  });
  let a=arr.join(',');
  setText(a);
}

return (
  <>
    <div className="mb-3" style={{ marginTop: '150px' }}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Text Area</h1></label>
      <textarea className="form-control" placeholder='Enter Your Text Here' onChange={settingText} value={Text} id="exampleFormControlTextarea1" rows="7" style={{backgroundColor:'cornsilk',boxShadow:'2px 2px'}}></textarea>
    </div>
    <div className="Buttons">
      <button type="button" onClick={toUpperCase} className="btn input-btn-font-size-lg  mt-1 btn-primary me-3">ToUpperCase</button>
      <button type="button" onClick={toLowerCase} className="btn  mt-1 btn-primary me-3">ToLowerCase</button>
      <button type="button" onClick={ApplySpace} className="btn  mt-1 btn-primary me-3">comma</button>
      <button type="button" onClick={toClear} className="btn  mt-1 btn-primary me-3">Clear</button>
    </div>
    <div className="textSummary">
      <h1>Your Text summary</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col fs-sm-6">#</th>
            <th scope="col fs-sm-6">Space</th>
            <th scope="col fs-sm-6">Words</th>
            <th scope="col fs-sm-6">Character</th>
            <th scope="col fs-sm-6">Time To read</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{Text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length}</td>
            <td>{Text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length }</td>
            <td>{Text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length===0?0:Text.length}</td>
            <td>{Text.split(" ").filter((ele) => {
    return ele.length !== 0;
  }).length * .008} Min.</td>
          </tr>

        </tbody>
      </table>

    </div>

  </>
)
}

export default TextArea;