var ItemGridSlot = Base.extend( {

	constructor: function( item_grid )
	{
		this.item_grid = item_grid;
		
		this.$container = $( '<li>' ).addClass( 'slot' );
		
		this.is_used = false;
		this.item = null;
	},
	addItem: function( item )
	{
		if( this.item === null )
		{
			var that = this;
			this.item = item;
			
			this.$item = $( '<img>' ).attr( 'src', item.ui_skin ).appendTo( this.$container );
			
			that.is_used = true;
		}
	},
	removeItem: function()
	{
		if( this.item )
		{
			this.item = null;
			this.$item.remove();
			this.is_used = false;
		}
	}
	
} );