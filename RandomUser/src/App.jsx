import { useEffect, useState } from 'react'
import './App.css'
import { NewUser } from './User'
import Card from './Card'

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch('https://randomuser.me/api/').then((response) => response.json()).then((response) => setUser(response.results[0]))
  }, [])
  
  const refresh = () => {
    fetch('https://randomuser.me/api/').then((response) => response.json()).then((response) => setUser(response.results[0]))
  }

  return (
    <>
      {user && <Card user={user} />}
      <button onClick={refresh}>Get New User</button>
    </>
  )
}

export default App
