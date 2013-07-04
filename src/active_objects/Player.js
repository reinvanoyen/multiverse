var Player = Drawable.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
	},
	update: function()
	{
		if( Game.input_manager.is_key_down( 37 ) )
		{
			this.sprite.position.x = this.sprite.position.x - 6;
		}
		if( Game.input_manager.is_key_down( 39 ) )
		{
			this.sprite.position.x = this.sprite.position.x + 6;
		}
		if( Game.input_manager.is_key_down( 40 ) )
		{
			this.sprite.position.y = this.sprite.position.y + 6;
		}
		if( Game.input_manager.is_key_down( 38 ) )
		{
			this.sprite.position.y = this.sprite.position.y - 6;
		}
	}

} );