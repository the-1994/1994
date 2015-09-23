app.audioControl = function(){
	console.log('hi');
	var song = $('audio').get(0); 
	var play = $('#play');
	var pause = $('#stop');
	var playText = $('.play-text')
	var pauseText = $ ('.pause-text')
	pause.hide();
	pauseText.hide();
	
	$('#play').click(function(){
		song.play();
		play.hide()
		pause.show();
		pauseText.show();
		playText.hide();
		
	});
	
	$('#stop').click(function(){
		song.pause();
		pause.hide();
		play.show();
		pauseText.hide();
		playText.show();
	});
	
	
};


