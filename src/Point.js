"use strict";

var Point = Base.extend( {

	constructor: function( x, y )
	{
		this.x = x;
		this.y = y;
	},
	getAngle: function( point )
	{
		return Math.atan2( point.x - this.x, point.y - this.y ) - Math.PI / 2;
	},
	getDistance: function( point )
	{
		var dx = this.x - point.x;
		var dy = this.y - point.y;
		
		// Gotta love old fella Pythagoras
		return Math.round( Math.sqrt( dx * dx + dy * dy ) );
	},
	equals: function( point )
	{
		return point.x === this.x && point.y === this.y;
	}

} );