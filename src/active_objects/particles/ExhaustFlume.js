"use strict";

var ExhaustFlume = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 4;
		
		this.min_velocity = 15;
		this.max_velocity = 30;
		
		this.min_lifetime = 800;
		this.max_lifetime = 5000;
		
		this.min_scale = 0.5;
		this.max_scale = 1.5;
		
		this.addParticles( 100 );
	}

} );