import { useState } from 'react'
import './App.css'
import DisplayHistoryBigRoad from './DisplayHistoryBigRoad.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayHistoryBigRoad />
    </>
  )
}

export default App
