import React, {useEffect, useState} from 'react'

function Counter() {
  const [cnt, setCnt] = useState(0);

  useEffect(()=>{
    console.log("component mounted")
    return ()=>{
      console.log("unmounting brother!!!")
    }
  }, [])

  useEffect(()=>{
    console.log("count updated", cnt)
    return () => {
      console.log("BYE BYE!!!", cnt)
    }
  }, [cnt])

  return (
    <div>
      <h2>Count is {cnt}</h2>
      <button onClick={()=>setCnt(cnt + 1)}>Increment</button>
    </div>
  )
}

export default Counter