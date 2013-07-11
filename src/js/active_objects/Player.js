"use strict";

var Player = Movable.extend( {

	constructor: function()
	{
		this.base( 'textures/player.png' );
		this.health = 100;
		this.velocity = 0;
		this.exhaust_flume = new ExhaustFlume();
		this.exhaust_flame = new ExhaustFlame();
		this.dmg_smoke = new DamageSmoke();
		this.exhaust_flame.start();
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
		
		if( this.health < 40 )
		{
			this.dmg_smoke.start();
		}
		else
		{
			this.dmg_smoke.stop();
		}
	},
	isDead: function()
	{
		return ( this.health <= 0 );
	},
	setRotation: function( radian )
	{
		this.sprite.rotation = radian;
		this.direction = radian;
		this.exhaust_flume.direction = radian - Math.PI;
		this.exhaust_flame.direction = radian - Math.PI;
		this.dmg_smoke.direction = radian - Math.PI;
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
			this.accelerate( 500 );
		}
	},
	turnLeft: function( move_forward )
	{
		this.setRotation( this.sprite.rotation - 1 * Game.delta );
		if( move_forward )
		{
			this.accelerate( 500 );
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
				this.accelerate( 0 );
				Game.sounds.get( 'booster' ).stop();
			}
		}
		
		this.dmg_smoke.setPosition( this.position.x, this.position.y );
		this.exhaust_flume.setPosition( this.position.x, this.position.y );
		this.exhaust_flame.setPosition( this.position.x, this.position.y );
		this.exhaust_flume.update();
		this.exhaust_flame.update();
		this.dmg_smoke.update();
		this.base();
	},
	draw: function( stage )
	{
		this.exhaust_flume.draw( stage );
		this.exhaust_flame.draw( stage );
		this.base( stage );
		this.dmg_smoke.draw( stage );
	}

} );