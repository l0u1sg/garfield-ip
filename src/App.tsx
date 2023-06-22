import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [ip, setIP] = useState('')

  const getData = async () => {
    const res = await axios.get('https://api.ipify.org?format=json');
    console.log(res.data.ip)
    setIP(res.data.ip);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
     <div className='App'>
      <h2>Your IP Address is </h2>
      <h4>{ip || "loading"}</h4>
     </div>
    </>
  )
}

export default App
