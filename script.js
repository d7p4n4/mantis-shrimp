window.onload = function() {
  
  var btn = $(".btn").attr('rel');
  
$('.btn').on('click', function() {
  $('.overlay').slideDown(800, function() {
  $('.overlay').addClass('active');
  })
})
  
$('.x-btn').on('click', function() {
  $('.overlay').slideUp(800, function() {
  $('.overlay').removeClass('active');
  })  
})
  
}