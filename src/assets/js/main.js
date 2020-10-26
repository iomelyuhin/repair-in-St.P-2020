$( window ).scroll(function(e) {
	if (e.currentTarget.scrollY >= 50) {
		$(".contacts").addClass("fix")
	} else {
		$(".contacts").removeClass("fix")
	};
	
});