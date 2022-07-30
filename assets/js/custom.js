jQuery(document).ready(function(){ 


	jQuery('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

	//Scrollt Smooth 
	jQuery.scrollIt({
		upKey: 38,                // key code to navigate to the next section
		downKey: 40,              // key code to navigate to the previous section
		easing: 'swing',         // the easing function for animation
		scrollTime: 800,          // how long (in ms) the animation takes
		activeClass: 'active',    // class given to the active nav element
		onPageChange: null,       // function(pageIndex) that is called when page is changed
		topOffset: 0            // offste (in px) for fixed top navigation
	  });

	

		
		
});