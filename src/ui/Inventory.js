var Inventory = Window.extend( {

	constructor: function()
	{
		this.base();
		this.setTitle( 'Inventory' );
		this.items = new Storage();
	},
	addItem: function( item )
	{
		this.items.add( 'item_' + this.items.length() + 1, item );
		this.updateContent();
	},
	updateContent: function()
	{
		this.setContent( this.items.length() );
	}

} );