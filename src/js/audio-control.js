app.audioControl = function(){
	console.log('hi');
	var song = $('audio').get(0); 
	var play = $('#play');
	var pause = $('#stop');
	
	pause.hide();
	
	$('#play').click(function(){
		song.play();
		play.hide()
		pause.show();
		
	});
	
	$('#stop').click(function(){
		song.pause();
		pause.hide();
		play.show();
	});
	
	
};



