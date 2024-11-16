import { useState } from 'react'
import './App.css'
import {Model, Model1 } from './Model'
import Header from './Header/Header'
import Button from './Button/Button'
import "./Button/Button.css"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

function App() {
  const [count, setCount] = useState(0)
  useGSAP(
    () =>{
      const tl = gsap.timeline()
      tl.from("#header", {
        delay:0.4,
        duration: 0.8,
        opacity:0,
        y:-100,
        
      })
      tl.from("#p1F>*", {
        duration: 0.5,
        opacity:0,
        y:50,
        
        
      })
      tl.from("#mainTitle", {
        delay:0.4,
        duration: 1,
        opacity:0,
        scaleX:0,
      })
      tl.from("#card", {
        duration: 0.5,
        opacity:0,
        y:50,
        stagger:0.2,
        
      })
      gsap.from(".page3 img", {
        y:300,
        scale:0.5,
        scrollTrigger:{
          trigger: ".page2",
          scrub: 2.5,
          start: "5% 5%",
          end: "bottom 20%",
          // markers: true,
        }
      })
      
    }
  )

  return (
    <div className='' id='body'>
      <Header />
      <Model path="/3d/1/scene.gltf" scale={11}/>
      <div className=' w100 h100 pi1 flexCenter gap1 page1'>
        
        <h1 className=' cWhite f1 xl' id='mainTitle'>CARUM</h1>
        <div className='flexC alignC gap1' id='card'>
          <div className='f1 lightBold sm2 textC'>C 120,00</div>
          <Button text="BUY NOW" classArray='b1 sm0 '/>
        </div>
        <div className='flex w100' id='p1F'>
          <div className="w100" >
            <div className="lightBold sm1">NEW FRAGRANCES</div>
            <div className='cLw sm0'>Passion, Gain, Yours</div>
          </div>
          <div className='flex w100 gap1 justifyR mgT1'>
            <div>facebook</div>
            <div>|</div>
            <div>instagram</div>
          </div>
        </div>
        
      </div>
      <div id="page2" className='pi1 page2'>
        <div className=' w100'>
          <div className="flex justifyBw alignC alignC">
            <div className='sm0'>s-2020</div>
            <h1 className='f1 xl0'>Gain</h1>
            <div className='sm0'>SCROLL</div>
          </div>
          <div className='flexC gap1 alignC'>
            <div className='sm1 f1'>New fragnance for her</div>
            <Button text="SEE MORE" classArray='b1 sm0' />
          </div>
        </div>
      </div>
      <div className="page3 pi1 flexC justifyC gap2">
        <div className='l textC'>Our Bestseller Products</div>
        <div className="flex gap2 justifyAround  f1 lightBold ">
          <div className='flexC alignC'>
            <div className='imgBox'><img src="/images/p1.png" alt="" /></div>
            <div className='l1'>Passion</div>
            <div className="flexC gap1 alignC">
              <div className='sm1'>$400.00</div>
              <Button text="Buy Now" />
            </div>
            
          </div>
          <div className='flexC alignC'>
            <div className='imgBox'><img src="/images/purple.png" alt="" /></div>
            <div className='l1'>Gain</div>
            <div className="flexC gap1 alignC">
              <div className='sm1'>$800.00</div>
              <Button text="Buy Now" />
            </div>
            
          </div>
          <div className='flexC alignC'>
            <div className='imgBox'><img src="/images/p4.png" alt="" /></div>
            <div className='l1'>Yours</div>
            <div className="flexC gap1 alignC">
              <div className='sm1'>$500.00</div>
              <Button text="Buy Now" />
            </div>
            
          </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default App
