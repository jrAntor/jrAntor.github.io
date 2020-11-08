$(document).ready(function(){
	$('.sidenav').sidenav();
	 $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();

});

$(window).on('resize', function() {
  var win = $(this);
  if (win.width() < 1130) {

    $('#main').addClass('offset-l3');
    $('#main').removeClass('offset-l2');
  } else {
    $('#main').removeClass('offset-l3');
    $('#main').addClass('offset-l2');
  }
});