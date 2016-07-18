// resize popup.
jQuery( document ).ready( function( $ ) {
	var popup_height = $( '#mjstpops-exit-popup' ).height();
	$( '#mjstpops-exit-popup' ).css( "margin-top", -popup_height / 2);	
	$( '#mjstpops-exit-popup' ).css( "height", "auto" );
	//center image
	//$( '#mjstpops-img-wrapper' ).css( "height", popup_height );
});// end resize popup.

// show popup.
jQuery( document ).ready( function($){
	var popup_id = $( '#mjstpops-id' ).text();
	if ($.cookie( 'mjstpops-' + popup_id ) == null)
	{
		$( 'html' )
		  .mouseleave(function() {
		    $("#mjstpops-exit-bg", this).addClass('mjstpops-exit-bg-active');
		    $("#mjstpops-exit-popup", this).addClass('mjstpops-exit-popup-active');
		    $("#mjstpops-exit-close-button", this).addClass('mjstpops-exit-close-button-active');
		  });
		$( "#mjstpops-exit-close-button" ).click(function() {
			$( "#mjstpops-exit-bg,#mjstpops-exit-popup,#mjstpops-exit-close-button").hide();
			$.cookie( 'mjstpops-' + popup_id, popup_id, { expires: 30, path: '/' } );
		});
		$( "#mjstpops-exit-bg" ).click(function() {
			$( "#mjstpops-exit-bg,#mjstpops-exit-popup,#mjstpops-exit-close-button").hide();
		});
	}
}); // end show popup.

// add sub.
jQuery( document ).ready( function( $ ) {
	$( '#mjstpops_add_sub' ).click( function() {
			var popup_id = jQuery( '#mjstpops-id' ).text();
			var name     = jQuery( '#mjstpops-name' ).val();
			var email    = jQuery( '#mjstpops-email' ).val();
			var btn      = jQuery( '#mjstpops_add_sub' ).val();

			// change cursor.
			$("body").css("cursor", "wait");
			// change button.
			$("#mjstpops_add_sub").attr('value', 'PLEASE WAIT...');
			$("#mjstpops_add_sub").prop('disabled', true);

			data = {
	      	action: 'majesticpopups_add_sub',
	      	popup_id: popup_id,
	      	name: name,
	      	email: email
	    };

	    $.post( mjstpops_logic.ajaxurl, data, function ( response ) {
	    	// get json data
	    	var response_obj = jQuery.parseJSON( response );

	    	// change cursor back to normal.
	    	$("body").css("cursor", "default");

	    	// handle errors.
	    	if ( response_obj.name == "not_selected" ){ // Error not_selected: The list is not selected.
	    		$( "#mjstpops-error-popup").addClass( 'mjstpops-error-popup-active' );
			    $( "#mjstpops-error-popup-bg" ).addClass( 'mjstpops-error-popup-bg-active' );
	    		$( "#mjstpops-error-popup-content" ).html( "<strong>Error:</strong> No email list selected. Please go back and setup email lists." );

	    		$( "#mjstpops-error-popup-close" ).click(function() {
					$( "#mjstpops-error-popup").removeClass( 'mjstpops-error-popup-active' );
			    	$( "#mjstpops-error-popup-bg" ).removeClass( 'mjstpops-error-popup-bg-active' );
				});

				$("#mjstpops_add_sub").attr('value', btn);
				$("#mjstpops_add_sub").prop('disabled', false);
	    	} // end error not_selected.
	    	
	    	// Aweber Responses.
	    	else if ( response_obj.name == "success_url" ){ // Response success_url: Success. Redirect.
	    		$("#mjstpops_add_sub").attr('value', 'SUCCESS!');
	    		window.location.replace( response_obj.redirect_url );
	    	} // end response success_url.

	    	else if ( response_obj.name == "success_close" ){ // Response success_close: Success. Subscriber was added.
	    		// change button.
				$("#mjstpops_add_sub").attr('value', 'SUCCESS!');
				setTimeout(function() {
					$("#mjstpops-exit-bg,#mjstpops-exit-popup,#mjstpops-exit-close-button").hide();
					$.cookie( 'mjstpops-' + popup_id, popup_id, { expires: 30, path: '/' } );
    			}, 1500);
	    	} // end response success_close.
	    	// END Aweber Responses.

	    	// MailChimp Responses
	    	else if ( response_obj.name == "mc_success_url" ){ // Response mc_success_url: Success. Redirect.
	    		$("#mjstpops_add_sub").attr('value', 'SUCCESS!');
	    		window.location.replace( response_obj.redirect_url );
	    	} // end response mc_success_url.

	    	else if ( response_obj.name == "mc_success_close" ){ // Response mc_success_close: Success. Subscriber was added.
	    		// change button.
				$("#mjstpops_add_sub").attr('value', 'SUCCESS!');
				setTimeout(function() {
					$("#mjstpops-exit-bg,#mjstpops-exit-popup,#mjstpops-exit-close-button").hide();
					$.cookie( 'mjstpops-' + popup_id, popup_id, { expires: 30, path: '/' } );
    			}, 1500);
	    	} // end response mc_success_close.
	    	// END Mailchimp Responses.

	    	// GetResponse Responses
	    	else if ( response_obj.name == "gr_success_url" ){ // Response gr_success_url: Success. Redirect.
	    		$("#mjstpops_add_sub").attr('value', 'SUCCESS!');
	    		window.location.replace( response_obj.redirect_url );
	    	} // end response gr_success_url.

	    	else if ( response_obj.name == "gr_success_close" ){ // Response gr_success_close: Success. Subscriber was added.
	    		// change button.
				$("#mjstpops_add_sub").attr('value', 'SUCCESS!');
				setTimeout(function() {
					$("#mjstpops-exit-bg,#mjstpops-exit-popup,#mjstpops-exit-close-button").hide();
					$.cookie( 'mjstpops-' + popup_id, popup_id, { expires: 30, path: '/' } );
    			}, 1500);
	    	} // end response gr_success_close.
	    	// END GetResponse Responses.

	    	else { // Response: Error, described in response_obj.error.
	    		$( "#mjstpops-error-popup").addClass( 'mjstpops-error-popup-active' );
			    $( "#mjstpops-error-popup-bg" ).addClass( 'mjstpops-error-popup-bg-active' );
	    		$( "#mjstpops-error-popup-content" ).html( response_obj.error );

	    		$( "#mjstpops-error-popup-close" ).click(function() {
					$( "#mjstpops-error-popup").removeClass( 'mjstpops-error-popup-active' );
			    	$( "#mjstpops-error-popup-bg" ).removeClass( 'mjstpops-error-popup-bg-active' );
				});

				$("#mjstpops_add_sub").attr('value', btn);
				$("#mjstpops_add_sub").prop('disabled', false);
	    	} // end other errors response.

		});	
		return false;
	});
}); // end add sub.