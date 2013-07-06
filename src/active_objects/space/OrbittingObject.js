var OrbittingObject = Drawable.extend( {
	
	constructor: function( texture_path, orbit_object, orbit_radius, orbit_velocity )
	{
		this.base( texture_path );
		
		this.orbit_object = orbit_object;
		this.orbit_center = new PIXI.Point();
		this.orbit_radius = orbit_radius;
		
		this.angle = randomInt( 0, 360 );
		this.velocity = orbit_velocity / 100000;
	},
	orbit: function()
	{
		this.orbit_center.x = this.orbit_object.sprite.position.x;
		this.orbit_center.y = this.orbit_object.sprite.position.y;
		
		this.angle += this.velocity;
		
		this.setPosition( this.orbit_center.x + this.orbit_radius * Math.cos( this.angle ), this.orbit_center.y + this.orbit_radius * Math.sin( this.angle ) );
	}
	
} );