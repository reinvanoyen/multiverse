var ItemGrid = Base.extend( {

	constructor: function( capacity, is_managable )
	{
		this.is_managable = is_managable;
		this.capacity = 0;
		this.free_slots = 0;
		this.slots = [];
		this.$container = $( '<ul>' ).attr( 'class', 'item_grid' );
		
		if( this.is_managable )
		{
			var that = this;
			this.context_menu = new ContextMenu();
			
			this.context_menu.addAction( 'Destroy', function( slot )
			{
				var confirm = window.confirm( 'Are you sure?' );
				if( confirm )
				{
					that.clearSlot( slot );
				}
			} );
		}
		
		this.addSlots( capacity );
	},
	add: function( item )
	{
		var slot = this.getFirstFreeSlot();
		
		if( slot )
		{
			var that = this;
			slot.addItem( item );
			
			if( this.is_managable )
			{
				slot.$item.bind( 'contextmenu', function( e )
				{
					that.context_menu.target = slot;
					that.context_menu.setPosition( e.pageX, e.pageY );
					that.context_menu.show();
					e.preventDefault();
				} );
			}
			
			this.free_slots = this.free_slots - 1;
		}
	},
	clearSlot: function( slot )
	{
		if( slot.is_used )
		{
			slot.removeItem();
			this.free_slots++;
		}
	},
	getFirstFreeSlot: function()
	{
		if( ! this.isFull() )
		{
			for( var i = 0; i < this.slots.length; i++ )
			{
				if( this.slots[ i ] )
				{
					if( ! this.slots[ i ].is_used )
					{
						return this.slots[ i ];
					}
				}
			}
		}
		return false;
	},
	isFull: function()
	{
		return ( this.free_slots <= 0 );
	},
	addSlots: function( n )
	{
		for( var i = 0; i < n; i++ )
		{
			var slot = new ItemGridSlot( this );
			this.slots.push( slot );
			slot.$container.appendTo( this.$container );
			this.capacity++;
			this.free_slots++;
		}
	}
	
} );