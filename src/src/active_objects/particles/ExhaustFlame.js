"use strict";

var ExhaustFlame = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 1;
		
		this.min_velocity = 100;
		this.max_velocity = 200;
		
		this.min_lifetime = 200;
		this.max_lifetime = 500;
		
		this.particle_texture = 'textures/particles/explosion.png';
		
		this.addParticles( 100 );
	}

} );