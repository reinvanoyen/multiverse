var Player = PhysicsObject.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
		this.health = 100;
	},
	hurt: function( n )
	{
		this.setHealth( this.health - n );
		Game.ui.log.addLine( '-' + n + ' health', 'warning' );
	},
	heal: function( n )
	{
		this.setHealth( this.health + n );
		Game.ui.log.addLine( '-' + n + ' health', 'success' );
	},
	setHealth: function( n )
	{
		if( this.health <= 0 )
		{
			Game.ui.log.addLine( 'You are dead', 'error' );
			Game.ui.notification.setText( 'You are dead' );
			Game.ui.notification.show();
		}
		else
		{
			this.health = n;
			Game.ui.healthbar.setValue( this.health );
		}
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
		
		if( this.health > 0 )
		{
			if(
				Game.input_manager.is_key_down( 37 )
				|| Game.input_manager.is_key_down( 38 )
				|| Game.input_manager.is_key_down( 39 )
				|| Game.input_manager.is_key_down( 40 )
			)
			{
				if( Game.input_manager.is_key_down( 37 ) )
				{
					this.velocity_y = Math.max( this.velocity_y - 0.1, -15 );
					this.velocity_x = Math.max( this.velocity_x - 0.2, -15 );
					Game.sounds.get( 'booster' ).play();
				}
				if( Game.input_manager.is_key_down( 39 ) )
				{
					this.velocity_y = Math.max( this.velocity_y - 0.1, -15 );
					this.velocity_x = Math.min( this.velocity_x + 0.2, 15 );
					Game.sounds.get( 'booster' ).play();
				}
				
				if( Game.input_manager.is_key_down( 40 ) )
				{
					this.velocity_y = Math.min( this.velocity_y + 0.2, 15 );
					Game.sounds.get( 'booster' ).play();
				}
				
				if( Game.input_manager.is_key_down( 38 ) )
				{
					this.velocity_y = Math.max( this.velocity_y - 0.3, -15 );
					Game.sounds.get( 'booster' ).play();
				}
			}
			else
			{
				Game.sounds.get( 'booster' ).stop();
			}
		}
			
		this.sprite.rotation = this.velocity_x / 10;
		
		this.move();
	}

} );