$(function() {
  $("#southwest, #southeast, #northwest, #northeast").click(function() {
    $(".se, .sw, .nw, .ne, .all").hide();
    $(this).data('clicked', true);

      if ($("#southeast").data('clicked')) {
        $(".se").toggle();
        console.log("se");
        $(this).data('clicked', false);
      } else if ($("#northeast").data('clicked')) {
        $(".ne").toggle();
        console.log("ne");
        $(this).data('clicked', false);
      } else if ($("#southwest").data('clicked')) {
        $(".sw").toggle();
        console.log("sw");
        $(this).data('clicked', false);
      } else if ($("#northwest").data('clicked')) {
        $(".nw").toggle();
        console.log("nw");
        $(this).data('clicked', false);
      }

    });
  });
