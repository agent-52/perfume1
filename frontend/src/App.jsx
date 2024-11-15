import { useState } from 'react'
import './App.css'
import Model from './Model'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='body' className=''>
      <Model path="/3d/1/scene.gltf" scale={11}/>
      <div className='grid placeCenter w100 h100 '>
        <h1 className=' cWhite f1 xl'>CARUM</h1>
      </div>
    </div>
  )
}

export default App
