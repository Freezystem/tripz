$(document).ready(function() {
  // Javascript method's body can be found in assets/js/demos.js
  demo.initDashboardPageCharts();
  $('#pill-Who').tab('show');

  $("#pills-What div.card").click(function () {
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

  $("#labelList button span.clear").click(function () {
    let button = $(this).parent("button");
    button.hide();
    $("div[aria-controls='" + button.attr("id") + "']").attr("aria-selected", false);
  });
});