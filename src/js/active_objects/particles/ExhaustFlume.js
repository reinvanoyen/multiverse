"use strict";

var ExhaustFlume = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 3;
		
		this.min_velocity = 15;
		this.max_velocity = 30;
		
		this.min_lifetime = 10;
		this.max_lifetime = 3000;
		
		this.min_scale = 0.7;
		this.max_scale = 1;
		
		this.addParticles( 150 );
	}

} );