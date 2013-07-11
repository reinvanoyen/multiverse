"use strict";

var Cloud = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 7;
		
		this.min_velocity = 10;
		this.max_velocity = 30;
		
		this.min_lifetime = 1000;
		this.max_lifetime = 2000;
		
		this.particle_texture = 'textures/particles/cloud.png';
		
		this.addParticles( 40 );
	}

} );