import React, { useEffect, useState } from 'react'
import AboveGame from './component/AboveGame'
import Game from './component/Game'
import Header from './component/Header'
import useLocalStorage from './hook/useLocalStorage'


export default function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0)
 
  useEffect(() => {
    if(score > bestScore){
      setBestScore(score);
    }
  }, [])

  return (
    <div className="container">
      <Header score={score} bestScore={0} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}

