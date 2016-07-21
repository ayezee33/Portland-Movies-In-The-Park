$(function() {
  $(".southeast, .southwest, .northwest, .northeast").click(function() {
    $(".se, .sw, .nw, .ne").hide();
      $(this).data('clicked', true);
      locationCheck();

    });

    function locationCheck() {
      if ($(".southeast").data('clicked')) {
        $(".se").toggle();
        console.log("se");
      } else if ($(".northeast").data('clicked')) {
        $(".ne").toggle();
        console.log("ne");
      } else if ($(".southwest").data('clicked')) {
        $(".sw").toggle();
        console.log("sw");
      } else if ($(".northwest").data('clicked')) {
        $(".nw").toggle();
        console.log("nw");
      }
    }

  });
  // $("#se").click(){
  //   $(".sw").hide();
  //   $(".ne").hide();
  //   $(".nw").hide();
  // }
  // $("#ne").click(){
  //   $(".se").hide();
  //   $(".sw").hide();
  //   $(".nw").hide();
  // }
  // $("#nw").click(){
  //   $(".se").hide();
  //   $(".ne").hide();
  //   $(".sw").hide();
  // }
