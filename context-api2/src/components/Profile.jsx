import React ,{useContext} from 'react'
import { UserContext } from '../context/Usercontext'

function Profile() {
  const userState = useContext(UserContext)
  console.log(userState)

  if(!userState.user) return <div>Please login</div>

  return <div>Welcome {userState.user.username}</div>
}

export default Profile