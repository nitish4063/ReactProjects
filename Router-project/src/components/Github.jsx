import React from 'react'
import { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res)=> res.json())
        .then((res)=> setData(res))
    }, [])

  return (
    <div>Github Followers: {data.followers}</div>
  )
}

export default Github