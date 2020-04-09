var socket = io();
$(document).ready(function(){
	console.log('document ready');
	socket.on('test', function(msg){
		console.log("socket.io response received");
	});
	
});
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      socket.emit("message",$("#messageBox").val());
      return false;
    }
  });
});