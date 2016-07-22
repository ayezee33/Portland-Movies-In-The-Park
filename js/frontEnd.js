$(document).ready(function() {

  // if a location button is clicked
  $(".location-btns button").click(function() {

    //reset the table
    $(".se, .sw, .nw, .ne, .all").hide();

    // and show only the appropriate parks
    $('.' + $(this).attr('id')).show();
  });
});
