import React from 'react'

const Demo = (props) => {
  const user = {
    name: 'John',
    age: 36
  };
  return (
    <div>
        <h1>This data is coming from: {props.name}</h1>
        <button onClick={() => props.data(user)} >Click</button>
    </div>
  )
}

export default Demo