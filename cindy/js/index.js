$(document).ready(function(){
	//set header-box
     $('#header-box').height($('#header-top').height()+$('#nav-box').height()+30);

	//set info-box
 	$('#info-box').height($('#info').height()+30);

//set footer-top
$('#footer-top').height($('#footer-top-content').height()+50);



	//when widow width change ...
	$(window).resize(function(){ 
		//change  header-box  height
	  	$('#header-box').height($('#header-top').height()+$('#nav-box').height()+30);
		//change  info-box  height
	  	$('#info-box').height($('#info').height()+30);
//change  footer-top  height
       $('#footer-top').height($('#footer-top-content').height()+50);

       //
       move = $('.bktibx').width()+25;
       console.log("move2="+move);
	});

	// Bootstrap Arrows
	$('.arrow, [class^=arrow-]').bootstrapArrows();

	

    //banner
        $('.carousel').carousel({
         interval: 3000

     });


    // why choose us
    $('div.dropdown').each(function() {
    var $dropdown = $(this);
    $("a.dropdown-link", $dropdown).click(function(e) {
      e.preventDefault();
      $div = $("div.dropdown-container", $dropdown);
      $div.slideToggle('slow');
      $("div.dropdown-container").not($div).slideUp();
      return false;
    });

    });

    //go top
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
    
 //FEATURED WORKS
var view = $("#feature-img-box");
var move = $('.bktibx').width()+30;


var sliderLimit = -1300

$("#rightArrow").click(function(){
    var currentPosition = parseInt(view.css("left"));

    

    if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 400})

});

$("#leftArrow").click(function(){

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400})

});


//input default-value

$('.default-value').each(function() {
    var default_value = this.value;
    $(this).focus(function() {
        if(this.value == default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            this.value = default_value;
        }
    });
});


});