var chessBoard = [];
var me = true;

// 赢法数组
var wins = [];

for(var i=0;i<15;i++) {
	chessBoard[i]=[];
	for(var j=0;j<15;j++) {
		chessBoard[i][j] = 0;
	}
}

for(var i=0;i<15;i++){
	wins[i]=[];
	for(var j=0;j<15;j++) {
		wins[i][j] = 0;
	}
}

var count=0;
// 横线
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i][j+k][count]=true;
		}
		count++;
	}
}
// 竖线
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[j+k][i][count]=true;
		}
		count++;
	}
}
// 斜线
for(var i=0;i<11;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j+k][count]=true;
		}
		count++;
	}
}
// 反斜线
for(var i=0;i<11;i++){
	for(var j=14;j>3;j--){
		for(var k=0;k<5;k++){
			wins[i+k][j-k][count]=true;
		}
		count++;
	}
}

console.log(count);

var reset = document.getElementById("reset");

var chess = document.getElementById('chess');
var context = chess.getContext('2d');

context.strokeStyle = "#bfbfbf";

var logo = new Image();
logo.src = "image/logo.png";
logo.onload = function(){
	context.drawImage(logo,100,100,250,250);
	drawChessBoard();
}
var drawChessBoard = function(){
		for(var i=0;i<15;i++){
		context.moveTo(15+i*30,15);
		context.lineTo(15+i*30,435);
		context.stroke();
		context.moveTo(15,15+i*30);
		context.lineTo(435,15+i*30);
		context.stroke();
	}
}

var oneStep = function(i,j,me){
	context.beginPath();
	context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
	context.closePath();

	var gradient = context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0);// problem
	if(me){
		gradient.addColorStop(0,"#fff");
		gradient.addColorStop(1,"#000");
	}else{
		gradient.addColorStop(0,"#d1d1d1");
		gradient.addColorStop(1,"#f9f9f9");
	}
	
	context.fillStyle = gradient;
	context.fill();
}

chess.onclick = function(e) {
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x/30);
	var j = Math.floor(y/30);
	if(0==chessBoard[i][j]){
		oneStep(i,j,me);
		if(me) {
			chessBoard[i][j] = 1;
		} else {
			chessBoard[i][j] = 2;
		}
		me = !me;
	}
}

reset.onclick = function(){
	window.location.reload();
}