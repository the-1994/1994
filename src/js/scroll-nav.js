app.scrollNav = function() {
	// $('#stickyheader').hide();

     $('.down-arrow').on('click', function () {

         // $('#stickyheader').show('fade', 2000);

         $('html, body').animate({
             scrollTop: $('.rotate-div-container').offset().top
         }, 2000);
         // $('#stickyheader').css('position', 'fixed');

   
      });








};