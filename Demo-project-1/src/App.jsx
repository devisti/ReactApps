import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import NetflixCard from './components/NetflixCardList.jsx'
import Footer from './components/Footer.jsx'
import TypingAnimation from './components/TypingAnimation.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="root-wrapper">
      <Navbar />
      <div id='home'></div>
      <div className="main-container">
        <div className='heading-1-wrapper'>
          <h1 className='heading-1'>Welcome to</h1>
          <TypingAnimation />
        </div>
        <NetflixCard />
        <div className="card-wrapper">
          <Card title="Enjoy on your TV" content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." />
          <Card title="Download your shows to watch offline" content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." />
          <Card title="Watch everywhere" content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." />
          <Card title="Create profiles for kids" content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." />
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default App