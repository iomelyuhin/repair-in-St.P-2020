$( window ).scroll(function(e) {
	const body = document.querySelector("body")
	if (e.currentTarget.scrollY >= 50) {
		$(".contacts").addClass("fix")
		// body.style.paddingTop = "66px"
	} else {
		$(".contacts").removeClass("fix")
		// body.style.paddingTop = "0"
	};
	
});