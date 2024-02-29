import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setUpper] = useState("");
    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setUpper(newText);
    }
    const clearText = () => {
        let newText = '';
        setUpper(newText);
    }

    const toChange = (e) => {
        setUpper(e.target.value);
    }
    const selectText = () => {
        const inp = document.getElementById("exampleFormControlTextarea1");
        inp.focus();
        inp.select();
        navigator.clipboard.writeText(inp.value);
    }
    return (
        <>
            <div className="mb-3 " >
                <h1 style={{ color: "#6c757d" }}>Text Area</h1>
                {/* <label for="exampleFormControlTextarea1" class="form-label">Text Area</label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" style={{backgroundColor:(props.mode=='dark'?'black':'white'),color:(props.mode=='dark'?'white':'black')}} value={text} onChange={toChange}></textarea>
                <button className="btn btn-primary mx-2 my-2" onClick={convertToUpper}>ToUpper</button>
                <button className="btn btn-primary mx-2 my-2" onClick={selectText}>Copy</button>
                <button className="btn btn-danger my-2" onClick={clearText}>Clear</button>
            </div>
            <div>
                <h1>Your Text Summary</h1>
                <p>{text===''?0:text.split(" ").length} word and {text.length} character</p>
                <p>Time taken to read {(text.split(" ").length)*.008} Minutes </p>
                <p>Space {(text.split(" ").length)-1} </p>
            </div>

        </>
    )
}

export default TextForm