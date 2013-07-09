var Player = Drawable.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
		this.health = 100;
		this.velocity = 0;
		this.exhaust_flume = new ExhaustFlume();
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
	setRotation: function( radian )
	{
		this.sprite.rotation = radian;
		this.exhaust_flume.direction = radian - Math.PI;
	},
	moveForward: function()
	{
		this.velocity = Math.min( this.velocity + 20, 1000 );
		this.exhaust_flume.start();
		Game.sounds.get( 'booster' ).play();
	},
	moveBackward: function()
	{
		this.velocity = Math.max( this.velocity - 10, -500 );
	},
	turnRight: function( move_forward )
	{
		this.setRotation( this.sprite.rotation + 1 * Game.delta );
		if( move_forward )
		{
			this.easeVelocityTo( 500 );
		}
	},
	turnLeft: function( move_forward )
	{
		this.setRotation( this.sprite.rotation - 1 * Game.delta );
		if( move_forward )
		{
			this.easeVelocityTo( 500 );
		}
	},
	move: function()
	{
		var x = this.position.x + ( this.velocity * Game.delta ) * Math.cos( ( this.sprite.rotation ) );
		var y = this.position.y + ( this.velocity * Game.delta ) * Math.sin( ( this.sprite.rotation ) );
		this.exhaust_flume.setPosition( x, y );
		this.setPosition( x, y );
	},
	easeVelocityTo: function( n )
	{
		if( this.velocity > n )
		{
			this.velocity = Math.max( this.velocity - 5, n );
		}
		else if( this.velocity < n )
		{
			this.velocity = Math.min( this.velocity + 5, n );
		}
	},
	update: function()
	{
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
					if( ! Game.input_manager.is_key_down( 40 ) && ! Game.input_manager.is_key_down( 38 ) && ! Game.input_manager.is_key_down( 39 ) )
					{
						this.turnLeft( true );
					}
					else
					{
						this.turnLeft( false );
					}
				}
				if( Game.input_manager.is_key_down( 39 ) )
				{
					// Right
					if( ! Game.input_manager.is_key_down( 40 ) && ! Game.input_manager.is_key_down( 38 ) && ! Game.input_manager.is_key_down( 37 ) )
					{
						this.turnRight( true );
					}
					else
					{
						this.turnRight( false );
					}
				}
				
				if( Game.input_manager.is_key_down( 40 ) )
				{
					// Down
					this.moveBackward();
				}
				
				if( Game.input_manager.is_key_down( 38 ) )
				{
					// Up
					this.moveForward();
				}
			}
			else
			{
				this.exhaust_flume.stop();
				this.easeVelocityTo( 0 );
				Game.sounds.get( 'booster' ).stop();
			}
		}
		
		this.move();
		this.exhaust_flume.update();
	},
	draw: function( stage )
	{
		this.exhaust_flume.draw( stage );
		stage.addChild( this.sprite );
	}

} );