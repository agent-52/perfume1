import { useState } from 'react'
import './App.css'
import Model from './Model'
import Header from './Header/Header'
import Button from './Button/Button'
import "./Button/Button.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='' id='body'>
      <Header />
      <Model path="/3d/1/scene.gltf" scale={11}/>
      <div className=' w100 h100 pi1 flexCenter'>
        <h1 className=' cWhite f1 xl'>CARUM</h1>
        <div className='flexC alignC gap2'>
          <div className='f1 lightBold sm2 textC'>C 120,00</div>
          <Button text="BUY NOW" classArray='b1 sm0'/>
        </div>
        <div className='flex w100 gap1 justifyR mgT1'>
            <div>facebook</div>
            <div>|</div>
            <div>instagram</div>
        </div>
      </div>
    </div>
  )
}

export default App
