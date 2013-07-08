var Player = Drawable.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
		this.health = 100;
		this.velocity = 0;
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
		if( this.isDead() )
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
	isDead: function()
	{
		return ( this.health <= 0 );
	},
	moveForward: function()
	{
		this.velocity = Math.min( this.velocity + 0.3, 13 );
	},
	moveBackward: function()
	{
		this.velocity = Math.max( this.velocity - 0.2, -5 );
	},
	move: function()
	{
		var x = this.position.x + this.velocity * Math.cos( ( this.sprite.rotation - 90 * ( Math.PI/180 ) ) );
		var y = this.position.y + this.velocity * Math.sin( ( this.sprite.rotation - 90 * ( Math.PI/180 ) ) );
		this.setPosition( x, y );
	},
	update: function()
	{
		if( this.velocity > 0 )
		{
			this.velocity = Math.max( this.velocity - 0.03, 0 );
		}
		else if( this.velocity < 0 )
		{
			this.velocity = Math.min( this.velocity + 0.03, 0 );
		}
		
		if( ! this.isDead() )
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
					// Left
					this.setRotation( this.sprite.rotation - 0.05 );
					if( ! Game.input_manager.is_key_down( 40 ) && ! Game.input_manager.is_key_down( 38 ) && ! Game.input_manager.is_key_down( 39 ) )
					{
						this.moveForward();
					}
					Game.sounds.get( 'booster' ).play();
				}
				if( Game.input_manager.is_key_down( 39 ) )
				{
					// Right
					this.setRotation( this.sprite.rotation + 0.05 );
					if( ! Game.input_manager.is_key_down( 40 ) && ! Game.input_manager.is_key_down( 38 ) && ! Game.input_manager.is_key_down( 37 ) )
					{
						this.moveForward();
					}
					Game.sounds.get( 'booster' ).play();
				}
				
				if( Game.input_manager.is_key_down( 40 ) )
				{
					// Down
					this.moveBackward();
					Game.sounds.get( 'booster' ).play();
				}
				
				if( Game.input_manager.is_key_down( 38 ) )
				{
					// Up
					this.moveForward();
					Game.sounds.get( 'booster' ).play();
				}
			}
			else
			{
				Game.sounds.get( 'booster' ).stop();
			}
		}
		
		this.move();
	}

} );