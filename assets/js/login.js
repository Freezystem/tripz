$(document).ready(
  function () {
    demo.initDashboardPageCharts();

    $("#loginButton a").click(function(e) {
      let href = this.href;
      event.preventDefault();

      $.cookie("userLogin", $("#userLogin").val());
      $.cookie("userPassword", $("#userPassword").val());
      
      window.location = href;
    });
  });