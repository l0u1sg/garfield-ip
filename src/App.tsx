import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import video from './assets/GarfieldIP.mp4'

function App() {
  const [ip, setIP] = useState('')

  const getData = async () => {
    const res = await axios.get('https://ifconfig.louisgallet.fr/ip');
    console.log(res.data)
    setIP(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='App'>
        <h2>Your IP Address is </h2>
        <h4>{ip || "loading"}</h4>
        <div className="video-container">
          <video src={video} controls height="500" width="800" />
          <div className="text-overlay">
            <p>{ip || " "}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
