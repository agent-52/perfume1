import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const Model = ({path, scale}) =>{


    

        useEffect(() =>{


            /**
             * Base
             */
            // Debug
            // const gui = new dat.GUI()
            
            // Canvas
            const canvas = document.querySelector('canvas.webgl')
            
            // Scene
            const scene = new THREE.Scene()
            
            /**
             * Models
             */
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('/draco/')
            
            const gltfLoader = new GLTFLoader()
            gltfLoader.setDRACOLoader(dracoLoader)
            
            let mixer = null
            let model = null
            gltfLoader.load(path ,
                (gltf) =>
                {
                    gltf.scene.scale.set(scale, scale, scale)
                   
                    model = gltf.scene
                    model.rotation.y = -Math.PI*0.75
                   
                    
                    
                    // model.position.y = -0.2
                    // model.position.x = 0.2
                    
                    scene.add(gltf.scene)
                    // const axesHelper = new THREE.AxesHelper( 5 );
                    // shoe.add( axesHelper );
                    console.log(gltf)
            
                    // // Animation
                    // mixer = new THREE.AnimationMixer(gltf.scene)
                    // const action = mixer.clipAction(gltf.animations[2])
                    // action.play()

                    gsap.to(model.rotation, { duration: 2, y: 5.5 ,
                        scrollTrigger:{
                            trigger: ".page1",
                            scrub: 2.5,
                            start: "5% 5%",
                            end: "bottom 30%",
                            // markers: true,
                    
                    
                        }
                    });
                    // gsap.to(model.position, { duration: 2, y: 7 ,
                    //     scrollTrigger:{
                    //         trigger: ".page2",
                    //         scrub: 2.5,
                    //         start: "15% 15%",
                    //         end: "bottom top",
                    //         // markers: true,
                    
                    
                    //     }
                    // });
            
                 
            
            
            
            
                }
            )
            
            /**
             * Floor
             */
            
            
            /**
             * Lights
             */
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
            scene.add(ambientLight)
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
            directionalLight.castShadow = true
            directionalLight.shadow.mapSize.set(1024, 1024)
            directionalLight.shadow.camera.far = 15
            directionalLight.shadow.camera.left = - 7
            directionalLight.shadow.camera.top = 7
            directionalLight.shadow.camera.right = 7
            directionalLight.shadow.camera.bottom = - 7
            directionalLight.position.set(-3, 3, 0)
            scene.add(directionalLight)
            
            const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1)
            directionalLight.castShadow = true
            directionalLight.shadow.mapSize.set(1024, 1024)
            directionalLight.shadow.camera.far = 15
            directionalLight.shadow.camera.left = - 7
            directionalLight.shadow.camera.top = 7
            directionalLight.shadow.camera.right = 7
            directionalLight.shadow.camera.bottom = - 7
            directionalLight.position.set(1, 0, 0)
            scene.add(directionalLight1)
            
            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1)
            directionalLight.castShadow = true
            directionalLight.shadow.mapSize.set(1024, 1024)
            directionalLight.shadow.camera.far = 15
            directionalLight.shadow.camera.left = - 7
            directionalLight.shadow.camera.top = 7
            directionalLight.shadow.camera.right = 7
            directionalLight.shadow.camera.bottom = - 7
            directionalLight.position.set(4, 2, 2)
            // const directionalLighthelper = new THREE.DirectionalLightHelper(directionalLight2)
            scene.add(directionalLight2)
            
            /**
             * Sizes
             */
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            
            window.addEventListener('resize', () =>
            {
                // Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight
            
                // Update camera
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()
            
                // Update renderer
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })
            
            /**
             * Camera
             */
            // Base camera
            const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.set(2, 2, 2)
            scene.add(camera)
            
            // Controls
            const controls = new OrbitControls(camera, canvas)
            controls.target.set(0, 0.75, 0)
            controls.enableDamping = true
            controls.enableZoom = false
            controls.enableRotate = false
            controls.minPolarAngle = 0;
		    controls.maxPolarAngle =  Math.PI * 0.5;
            
            /**
             * Renderer
             */
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
            })
            renderer.shadowMap.enabled = true
            renderer.shadowMap.type = THREE.PCFSoftShadowMap
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            
            /**
             * Animate
             */
            const clock = new THREE.Clock()
            let previousTime = 0
            
            const tick = () =>
            {
                const elapsedTime = clock.getElapsedTime()
                const deltaTime = elapsedTime - previousTime
                previousTime = elapsedTime

                //rotation
                if(model){
                    // model.rotation.y = (-Math.PI*0.75)+(Math.sin(-elapsedTime*0.2))
                    
                    // model.position.x = 0.2
                }
                
                

            
                // Model animation
                // if(mixer)
                // {
                //     mixer.update(deltaTime)
                // }
            
                // Update controls
                controls.update()
            
                // Render
                renderer.render(scene, camera)
            
                // Call tick again on the next frame
                window.requestAnimationFrame(tick)
            }
            
            tick()
              })
    

    return(
        <canvas className="webgl"></canvas>
    )
}

export default Model;