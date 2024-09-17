import { useState } from 'react'
import './App.css'
import './index.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button>Click Me!</Button>
  )
}

export default App
