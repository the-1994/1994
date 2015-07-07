app.hamburger = function(){
	
	$( '.menu-btn' ).click(function(){
    	// $('.responsive-menu').toggleClass('expand');
    	$('.responsive-menu').toggle("slide", { direction:"down" }, 300);
    	 // $('.flags').toggle("slide", { direction: "left" }, 300);
    	$('.hero-section').toggleClass('expand400');
    	// $('.philosophy').toggleClass('expand400');
    	$('.contact-content').toggleClass('expand400');

    	     });
};