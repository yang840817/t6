$(document).ready(function() {
  //gototop
  $(function() {
    $(".information-button").click(function() {
      jQuery("html,body").animate({
        scrollTop: 0
      }, 1000);
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('.information-button').fadeIn("fast");
      } else {
        $('.information-button').stop().fadeOut("fast");
      }
    });
  });

  //light box
  // document.getElementById('links').onclick = function(event) {
  //   event = event || window.event;
  //   var target = event.target || event.srcElement,
  //     link = target.src ? target.parentNode : target,
  //     options = {
  //       index: link,
  //       event: event
  //     },
  //     links = this.getElementsByTagName('a');
  //   blueimp.Gallery(links, options);
  // };

  //Carousel
blueimp.Gallery(
    document.getElementById('links').getElementsByTagName('a'),
    {
        container: '#blueimp-gallery-carousel',
        carousel: true
    }
);

});
