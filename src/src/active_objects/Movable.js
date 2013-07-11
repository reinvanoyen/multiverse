"use strict";

var Movable = Drawable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.velocity = 0;
		this.direction = 0;
		this.acceleration = 3;
	},
	accelerate: function( end_velocity )
	{
		this.velocity = Tweener.linear( this.velocity, end_velocity, this.acceleration );
	},
	easeToAngle: function( end_angle )
	{
		this.direction = Tweener.linear( this.direction, end_angle, 0.03 );
	},
	update: function()
	{
		this.frustum();
		var velocity = this.velocity * Game.delta;
		this.setPosition(
			this.position.x + ( velocity ) * Math.cos( this.direction ),
			this.position.y + ( velocity ) * Math.sin( this.direction )
		);
	}
	
} );