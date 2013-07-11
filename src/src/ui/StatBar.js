"use strict";

var StatBar = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).addClass( 'statbar' );
		this.$bar = $( '<div>' ).appendTo( this.$container );
		this.value = 100;
	},
	setValue: function( n )
	{
		this.value = n;
		this.$bar.css( {
			width: this.value + '%'
		} );
	}

} );