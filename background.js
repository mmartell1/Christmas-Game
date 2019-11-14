function RenderBackground(context)
{
	var bg = new Image();
	bg.src = "./winterscape.jpg";
	bg.onload = function(){context.drawImage(bg,0,0);};
//	console.log("Run");
}
