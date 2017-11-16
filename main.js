

$(document).ready( function() {
  $('img').attr('src', 'images/atari.png')

  $('img').on('click', function() {
    var source = $(this).attr('alt')
  $(this).attr('src', 'images/' + source )
  setTimeout(function() {
    $('img').attr('src', 'images/atari.png')
  }, 2000);

 })

})
