$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax--bg').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight

    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
      } else {
     $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
    $('.parallax--tb').css('top', 50+(scroll*0.03)+'em')
    $('.parallax--pl').css('top', 25+(scroll*0.028)+'em')
  })
}
