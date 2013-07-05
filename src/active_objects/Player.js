var Player = PhysicsObject.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
	},
	update: function()
	{
		console.log( this.velocity_x );
	
		this.velocity_x = this.velocity_x;
		this.velocity_y = this.velocity_y;
		
		if( Game.input_manager.is_key_down( 37 ) )
		{
			this.velocity_y = 0;
			this.velocity_x = -10;
		}
		if( Game.input_manager.is_key_down( 39 ) )
		{
			this.velocity_y = 0;
			this.velocity_x = 10;
		}
		if( Game.input_manager.is_key_down( 40 ) )
		{
			this.velocity_x = 0;
			this.velocity_y = 10;
		}
		if( Game.input_manager.is_key_down( 38 ) )
		{
			this.velocity_x = 0;
			this.velocity_y = -10;
		}
		
		this.move();
	}

} );