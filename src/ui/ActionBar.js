"use strict";

var ActionBar = Base.extend( {

	constructor: function( actions )
	{
		this.actions = actions;
		this.$container = $( '<div>' ).attr( 'id', 'actionbar' ).appendTo( $( 'body' ) );
		
		var that = this;
		this.actions.each( function( e )
		{
			e.$container.appendTo( that.$container );
		} );
	}

} );