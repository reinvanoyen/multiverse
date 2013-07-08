var Player = Drawable.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
		this.health = 100;
		this.velocity = 5;
		
		this.exhaust_flume = new ParticleEmitter();
		this.exhaust_flume.addParticles( 30 );
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
		this.exhaust_flume.setDirection( radian );
	},
	moveForward: function()
	{
		this.velocity = Math.min( this.velocity + 0.3, 13 );
	},
	moveBackward: function()
	{
		this.velocity = Math.max( this.velocity - 0.1, -5 );
	},
	turnRight: function( move_forward )
	{
		this.setRotation( this.sprite.rotation + 0.01 );
		if( move_forward )
		{
			this.easeVelocityTo( 4 );
		}
	},
	turnLeft: function( move_forward )
	{
		this.setRotation( this.sprite.rotation - 0.01 );
		if( move_forward )
		{
			this.easeVelocityTo( 4 );
		}
	},
	move: function()
	{
		var x = this.position.x + this.velocity * Math.cos( ( this.sprite.rotation - 90 * ( Math.PI/180 ) ) );
		var y = this.position.y + this.velocity * Math.sin( ( this.sprite.rotation - 90 * ( Math.PI/180 ) ) );
		this.setPosition( x, y );
	},
	easeVelocityTo: function( n )
	{
		if( this.velocity > n )
		{
			this.velocity = Math.max( this.velocity - 0.03, n );
		}
		else if( this.velocity < n )
		{
			this.velocity = Math.min( this.velocity + 0.03, n );
		}
	},
	update: function()
	{
		this.exhaust_flume.setPosition( this.position.x, this.position.y );
		this.exhaust_flume.update();
		
		if( ! this.isDead() )
		{
			if(
				Game.input_manager.is_key_down( 37 )
				|| Game.input_manager.is_key_down( 38 )
				|| Game.input_manager.is_key_down( 39 )
				|| Game.input_manager.is_key_down( 40 )
			)
			{
				this.exhaust_flume.start();
							
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
					Game.sounds.get( 'booster' ).play();
					Game.sounds.get( 'sidebooster' ).play();
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
					Game.sounds.get( 'booster' ).play();
					Game.sounds.get( 'sidebooster' ).play();
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
				this.easeVelocityTo( 0 );
				Game.sounds.get( 'booster' ).stop();
				this.exhaust_flume.stop();
			}
		}
		
		this.move();
	},
	draw: function( stage )
	{
		stage.addChild( this.sprite );
		this.exhaust_flume.draw( stage );
	}

} );