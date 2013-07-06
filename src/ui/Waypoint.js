var Waypoint = Drawable.extend( {

	constructor: function()
	{
		this.base( 'textures/waypoint.png' );
		this.arrow = new Drawable( 'textures/waypoint_arrow.png' );
		this.arrow.sprite.anchor.y = -5;
		this.arrow.draw( Game.stage );
	},
	update: function()
	{
		var angle = Game.universe.camera.follow_object.position.getAngle( this.position );
		
		this.arrow.setPosition( Game.width / 2, Game.height / 2 );
		
		this.sprite.scale.x = 1 / Game.universe.camera.zoom;
		this.sprite.scale.y = 1 / Game.universe.camera.zoom;
		
		this.arrow.sprite.rotation = -angle;
	}

} );