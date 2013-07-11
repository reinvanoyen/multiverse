"use strict";

var Item = Movable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		
		this.world_skin = texture_path;
		this.ui_skin = texture_path;
		
		this.name = 'Item';
		this.is_in_inventory = false;
	},
	addToInventory: function()
	{
		if( ! this.is_in_inventory )
		{
			Game.ui.inventory.addItem( this );
		}
	},
	action: function()
	{
	},
	update: function()
	{
		if( this.is_in_inventory )
		{
			this.sprite.visible = false;
		}
		else
		{
			this.base();
		}
	}

} );