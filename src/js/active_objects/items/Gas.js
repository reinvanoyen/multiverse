"use strict";

var Gas = Resource.extend( {

	constructor: function( x, y )
	{
		this.base( 'textures/items/gas.png' );
		
		this.ui_skin = 'textures/items/ui_gas.png';
		this.setPosition( x, y );
		this.name = 'gas';
	},
	update: function()
	{
		this.frustum();
		
		if( ! this.is_in_inventory && ! Game.ui.inventory.items.isFull() )
		{
			var distance_to_player = Game.universe.player.position.getDistance( this.position );
			
			if( distance_to_player < 600 )
			{
				this.direction = -this.position.getAngle( Game.universe.player.position );
				this.accelerate( 800 );
			
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
		alert( 'You\'re using Gas!' );
	}

} );