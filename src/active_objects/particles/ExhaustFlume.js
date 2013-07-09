var ExhaustFlume = ParticleEmitter.extend( {

	constructor: function()
	{
		this.base();
		
		this.angle = 2;
		
		this.min_velocity = 15;
		this.max_velocity = 30;
		
		this.min_lifetime = 1000;
		this.max_lifetime = 2000;
		
		this.addParticles( 100 );
	}

} );