var Planet = OrbittingObject.extend( {
	
	constructor: function( texture_path, orbit_object, orbit_radius, orbit_velocity, scale )
	{
		this.base( texture_path, orbit_object, orbit_radius, orbit_velocity );
		this.sprite.scale.x = scale / 100;
		this.sprite.scale.y = scale / 100;
		this.rotation_speed = randomInt( -20, 20 ) / 10000;
		this.sprite.setInteractive( true );
	},
	update: function()
	{
		this.sprite.rotation = this.sprite.rotation + this.rotation_speed;
		this.orbit();
	},
	click: function( data )
	{
		var window = new Ui.Window();
		window.setTitle( 'Planet ' + this.getName() );
		window.setContent( this.getWindowHtml() );
		window.open();
	},
	getName: function()
	{
		if( ! this.name )
		{
			this.name = randomPlanetName();
		}
		return this.name;
	},
	getWindowHtml: function()
	{
		return '<strong>Size:<strong> ' + this.sprite.width;
	}
	
} );