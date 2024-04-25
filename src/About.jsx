import React, { useState } from 'react';
import Accordian from './component/Accordian';
import { data } from './component/data';
const About = () => {
  const [item, setitem] = useState(data);
  return (
    <div style={{ marginTop: '120px' }}>
      {
        item.map((it) => {
          const { id } = it;
          return (<Accordian key={id} {...it} />)
        })
      }

    </div>
  )
}

export default About