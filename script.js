 

 $(window).on('load',function(){
        $('.preloader').addClass('complete')
    })
$(function(){
	
  




     $('#cover').hover(function() {
        
        $('#coverquote').text('A random generic quote on whatever the client wants!');
        $('#coverdescription').hide();
        $(this).css('background-image','url(img5.png)');
        
    }, function() {
        $('#coverquote').text('Company Name');
        $('#coverdescription').show();
        $(this).css('background-image','url(ban1.png)');
    });





});
