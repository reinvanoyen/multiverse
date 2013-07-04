var Camera = Base.extend( {

	constructor: function( stage )
	{
		this.stage = stage;
		this.center = new PIXI.Point( 0, 0 );
		this.zoom = 1;
	},
	follow: function( object )
	{
		this.follow_object = object;
	},
	setZoom: function( zoom )
	{
		this.zoom = zoom;
	},
	update: function()
	{
		this.stage.scale.x = this.zoom;
		this.stage.scale.y = this.zoom;
		
		this.center.x = this.follow_object.sprite.position.x * this.zoom;
		this.center.y = this.follow_object.sprite.position.y * this.zoom;
		
		this.stage.position.x = -( this.center.x - Game.width / 2 );
		this.stage.position.y = -( this.center.y - Game.height / 2 );
	}
	
} );