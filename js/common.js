head.ready(function() {
	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a");
			var tab_item = $(this).find("li");
			var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
			tab_cont.hide();
			tab_item.first().addClass("is-active");
			$(this).parents(".js-tab-group").find(".js-tab1").show();
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				tab_item.removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.hide();
				$(this).parents(".js-tab-group").find("."+index).show();
				return false;
			});
			});
	} tab();

	$('.js-nav-open').on('click', function() {
		$(".nav ul").show();
		$("body").addClass("is-overlay");
	});
	$('.js-nav-close').on('click', function() {
		$(this).parents(".nav ul").hide();
		$("body").removeClass("is-overlay");
	});

	function slick() {
		$('.js-slick').slick({
			centerMode: true,
			centerPadding: '0px',
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 500000,
		  responsive: [
		  {
		    breakpoint: 980,
		    settings: {
		      slidesToShow: 3,
		      slidesToScroll: 1
		    }
		  },
		     {
		       breakpoint: 500,
		       settings: {
		         slidesToShow: 1,
		         slidesToScroll: 1
		       }
		     }
		   ]
		});
	}
	slick()

	$('.summ .summ-minus').click(function(){
		var count = parseInt($(this).prev('input').val());
		if (count <= 1) {$(this).next('input').val(1);}
		else {$(this).prev('input').val(count-1);}
		return false;
	});

	$('.summ .summ-plus').click(function(){
		var count = parseInt($(this).prev().prev('input').val());
		if (count < 1) {$(this).prev().prev('input').val(1);}
		else {$(this).prev().prev('input').val(count+1);}
		return false;
	});


	$('.popup-list-item').on('click', function() {
		
		if ($(this).hasClass("is-active")){
			$(this).removeClass('is-active');
			console.log("111");
		}
		else {
			$(this).addClass('is-active');
			console.log("222");
		}

	});


	$(function() {
	  $( ".js-datepicker" ).datepicker({
	  	dateFormat: 'd M yy',
	    buttonImageOnly: true,
	    buttonText: "Select date"
	  });
	});

	$('.js-select').on('click', function() {
		$('.popup').show();
	});
	$('.js-popup-ok').on('click', function() {
		$('.popup').hide();
	});

	(function($){
    $(window).load(function(){
        $(".js-scroll").mCustomScrollbar();
    });
	})(jQuery);

	$(window).resize(function(){
		slick()
	});
});