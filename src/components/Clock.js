import React, { useState}  from 'react'

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const calculateTime = () =>{
    time = new Date().toLocaleTimeString();
      setCtime(time);
  }
 
    setInterval(calculateTime, 1000);
    
  
  return (
    <div>
        <p>{ctime}</p>
    </div>
  )
}

export default Clock