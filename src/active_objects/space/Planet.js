var Planet = OrbittingObject.extend( {
	
	constructor: function( texture_path, orbit_object, orbit_radius, orbit_velocity, scale )
	{
		this.base( texture_path, orbit_object, orbit_radius, orbit_velocity );
		this.sprite.scale.x = scale / 100;
		this.sprite.scale.y = scale / 100;
		this.rotation_speed = randomInt( -2, 2 ) / 10;
	},
	getName: function()
	{
		if( ! this.name )
		{
			this.name = randomPlanetName();
		}
		return this.name;
	},
	update: function()
	{
		this.frustum();
		
		if( this.tooltip )
		{
			this.tooltip.setPosition( ( this.getWindowPosition().x + this.sprite.width / 2 ) + 10, this.getWindowPosition().y );
		}
		this.sprite.rotation += this.rotation_speed * Game.delta;
		
		this.orbit();
	}
	
} );