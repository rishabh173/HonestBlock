 

 $(window).on('load',function(){
        $('.preloader').addClass('complete')
    })
$(function(){
	
  




     $('#cover').hover(function() {
        
        $('#coverquote').text('A random quote on whatever the client wants!');
        $('#coverdescription').hide();
        $(this).css('background-image','url(sample/img5.png)');
        
    }, function() {
        $('#coverquote').text('HonestBlock');
        $('#coverdescription').show();
        $(this).css('background-image','url(image3Text.png)');
    });





});
