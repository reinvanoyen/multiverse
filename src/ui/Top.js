"use strict";

var Top = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).attr( 'id', 'top' ).appendTo( $( 'body' ) );
	}
	
} );