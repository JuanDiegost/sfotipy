$(document).ready(function() {
  $('#menu').on('click', null, function(event) {
      event.preventDefault();
      $("#navigation").toggleClass("open-sidebar");
  });
});
