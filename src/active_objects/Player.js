var Player = PhysicsObject.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
	},
	update: function()
	{
		
		if( this.velocity_x < 0 )
		{
			this.velocity_x = Math.min( this.velocity_x + 0.05, 0 );
		}
		else
		{
			this.velocity_x = Math.max( this.velocity_x - 0.05, 0 );
		}
		
		if( this.velocity_y < 0 )
		{
			this.velocity_y = Math.min( this.velocity_y + 0.05, 0 );
		}
		else
		{
			this.velocity_y = Math.max( this.velocity_y - 0.05, 0 );
		}
		
		if( Game.input_manager.is_key_down( 37 ) )
		{
			this.velocity_y = Math.max( this.velocity_y - 0.1, -15 );
			this.velocity_x = Math.max( this.velocity_x - 0.2, -15 );
		}
		if( Game.input_manager.is_key_down( 39 ) )
		{
			this.velocity_y = Math.max( this.velocity_y - 0.1, -15 );
			this.velocity_x = Math.min( this.velocity_x + 0.2, 15 );
		}
		if( Game.input_manager.is_key_down( 40 ) )
		{
			this.velocity_y = Math.min( this.velocity_y + 0.2, 15 );
		}
		if( Game.input_manager.is_key_down( 38 ) )
		{
			this.velocity_y = Math.max( this.velocity_y - 0.2, -15 );
		}
		
		this.sprite.rotation = this.velocity_x / 10;
		
		this.move();
	}

} );