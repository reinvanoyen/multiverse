"use strict";

var DrawableStorage = Storage.extend( {

	updateAll: function()
	{
		this.each( function( o )
		{
			o.update();
		} );
	},
	drawAll: function( stage )
	{
		this.each( function( o )
		{
			o.draw( stage );
		} );
	}

} );