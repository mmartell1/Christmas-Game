/**
 *  handleShipAnimation moves the santa based on its direction and
 *    keyboard control
 *
 */
function handleSantaAnimation() {
    if (CONTROLS.santa.forward) {
    SANTA.x += SANTA.speed;
  }
  if (CONTROLS.santa.backward) {
    SANTA.x -= SANTA.speed;
  }
  // Check if santa is leaving the boundary, if so, switch sides
  if (SANTA.x > GAME.canvas.width) {
    SANTA.x = 0;
  } else if (SANTA.x < 0) {
    SANTA.x = 600;
  } else if (SANTA.y > GAME.canvas.height) {
    SANTA.y = 230;
  } else if (SANTA.y < 0) {
    SANTA.y = 230;
  }
  if (CONTROLS.santa.jump)
  {
     if (SANTA.y == 230)
     {
	SANTA.y -= SANTA.speed * 30;
     }
  }
  else
  {
     if (SANTA.y != 230)
     {
        SANTA.y += 5;
     }
  }
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleSantaAnimation();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSanta(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
