// JavaScript Document
$(window).scroll(function(){
	// top
	var scrollValue = $(this).scrollTop();
	if(window.innerWidth>1024){
		if(scrollValue > $(window).height()*0.5){
			$('.top').fadeIn();
		}else{
			$('.top').fadeOut();
		}
	}
});



$(document).ready(function(){
	//top
	$('.top').click(function(){
		$('html,body').animate({scrollTop:0}, 1000);
	});

	// banner
	$('#camera_wrap_1').camera();

	// Q&A
	$('.qa .q').click(function(){
		$(this).toggleClass('active');
		$(this).next().children().slideToggle('slow');
	})

	// gallery
	$("#owl-gallery").owlCarousel({
		items : 4,
		itemsDesktop : [1261,3],
		itemsDesktopSmall : [1015,3],
		itemsTablet : [759,2],
		itemsMobile : [461,1],
		navigation : true,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		pagination : false,
		slideSpeed : 800,
		paginationSpeed : 800,
		//autoPlay : true,
		stopOnHover : true
	});
});



$(window).load(function(){
	// product piece height
	for(var i=1;i<5;i++){
		var children = $('.product .piece').children(':nth-child('+i+')');
		if(window.innerWidth>768){
				var max = Math.max.apply(null, children.map(function(){
					 return $(this).outerHeight();
				}).get());
				children.css('height',max);
		}else{
				children.css('height','');
		}
	}

	// news imgbg
	var number = $('.news .piece').length;
	var imgbg = $('.news .imgbg');
	var img = $('.news .imgbg img');
	for(var i=0;i<number;i++){
		if($(img).css('display')=='none'){
				$(imgbg[i]).css('height',$(imgbg[i]).next().height()).css('background-image','url('+$(img[i]).attr('src')+')');
		}else{
				$(imgbg).css('height','').css('background-image','');
		};
	}
});



$(window).resize(function(){
	// product piece height
	for(var i=1;i<5;i++){
		var children = $('.product .piece').children(':nth-child('+i+')');
		children.css('height','');
		if(window.innerWidth>768){
				var max = Math.max.apply(null, children.map(function(){
					 return $(this).outerHeight();
				}).get());
				children.css('height',max);
		}else{
				children.css('height','');
		}
	}

	// news imgbg
	var number = $('.news .piece').length;
	var imgbg = $('.news .imgbg');
	var img = $('.news .imgbg img');
	for(var i=0;i<number;i++){
		if($(img).css('display')=='none'){
				$(imgbg[i]).css('height',$(imgbg[i]).next().height()).css('background-image','url('+$(img[i]).attr('src')+')');
		}else{
				$(imgbg).css('height','').css('background-image','');
		};
	}
});
