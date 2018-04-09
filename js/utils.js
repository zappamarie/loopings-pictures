$(window).load(function(){
  $('.loader').fadeOut(1000);
});

$(document).ready(function () {

  //COPYRIGHT CLICK

  if(!(window.location.href.indexOf("contact") > -1)) {

    $(document).on("contextmenu", function(e) {
      e.preventDefault();
    });

    $(window).on('mousedown', function(e) {
      $('#right-click-copyright').fadeOut(1)
    });

    setTimeout(function(){
      $('#right-click-copyright').fadeOut(1)
    }, 2000);

    $(window).on('mousedown', function(e) {
      if (e.button == 2) {

        var axisX = e.pageX;
        var axisY = e.pageY;

        $('#right-click-copyright').fadeIn(100);
        $('#right-click-copyright').css({
          "left": axisX - 8,
          "top": axisY - 15
        });

        e.stopPropagation();
        e.preventDefault();

        setTimeout(function(){
          $('#right-click-copyright').fadeOut(1)
        }, 2000);

      } else {
        return false;
      }
    });
  }

});
