/*
* DIRECTIONS:
* Include the following inside main(), remove the renderer() method added in example-6.js
*/

function render(time) {
  time *= 0.001;  // convert time to seconds
 
  cube.rotation.x = time;
  cube.rotation.y = time;
 
  renderer.render(scene, camera);
 
  requestAnimationFrame(render); // see note below
}

requestAnimationFrame(render);

/*
requestAnimationFrame is a request to the browser that you want to animate something.
You pass it a function to be called. In our case it's THREE's render function.

We set the cube's X and Y rotation to the current time.
These rotations are in radians. 
There are 2 pi radians in a circle so our cube should turn around once on each axis in about 6.28 seconds.
*/