
import {SynodeAssemblyGuide}   from './components/SynodeAssemblyGuide.js';


// import { Scene,PerspectiveCamera,Mesh,MeshBasicMaterial,WebGLRenderer,BoxGeometry } from 'three';
//import * as THREE from 'https://cdn.skypack.dev/three@0.133.1';
console.log("synodePlayer");

var player  = new SynodeAssemblyGuide();

// var clientPlayer = $( "synode-player[id='player']" );






window.synodePlayer = player;








// var clientPlayerDOM = document.getElementById('target2');
// var tween2 = new TWEEN.Tween(clientPlayerDOM.dataset)
//     .to({rotation: 360, y: 300}, 750)
//     .repeat(Infinity)
//     .delay(1000)
//     .yoyo(true)
//     .easing(TWEEN.Easing.Cubic.InOut)
//     .onUpdate(function (object) {
//         updateBox(clientPlayerDOM, object)
//     })
//     .start()
//     tween2.start();


//     window.tweenTest= tween2;
//     animate();


// function animate(time) {
//     requestAnimationFrame(animate)

//     TWEEN.update(time)
// }

// function updateBox(box, params) {
    
//     var s = box.style,
//     transform = 'translateY(' + Math.round(params.y) + 'px) rotate(' + Math.floor(params.rotation) + 'deg)'
//     s.webkitTransform = transform
//     s.mozTransform = transform
//     s.transform = transform
// }

// export default class SynodePlayer {

//     synodePlayer(param) {
//         class SynodePlayer {
//             constructor() {
        
                
//             }
        
//         }        
//         console.log(param);
//         console.log("synodePlayer:");
          
//             var synodePlayer = $( "synode-player[id='player']" );
//             console.log(synodePlayer);  
//             var player = document.getElementById('#player');
//             console.log(player);
//             // player = new SynodePlayer()
    
    
//             const scene = new Scene();
//             const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
//             const renderer = new WebGLRenderer();
//             renderer.setSize( window.innerWidth, window.innerHeight );
//             player.appendChild( renderer.domElement );
        
//             const geometry = new BoxGeometry();
//             const material = new MeshBasicMaterial( { color: 0x00ff00 } );
//             const cube = new Mesh( geometry, material );
//             scene.add( cube );
        
//             camera.position.z = 5;
        
//             const animate = function () {
//                 requestAnimationFrame( animate );
        
//                 cube.rotation.x += 0.01;
//                 cube.rotation.y += 0.01;
        
//                 renderer.render( scene, camera );
//             };
        
//             animate();
//             return player;
    
//     }
    
// }





// synodePlayer(param) {
//     class SynodePlayer {
//         constructor() {
    
            
//         }
    
//     }        
//     console.log(param);
//     console.log("synodePlayer:");
      
//         var synodePlayer = $( "synode-player[id='player']" );
//         console.log(synodePlayer);  
//         var player = document.getElementById('#player');
//         console.log(player);
//         player = new SynodePlayer()


//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize( window.innerWidth, window.innerHeight );
//         player.appendChild( renderer.domElement );
    
//         const geometry = new THREE.BoxGeometry();
//         const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//         const cube = new THREE.Mesh( geometry, material );
//         scene.add( cube );
    
//         camera.position.z = 5;
    
//         const animate = function () {
//             requestAnimationFrame( animate );
    
//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;
    
//             renderer.render( scene, camera );
//         };
    
//         animate();
//         return player;

// }