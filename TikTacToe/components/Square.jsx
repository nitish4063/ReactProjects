import React, {useState} from 'react'

function Square({value, clicked}) {
    
  return (
    <div 
        className="text-3xl border m-2 p-2"
        onClick={clicked}
    >
        {value}
        {/* X */}

    </div>
  )
}

export default Square