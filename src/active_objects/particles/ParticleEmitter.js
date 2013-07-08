var ParticleEmitter = Base.extend( {

	constructor: function()
	{
		this.particles = new DrawableStorage();
		this.container = new PIXI.DisplayObjectContainer();
		this.is_emitting = false;
		this.direction = 0;
	},
	setPosition: function( x, y )
	{
		this.position = new Point( x, y );
	},
	setDirection: function( radian )
	{
		this.direction = radian;
	},
	addParticles: function( n )
	{
		for( var i = 0; i < n; i++ )
		{
			var particle = new Particle( this, randomInt( 1000, 3000 ), 500 );
			this.particles.add( 'particle_' + i, particle );
		}
	},
	start: function()
	{
		if( ! this.is_emitting )
		{
			this.is_emitting = true;
		}
	},
	stop: function()
	{
		if( this.is_emitting )
		{
			this.is_emitting = false;
		}
	},
	draw: function( stage )
	{
		stage.addChild( this.container );
		this.particles.drawAll( this.container );
	},
	update: function()
	{
		this.particles.updateAll();
	}

} );