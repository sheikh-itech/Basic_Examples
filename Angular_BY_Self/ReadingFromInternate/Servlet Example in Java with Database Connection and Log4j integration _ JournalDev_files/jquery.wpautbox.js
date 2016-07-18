/**
*
* jQuery Advance Responsive Tabs Plugin
* URL: http://www.codecanyon.net/user/phpbits
* Version: 1.0
* Author: phpbits
* Author URL: http://www.codecanyon.net/user/phpbits
*
*/

// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function( $, window, document, undefined ) {
	$('.wpautbox-above, .wpautbox-below').atabs();
	var authorids = [];
	$('.wpautbox-input-authorid').each(function(){
		authorid = $(this).val();
		authorids.push( authorid );
	});
	if(authorids.length > 0){
		jQuery.ajax({
			type : "post",
			dataType : "json",
			url : wpautboxAjax.ajaxurl,
			data : {action: "wpautbox_ajax", authorids : authorids},
			success: function(response){
				// console.log(response);
				// console.log(authorids);
			}
		});
	}

	// console.log( authorids );
	// console.log( wpautboxAjax.ajaxurl );
})( jQuery, window, document );