javascript:

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var socket;
var canSendEmit=true;



function socketSetup() {
  socket = io.connect("http://127.0.0.1:3000");
  socket.emit("test","hi");
  socket.on('pause', function(msg){
		console.log("received pause video");
		canSendEmit=false;
		$(".btm-media-player").click();
		setTimeout(pause,10);
		setTimeout(turnOffSeek, 1000);
  });
  socket.on('play', function(msg){
		console.log("received play video");
		canSendEmit=false;
		$(".btm-media-player").click();
		setTimeout(play,10);
		setTimeout(turnOffSeek, 1000);
  });
  socket.on('seek', function(msg){
		console.log("received seek video");
		canSendEmit=false;
		player.currentTime = msg;
  });
  socket.on('message', function(msg){
		console.log("received message");
		alert(msg);
  });
}

function sendPause() {
  
  if(canSendEmit==true){
  	console.log("sending pausing");
    socket.emit("pause","data");
  }
}
function sendPlay() {
	console.log('playing');  
  if(canSendEmit==true){
  	console.log("sending playing");
    socket.emit("play","data");
  }
}
function sendSeek() {
  if(canSendEmit==true){
  	console.log(" sending seeking");
    socket.emit("seek", player.currentTime);
  }
}
function turnOffSeek() {
  console.log('can send emit true');
  canSendEmit=true;
}


var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js";
document.head.appendChild(script);
setTimeout(socketSetup, 1000);



var player = document.getElementsByTagName('video')[0];
player.onpause=sendPause;
player.onplay=sendPlay;
player.onseeking=sendSeek;
player.onseeked= turnOffSeek;

function playVideo() {

  
  
}
function play() {
	$(".play-icon").click()
}
function pause() {
	$(".pause-icon").click()	
}



