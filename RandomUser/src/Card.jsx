import React from 'react'

function Card({user}) {
    const imageUrl = user.picture.large
  return (
    <div>
        <img src={imageUrl} />
        <h3>Welcome {`${user.name.first} ${user.name.last}`}</h3>
    </div>
  )
}

export default Card