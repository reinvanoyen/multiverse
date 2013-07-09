"use strict";

var Mineral = Item.extend( {

	constructor: function( x, y )
	{
		this.base( 'textures/mineral.png' );
		this.setPosition( x, y );
		this.name = 'mineral';
	},
	update: function()
	{
		this.frustum();
		
		if( ! this.is_in_inventory )
		{
			var distance_to_player = Game.universe.player.position.getDistance( this.position );
			
			if( distance_to_player < 400 )
			{
				this.direction = -this.position.getAngle( Game.universe.player.position );
				this.velocity = 500;
			
				if( distance_to_player < ( this.sprite.width * 2 ) )
				{
					this.addToInventory();
					Game.sounds.get( 'mineral_pickup' ).play();
				}
			}
			else
			{
				this.velocity = 0;
			}
		}
		else
		{
			this.sprite.visible = false;
		}
		
		this.move();
	}

} );