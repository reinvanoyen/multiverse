"use strict";

var ExhaustFlame = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 4;
		
		this.min_velocity = 10;
		this.max_velocity = 30;
		
		this.min_lifetime = 500;
		this.max_lifetime = 700;
		
		this.particle_texture = 'textures/particles/fire.png';
		
		this.addParticles( 80 );
	}

} );