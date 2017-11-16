
$(document).ready( function() {

  $('img').attr('src', 'images/atari.png')

  $('img').on('click', function() {
    var source = $(this).attr('alt')
    $(this).attr('src', 'images/' + source )

 })
})

//compare 1st card to 2nd card
// setTimeout(function() {
//       $("img").attr("src", "./resources/images/car.jpg")
//     }, 1000);
