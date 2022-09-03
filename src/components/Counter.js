import React, {useState} from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(0);
  return (
    <div>
       <h1>{props.childern}</h1>
       <p>{count}</p>
       <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Counter;