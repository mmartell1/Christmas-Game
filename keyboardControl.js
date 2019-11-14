/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  santa : {
    forward : false,
    back : false,
  jump : false
  }


};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowRight":
      CONTROLS.santa.forward = true;
      break;
    case "ArrowLeft":
      CONTROLS.santa.backward = true;
      break;
      break;
    case " ":
      CONTROLS.santa.jump = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowRight":
      CONTROLS.santa.forward = false;
      break;
    case "ArrowLeft":
      CONTROLS.santa.backward = false;
      break;
      break;
    case " ":
      CONTROLS.santa.jump = false;
      break;
    default:
  }
});
