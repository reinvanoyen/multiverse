"use strict";

var Mineral = Resource.extend( {

	constructor: function( x, y )
	{
		this.base( 'textures/items/mineral.png' );
		
		this.ui_skin = 'textures/items/ui_mineral.png';
		this.setPosition( x, y );
		this.name = 'mineral';
		this.acceleration = 5;
	},
	update: function()
	{
		this.frustum();
		
		if( ! this.is_in_inventory && ! Game.ui.inventory.items.isFull() )
		{
			var distance_to_player = Game.universe.player.position.getDistance( this.position );
			
			if( distance_to_player < 300 )
			{
				this.direction = -this.position.getAngle( Game.universe.player.position );
				this.accelerate( 1000 );
			
				if( distance_to_player < ( this.sprite.width * 2 ) )
				{
					this.addToInventory();
					Game.sounds.get( 'mineral_pickup' ).play();
				}
			}
			else
			{
				this.accelerate( 0 );
			}
		}
		
		this.base();
	},
	action: function()
	{
		this.base();
		alert( 'You\'re using a mineral!' );
	},
	draw: function( stage )
	{
		this.base( stage );
	}

} );