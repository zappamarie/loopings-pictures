$(window).load(function(){
  $('.loader').fadeOut(1000);
});

$(document).ready(function () {

  $("img").on("contextmenu",function(){
    return false;
  });

	var selectedClass = "";

  $(".gallery__button[data-rel='all']").addClass('active');

	$(".gallery__button").click(function(){
    $(".gallery__button").removeClass('active');
    $(this).addClass('active');
		selectedClass = $(this).attr("data-rel");
    $(".gallery__wrapper").fadeTo(100, 0.1);
		$(".gallery__wrapper div").not("."+selectedClass).fadeOut().removeClass('scale-anm');

    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $(".gallery__wrapper").fadeTo(300, 1);
    }, 300);
	});

  // Name and total number of images in each category + 1
  var categories = [
    {'catName': 'animals', 'catNumb': 8 + 1},
    {'catName': 'couples', 'catNumb': 9 + 1},
    {'catName': 'nature', 'catNumb': 22 + 1},
    {'catName': 'portraits', 'catNumb': 39 + 1},
    {'catName': 'urban', 'catNumb': 15 + 1},
    {'catName': 'weeding', 'catNumb': 12 + 1}
  ];

  for(var loopIndex = 0; loopIndex < categories.length; loopIndex++) {
    for(var imgIndex = 1; imgIndex < categories[loopIndex].catNumb; imgIndex++) {
      $('.gallery__wrapper')[0].innerHTML += '<div class="gallery__item scale-anm all ' + categories[loopIndex].catName + '"><img src="/img/gallery/' + categories[loopIndex].catName + '/' + imgIndex + '.jpg" alt="" /></div>'
    }
  }

  //COPYRIGHT CLICK
  $("img").on("contextmenu", function(e) {
    e.preventDefault();
  });

  $(window).on('mousedown', function(e) {
    $('#right-click-copyright').fadeOut(1)
  });

  $(window).on('mousedown', function(e) {
    if (e.button == 2) {

      var axisX = e.pageX;
      var axisY = e.pageY;

      $('#right-click-copyright').fadeIn(100);
      $('#right-click-copyright').css({
        "left": axisX,
        "top": axisY
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

});
