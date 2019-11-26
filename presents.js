//attempt to render the waves of presents

function InitializePresents () {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  PRESENTS = {
    x : 0,
    y : 150,
    latest : {
        x : PRESENTS.x,
        y : PRESENTS.y,
    },
    size : 25,
    speed : 3,
    initialized : true,
    collisions : [0, 0, 0, 0, 0],
    speeds : [
      {
        x : 4,
        y : 4
      },
      {
        x : -4,
        y : 4
      },
      {
        x : 4,
        y : 4
      },
      {
        x : 4,
        y : 4
      },
      {
        x : -4,
        y : 4
      }
    ],
    positions : [
      {
        x : 0,
       	y : 0,
        status : 1
      },
      {
        x : 550,
       	y : 0,
        status : 1
      },
      {
        x : 0,
       	y : 150,
        status : 1
      },
      {
        x : 550,
       	y : 150,
        status : 1
      },
      {
        x : 250,
       	y : 0,
        status : 1
      }]
  };

}
function RenderPresents(context){
  context.fillStyle = "#000000";
  for (counter = 0; counter < PRESENTS.positions.length; counter++){
    if (PRESENTS.positions[counter].status == 1){
      context.fillRect(PRESENTS.positions[counter].x, PRESENTS.positions[counter].y, PRESENTS.size, PRESENTS.size);
    }
  }
}

function Present(){

}
