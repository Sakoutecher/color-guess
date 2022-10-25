import { useEffect, useState } from 'react';
import React from 'react';
import './Guess.css';

function Guess() {

  const [color, setColor] = useState("");

  const getRandomColor = () => {
    const digits = ['1', '2', '3', '4', '5', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    const colorReturn = new Array(6).fill("").map(() => digits[Math.floor(Math.random() * digits.length)]).join("")

    return `#${colorReturn}`
  }

  useEffect(() => {
    setColor(getRandomColor())
  }, [])

  return (
    <div className='color-guesser' style={{ background: color }}></div>
  );
}

export default Guess;
