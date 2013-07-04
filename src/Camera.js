var Camera = Base.extend( {

	constructor: function( stage )
	{
		this.stage = stage;
		this.center = new PIXI.Point( 0, 0 );
	},
	follow: function( object )
	{
		this.follow_object = object;
	},
	update: function()
	{
		this.center.x = this.follow_object.sprite.position.x;
		this.center.y = this.follow_object.sprite.position.y;
		
		this.stage.position.x = -( this.center.x - Game.width / 2 );
		this.stage.position.y = -( this.center.y - Game.height / 2 );
	}
	
} );