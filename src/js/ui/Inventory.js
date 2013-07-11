"use strict";

var Inventory = Window.extend( {

	constructor: function()
	{
		this.base( true, true );
		this.setHeight( 300 );
		this.setTitle( 'Inventory' );
		this.items = new ItemGrid( 80, true );
		this.setContent( this.items.$container );
	},
	addItem: function( item )
	{
		if( this.items.isFull() )
		{
			Game.ui.log.addLine( 'Your inventory is full', 'error' );
		}
		else
		{
			item.is_in_inventory = true;
			this.items.add( item );
			Game.ui.log.addLine( 'Picked up ' + item.name, 'success' );
		}
	}

} );