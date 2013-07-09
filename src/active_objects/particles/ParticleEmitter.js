var ParticleEmitter = Base.extend( {

	constructor: function()
	{
		this.is_emitting = false;
		
		this.particles = new DrawableStorage();
		this.container = new PIXI.DisplayObjectContainer();
		
		this.position = new Point( 0, 0 );
		this.direction = 0;
		this.angle = 1;
		
		this.min_lifetime = 500;
		this.max_lifetime = 2000;
		
		this.min_velocity = 200;
		this.max_velocity = 1000;
		
		this.particle_texture = 'textures/particles/smoke.png';
	},
	setPosition: function( x, y )
	{
		this.position.x = x;
		this.position.y = y;
	},
	addParticles: function( n )
	{
		for( var i = 0; i < n; i++ )
		{
			var particle = new Particle( this.particle_texture, this, randomInt( this.min_lifetime, this.max_lifetime ), randomInt( this.min_velocity, this.max_velocity ) );
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