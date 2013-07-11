"use strict";

var Spark = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 2;
		
		this.min_velocity = 10;
		this.max_velocity = 100;
		
		this.min_lifetime = 1000;
		this.max_lifetime = 1000;
		
		this.particle_texture = 'textures/particles/spark.png';
		
		this.addParticles( 8 );
	}

} );