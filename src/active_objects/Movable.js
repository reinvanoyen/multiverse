"use strict";

var Movable = Drawable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.velocity = 0;
		this.direction = 0;
		this.acceleration = 3;
	},
	accelerate: function( n )
	{
		if( this.velocity > n )
		{
			this.velocity = Math.max( this.velocity - this.acceleration, n );
		}
		else if( this.velocity < n )
		{
			this.velocity = Math.min( this.velocity + this.acceleration, n );
		}
	},
	update: function()
	{
		this.frustum();
		var x = this.position.x + ( this.velocity * Game.delta ) * Math.cos( ( this.direction ) );
		var y = this.position.y + ( this.velocity * Game.delta ) * Math.sin( ( this.direction ) );
		this.setPosition( x, y );
	}
	
} );