const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth); // let's create a shape!
const material = new THREE.MeshBasicMaterial({color: 0xd10373}); // lets give it color!
const cube = new THREE.Mesh(geometry, material); // Mesh combines Geometry + Material