import { useEffect, useState } from 'react';
import React from 'react';
import './Guess.css';

const getRandomColor = () => {
  const digits = ['1', '2', '3', '4', '5', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  const colorReturn = new Array(6).fill("").map(() => digits[Math.floor(Math.random() * digits.length)]).join("")

  return `#${colorReturn}`
}

enum Results {
  Correct, Wrong
}

function Guess() {

  const [color, setColor] = useState("");
  const [answers, setAnswers]= useState<string[]>([])
  const [result, setResult] = useState<Results | undefined>(undefined)
  const generateColor = () => {
    const actualColor = getRandomColor()
    setColor(actualColor)
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(
      () => 0.5 - Math.random()
    ))
  }

  useEffect(() => {
    generateColor()
  }, [])

  const handleAnswerClicked = (answer : string) => {
    if (answer === color) {
      setResult(Results.Correct)
      generateColor()
    } else {
      setResult(Results.Wrong)
    }
  }

  return (
    <div className='container'>
      <div className='color-guesser' style={{ background: color }}></div>
      <div className='container-button'>
        {answers.map(answer => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>{answer}</button>
        ))}
      </div>
      {result === Results.Wrong && <div className='wrong'>Wrong answer</div>}
      {result === Results.Correct && <div className='correct'>Correct answer !</div>}
    </div>
  );
}

export default Guess;
