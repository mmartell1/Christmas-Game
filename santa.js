
// Populate a global variable for the spaceship
function InitializeSanta() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  SANTA = {
    x : 50,
    y : 230,
    health : 3,
    latest : {
        x : SANTA.x,
        y : SANTA.y,
    },
    speed : 3,
    initialized : true,
    collected : [],
    falling : false,
    points : 0
  };
}
// function resetSpeed() {}

// Rotate rotates a point around
// cx, cy   :   The central point
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function Rotate(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

// RotateAroundOrigin
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function RotateAroundOrigin(x, y, angle) {
  return Rotate(0, 0, x, y, angle);
}

/**  RenderSanta
 *
 *  Renders all santa points after adjusting them for the rotation and position
 *    in space
 */
function RenderSanta(context) {
	drawEllipse(SANTA.x, SANTA.y, 100, 60, "red", context);
	drawEllipse(SANTA.x, SANTA.y - 30, 50, 30, "#FFDAB9", context);
	drawEllipse(SANTA.x-5, SANTA.y - 35, 5, 2, "black", context);
	drawEllipse(SANTA.x+5, SANTA.y - 35, 5, 2, "black", context);
	drawEllipse(SANTA.x, SANTA.y - 25, 10, 5, "black", context);
	drawEllipse(SANTA.x, SANTA.y - 5, 10, 5, "white", context);
	drawEllipse(SANTA.x, SANTA.y + 5, 10, 5, "white", context);
	drawEllipse(SANTA.x, SANTA.y +15, 10, 5, "white", context);
	drawEllipse(SANTA.x-10, SANTA.y +30, 30, 10, "black", context);
	drawEllipse(SANTA.x+10, SANTA.y +30, 30, 10, "black", context);
	drawEllipse(SANTA.x+30, SANTA.y -12, 30, 10, "#FFDAB9", context);
	drawEllipse(SANTA.x-30, SANTA.y -12, 30, 10, "#FFDAB9", context);
}

function drawEllipse(x, y, w, h, color, context)
{
	context.beginPath();
	context.moveTo(x, y-h/2);
	context.bezierCurveTo(x+w/2, y-h/2, x+w/2, y+h/2,x, y+h/2);
	context.bezierCurveTo(x-w/2, y+h/2, x-w/2, y-h/2,x, y-h/2);
	context.fillStyle = color;
	context.fill();
	context.closePath();
}
