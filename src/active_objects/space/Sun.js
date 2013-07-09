var Sun = Drawable.extend( {
	
	constructor: function( texture_path, x, y )
	{
		this.base( texture_path );
	
		this.setPosition( x, y );
	},
	update: function()
	{
		this.frustum();
		var distance_to_player = Game.universe.player.position.getDistance( this.position );
		if( distance_to_player < ( this.sprite.width / 1.7 ) )
		{
			Game.universe.player.hurt( 0.7 );
		}
	}
	
} );