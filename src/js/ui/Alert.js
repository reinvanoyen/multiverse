"use strict";

var Alert = Window.extend( {

	constructor: function( title, text )
	{
		this.base();
		this.setTitle( title );
		this.setContent( text );
		this.open();
	}

} );