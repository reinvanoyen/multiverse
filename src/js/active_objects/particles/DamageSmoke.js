"use strict";

var DamageSmoke = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 1;
		
		this.min_velocity = 50;
		this.max_velocity = 100;
		
		this.min_lifetime = 10;
		this.max_lifetime = 3000;
		
		this.min_scale = 0.7;
		this.max_scale = 1;
		
		this.particle_texture = 'textures/particles/black_smoke.png';
		
		this.addParticles( 150 );
	}

} );