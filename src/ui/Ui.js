var Ui = Base.extend( {

	constructor: function()
	{
		this.bindKeys();
		this.notification = new Notification();
		this.inventory = new Inventory();
		this.top = new Top();
		this.notification.setText( 'Simple notification system initiated' );
	},
	bindKeys: function()
	{
		var that = this;
		
		// Inventory
		Game.input_manager.bindKey( 73, function()
		{
			if( that.inventory.is_open )
			{
				that.inventory.close();
			}
			else
			{
				that.inventory.open();
			}
		} );
		
		setInterval( function()
		{
			that.notification.show();
		}, 20000 );
		
	}

} );