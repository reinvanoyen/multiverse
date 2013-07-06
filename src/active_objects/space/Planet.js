var Planet = OrbittingObject.extend( {
	
	constructor: function( texture_path, orbit_object, orbit_radius, orbit_velocity, scale )
	{
		this.base( texture_path, orbit_object, orbit_radius, orbit_velocity );
		this.sprite.scale.x = scale / 100;
		this.sprite.scale.y = scale / 100;
		this.rotation_speed = randomInt( -20, 20 ) / 10000;
		this.sprite.setInteractive( true );
	},
	click: function( data )
	{
		if( ! this.tooltip )
		{
			this.tooltip = new Tooltip();
			this.tooltip.addLine( this.getName() );
			this.tooltip.addLine( 'size: ' + this.sprite.width );
		}
		
		if( ! this.is_selected )
		{
			this.tooltip.show();
			this.is_selected = true;
		}
		else
		{
			this.tooltip.hide();
			this.is_selected = false;
		}
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
		if( this.tooltip )
		{
			this.tooltip.setPosition( ( this.getWindowPosition().x + this.sprite.width / 2 ) + 10, this.getWindowPosition().y );
		}
		this.sprite.rotation = this.sprite.rotation + this.rotation_speed;
		this.orbit();
		this.interactWithPlayer();
	},
	interactWithPlayer: function()
	{
		var distance_to_player = Game.universe.player.position.getDistance( this.position );
		if( distance_to_player < ( this.sprite.width ) / 1.5 )
		{
			Game.universe.player.velocity_x = -Game.universe.player.velocity_x;
			Game.universe.player.velocity_y = -Game.universe.player.velocity_y;
			
			Game.universe.player.hurt( 5 );
		}
	}
	
} );