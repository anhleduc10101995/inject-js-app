import THREE from "../THREE.js";
import TWEEN from "../TWEEN.js";


export class SynodeAssemblyGuide {
    constructor() {
        var xhr= new XMLHttpRequest();
        xhr.open('GET', 'https://dev.bestar.ca/synode/src/components/assembly-guide-3d.html', true);
        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return; // or whatever error handling you want
           
            console.log(this.responseText);
            document.getElementById('player').innerHTML= this.responseText;
            var clientPlayerDOM = document.getElementById('scene-3d');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            console.log(clientPlayerDOM);
            clientPlayerDOM.appendChild( renderer.domElement );

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 5;

            const animate = function () {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            };

        };
        xhr.send();
            
    }

}

// class Synode3DPlayer {
//     constructor() {
//         this.$classname = 'scene-3d';
//         this.render();
//     }

//     render() {

//         let elementsBuild = '';
//         return elementsBuild;
//     }

// }


// var clientPlayerDOM = document.getElementById('player');
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// console.log(clientPlayerDOM);
// clientPlayerDOM.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// const animate = function () {
//     requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera );
// };

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
