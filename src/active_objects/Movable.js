"use strict";

var Movable = Drawable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.velocity = 0;
		this.direction = 0;
	},
	move: function()
	{
		var x = this.position.x + ( this.velocity * Game.delta ) * Math.cos( ( this.direction ) );
		var y = this.position.y + ( this.velocity * Game.delta ) * Math.sin( ( this.direction ) );
		this.setPosition( x, y );
	}
	
} );