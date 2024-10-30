import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cruz } from './componentes/Cruz'
import { Menu2 } from './componentes/Menu2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Miguel cruz arias</p>
      </div>
      < Cruz />
      < Menu2 />
    </>
  )
}

export default App
