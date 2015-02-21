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

	$(function() {
	  $( ".js-datepicker" ).datepicker({
	  	dateFormat: 'd M yy',
	    buttonImageOnly: true,
	    buttonText: "Select date"
	  });
	});

	$(window).resize(function(){
		slick()
	});
});