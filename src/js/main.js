/*
1) Animation (11 line)
2) Featured Works slider (22 line)
3) testimonial slider (60 line)

*/

$(document) .ready(function(e) {
/*start tag*/

/*/////////////////////////////////////
						1) Animation
/////////////////////////////////////*/
			
            new WOW( ).init( );
            $( window ).on( 'load', function( ) {
          msieversion( );
            autoHeight( );
			});
			
/*/////////////////////////////////////
				2) Featured Works slider
/////////////////////////////////////*/
			
$('.autoplay').slick({
			dots: false,
			infinite: true,
			centerMode:false,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay:false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
			
		});
		

/*/////////////////////////////////////
				3) testimonial slider
/////////////////////////////////////*/
			
$('.testimonial').slick({
			dots: false,
			infinite: true,
			centerMode:false,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay:false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 790,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
			
		});
		
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});

/*End tag*/

});

