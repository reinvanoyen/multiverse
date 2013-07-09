"use strict";

var Fire = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 1;
		
		this.min_velocity = 10;
		this.max_velocity = 50;
		
		this.min_lifetime = 500;
		this.max_lifetime = 3000;
		
		this.particle_texture = 'textures/particles/fire.png';
		
		this.addParticles( 80 );
	}

} );