var Particle = Drawable.extend( {

	constructor: function( particle_emitter, lifetime, velocity )
	{
		this.base( 'textures/particle.png' );
		
		this.particle_emitter = particle_emitter;
		
		this.lifetime = lifetime;
		this.lifetime_copy = lifetime;
		this.velocity = velocity / 100;
		this.sprite.visible = false;
	},
	update: function()
	{
		if( this.particle_emitter.is_emitting )
		{
			this.sprite.visible = true;
			this.lifetime = Math.max( this.lifetime - 10, 0 );
			this.sprite.alpha = this.lifetime / 10000;
			
			if( this.lifetime === 0 )
			{
				this.reset();
			}
		}
		
		this.move();
	},
	reset: function()
	{
		this.lifetime = this.lifetime_copy;
		this.sprite.alpha = 1;
		this.setPosition( this.particle_emitter.position.x, this.particle_emitter.position.y );
	},
	move: function()
	{
		var x = this.position.x + this.velocity * Math.cos( ( this.particle_emitter.direction + 90 * ( Math.PI/180 ) ) );
		var y = this.position.y + this.velocity * Math.sin( ( this.particle_emitter.direction + 90 * ( Math.PI/180 ) ) );
		this.setPosition( x, y );
	}

} );