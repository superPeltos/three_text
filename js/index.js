import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;

init();
//animate();
//render();
//animate();
function init() {
  let $fontUrl = './assets/fonts/helvetica_typeface.json'
  // CAMERA
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
  camera.position.set( 0, 200, 700 );
  camera.lookAt( scene.position );

  /*INCLUDE FONT*/
  let fontLoader = new THREE.FontLoader();
  fontLoader.load($fontUrl,(font) => {
    var material = new THREE.MeshPhongMaterial( { color: 0x0033ff, specular: 0x555555, shininess: 30 } );

    let geometry = new THREE.TextGeometry('Test', {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 5
    })

    mesh = new THREE.Mesh(geometry, material);

    scene.background = new THREE.Color( 0x000000 );
    //scene.fog = new THREE.Fog( 0xff0000, 250, 1400 );
    scene.add(mesh);

    let light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);

//    var plane = new THREE.Mesh(
//      new THREE.PlaneBufferGeometry( 10000, 10000 ),
//      new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 0.5, transparent: true } )
//    );
//    plane.position.y = 100;
//    plane.rotation.x = - Math.PI / 2;
//    scene.add( plane );

//    textGeo.computeBoundingBox();
//    textGeo.textWidth = textGeo.boundingBox.max.x - textGeo.boundingBox.min.x;
    render();
  });


}

function render() {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.render( scene, camera );
}
//
function animate() {

  requestAnimationFrame( animate );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render( scene, camera );

}
