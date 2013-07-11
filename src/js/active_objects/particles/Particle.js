"use strict";

var Particle = Movable.extend( {

	constructor: function( texture_path, particle_emitter, lifetime, velocity, scale )
	{
		this.base( texture_path );
		
		this.particle_emitter = particle_emitter;
		
		this.lifetime = lifetime;
		this.lifetime_copy = lifetime;
		
		this.scale = scale;
		this.velocity = velocity;
		
		this.sprite.scale.x = this.scale;
		this.sprite.scale.y = this.scale;
		
		this.sprite.visible = false;
	},
	updateDirection: function()
	{
		var half_angle = this.particle_emitter.angle / 2;
		this.direction = randomFloat( this.particle_emitter.direction - half_angle, this.particle_emitter.direction + half_angle, 5 );
	},
	reset: function()
	{
		this.updateDirection();
		this.lifetime = this.lifetime_copy;
		this.sprite.alpha = 1;
		this.sprite.rotation = this.direction;
		this.setPosition( this.particle_emitter.position.x, this.particle_emitter.position.y );
	},
	update: function()
	{
		if( this.particle_emitter.is_emitting && this.lifetime === 0 )
		{
			this.reset();
		}
		
		if( this.particle_emitter.is_emitting )
		{
			this.sprite.visible = true;
		}
		
		this.lifetime = Math.max( this.lifetime - ( 1000 * Game.delta ), 0 );
		this.sprite.alpha = this.lifetime / 10000;
		
		this.base();
	}

} );