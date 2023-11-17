import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import { useState } from 'react';

function App() {
  const [otherKnightPosition, setOtherKnightPosition] = useState(-1);
  const [knightFixPos, setKnightFixPos] = useState(-1);
  const [availablePositionsCounter, setAvailablePositionCounter] = useState(0);
  // Size of grid
  const size = 4;
  const blockedIndicies = [];

  function calculateIndicies(C)
  {
    blockedIndicies.push(C);
    const R = C - Math.floor((C-1) / size)*size;
    const oneRowUp = C -(R - 1) + (-1)*(size);
    const oneRowDown = C -(R - 1) + (+1)*(size);
    const twoRowUp = C -(R - 1) + (-2)*(size);
    const twoRowDown = C -(R - 1) + (+2)*(size);
    if(oneRowUp > 0)
    {
      if(R - 2 - 1 >= 0)
        blockedIndicies.push(oneRowUp + (R - 2 - 1));
      if(R + 2 - 1 < size)
        blockedIndicies.push(oneRowUp + (R + 2 - 1));
    }
    if(twoRowUp > 0)
    {
      if(R - 1 - 1 >= 0)
        blockedIndicies.push(twoRowUp + (R - 1 - 1));
      if(R + 1 - 1 < size)
        blockedIndicies.push(twoRowUp + (R + 1 - 1));
    }
    if(oneRowDown <= size*size)
    {
      if(R - 2 - 1 >= 0)
        blockedIndicies.push(oneRowDown + (R - 2 - 1));
      if(R + 2 - 1 < size)
        blockedIndicies.push(oneRowDown + (R + 2 - 1));
    }
    if(twoRowDown <= size*size)
    {
      if(R - 1 - 1 >= 0)
        blockedIndicies.push(twoRowDown + (R - 1 - 1));
      if(R + 1 - 1 < size)
        blockedIndicies.push(twoRowDown + (R + 1 - 1));
    }
  }

  function calculateBlockedIndicies(C)
  {
    setKnightFixPos(C);
    calculateIndicies(C);
  }

  function calculateKnightNewPosition()
  {
    // Total of indicies are blocked + one of fixed
    if(knightFixPos === -1)
      return;
    calculateIndicies(knightFixPos);
    let i = otherKnightPosition === -1 ? 1 : otherKnightPosition + 1;
    while(blockedIndicies.includes(i))
      i++;
    if(i <= size*size)
    {
      setOtherKnightPosition(i);
      setAvailablePositionCounter(availablePositionsCounter + 1);
    }
  }

  function resetIllustration()
  {
    setOtherKnightPosition(-1);
    setKnightFixPos(-1);
    setAvailablePositionCounter(0);
  }

  return (
  <>
    <Header />
    <Container size={ size } otherKnightPosition = { otherKnightPosition } setOtherKnightPosition = { calculateKnightNewPosition } fixedKnightPosition = { knightFixPos } setFixedKnightPosition = { calculateBlockedIndicies } availablePositionsCounter = { availablePositionsCounter } resetIllustration = { resetIllustration }/>
  </>);
}

export default App;
