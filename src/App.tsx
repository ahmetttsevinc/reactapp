import { useState } from "react"

function Square({ value, onSquareClick }: { value: any; onSquareClick: any }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  const [point, setPoint] = useState(0)
  const [location, setLocation] = useState(10)
  const [squares, setSquares] = useState(Array(9).fill("O"))

  function handleClick(i: number) {
    if (i === location) {
      setPoint(point + 1)
    } else if (point !== 0) {
      setPoint(point - 1)
    }
    const nextLocation = Math.floor(Math.random() * 9)
    const nextSquares = squares.slice()
    nextSquares.fill("O")[nextLocation] = "X"
    setLocation(nextLocation)
    setSquares(nextSquares)
  }

  // let hasFinished = false
  // setTimeout(() => (hasFinished = true), 2000)
  let status = "Point: " + point
  let remainingTime =
    location === 10 ? "Press any button to start" : "Remaining Time: " + 10
  return (
    <>
      <div className="remaining-time">{remainingTime}</div>
      <div className="point">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}
