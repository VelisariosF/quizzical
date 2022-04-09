import React  from 'react';
import './App.css';
import HomePage from './HomePage';
import QuestionsPage from './QuestionsPage';

export default function App() {
  const [startGame, setStartGame] = React.useState(false)
  

  function toggleStartGame(){
    setStartGame(true)
  }

  return (
    <div className='home'>
      {startGame ? <QuestionsPage/> : <HomePage toggle={toggleStartGame}/>}
    </div>
  
  )
}


