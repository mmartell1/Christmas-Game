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
  if (CONTROLS.santa.jump) {
    if (SANTA.falling == false)
    {
	       SANTA.y -= 10;
      if (SANTA.y <= 100) {
         SANTA.falling = true;
      }
    }
}
  if (!CONTROLS.santa.jump) {
    SANTA.falling = true;
  }
  if (SANTA.falling ) {
    if (SANTA.y != 230){
      SANTA.y += 10;
    } else {
      SANTA.falling = false;
    }
  }
  if (SANTA.y == 230){
    SANTA.falling = false;
  }
// else
//   {
//      if (SANTA.y != 230)
//      {
//         SANTA.y += 10;
//      }
//   }
}


function collisionDetection (index) {
  //use SANTA.size or width/height, present.width/height
  if (PRESENTS.positions[index].status == 1 && PRESENTS.positions[index].x >= SANTA.x - 50 && PRESENTS.positions[index].x <= SANTA.x + 50 && PRESENTS.positions[index].y + 25 >= SANTA.y - 30 && PRESENTS.positions[index].y <= SANTA.y + 30){
    PRESENTS.positions[index].status = 0;
    SANTA.points+= 10;
  }
}

function levelOneText (context){
  context.font = "20px Arial";
  context.fillText("Points: " + SANTA.points, 20, 20);
}

function handlePresentAnimation(){
    for (counter = 0; counter < PRESENTS.positions.length; counter++){
      collisionDetection(counter);
      if (PRESENTS.collisions[counter] == 3) {
        PRESENTS.positions[counter].status = 0;
      }
      if (PRESENTS.positions[counter].status == 1 ){
        if (PRESENTS.positions[counter].x + PRESENTS.speeds[counter].x + PRESENTS.size > GAME.canvas.width || PRESENTS.positions[counter].x + PRESENTS.speeds[counter].x < 0){
          PRESENTS.speeds[counter].x *= -1;
        }
        if (PRESENTS.positions[counter].y + PRESENTS.speeds[counter].y + PRESENTS.size > GAME.canvas.height || PRESENTS.positions[counter].y + PRESENTS.speeds[counter].y < 0){
          PRESENTS.speeds[counter].y *= -1;
          PRESENTS.collisions[counter] += 1;
        }
        PRESENTS.positions[counter].x += PRESENTS.speeds[counter].x;
        PRESENTS.positions[counter].y += PRESENTS.speeds[counter].y;
      }
    }

}

function checkPresents(){
  for (var counter = 0; counter < PRESENTS.positions.length; counter++){
    if (PRESENTS.positions[counter].status == 1){
      return false;
    }
  }
  return true;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleSantaAnimation();
    handlePresentAnimation();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSanta(context);
    RenderPresents(context);
    // if (GAME.level == 1) {
      levelOneText(context);
    //   if (checkPresents()){
    //     GAME.level = 2;
    //   }
    // } else if (GAME.level == 2){
    //
    //   context.font = "20px Arial";
    //   context.fillText("Points: " + SANTA.points, 300, 150);
    // }


  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
