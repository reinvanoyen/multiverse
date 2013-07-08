var Item = Drawable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.name = 'Item';
		this.is_in_inventory = false;
	},
	addToInventory: function()
	{
		this.is_in_inventory = true;
		Game.ui.inventory.addItem( this );
		Game.ui.log.addLine( 'Picked up ' + this.name, 'success' );
	}

} );