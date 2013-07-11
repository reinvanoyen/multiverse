"use strict";

var Notification = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).addClass( 'notification' ).hide().appendTo( Main.$body );
	},
	setText: function( text )
	{
		this.text = text;
		this.$container.text( this.text );
	},
	show: function()
	{
		var that = this;
		this.$container.fadeIn( function()
		{
			Game.ui.log.addLine( that.text, 'notification' );
			$( this ).delay( 1000 ).fadeOut();
		} );
	}

} );