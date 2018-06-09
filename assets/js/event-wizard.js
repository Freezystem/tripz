$(document).ready(function() {
  // Javascript method's body can be found in assets/js/demos.js
  demo.initDashboardPageCharts();
  $('#pill-Who').tab('show');

  $("#pills-What div.card").on("click", function (e) {
    let labelId = $(this).attr("aria-controls"),
        isActive = $(this).attr("aria-selected") == "true";

    if ( isActive ) {
      $("#" + labelId).fadeOut();
    }
    else {
      $("#" + labelId).fadeIn();
    }

    $(this).attr("aria-selected", !isActive);
  });
});