var Ui = Base.extend( {

	constructor: function()
	{
		// Create actions
		this.actions = new ActionStorage();
		
		// Create our UI objects
		this.inventory = new Inventory();
		this.top = new Top();
		
		this.notification = new Notification();
		this.notification.setText( 'Hello! This is a testnotification' );
		
		var that = this;
		
		// Assign actions
		this.actions.add( 'inventory', new Action( 'Inventory (i)', 73, function()
		{
			if( that.inventory.is_open )
			{
				that.inventory.close();
			}
			else
			{
				that.inventory.open();
			}
		} ) );
		
		this.actions.add( 'notification_test', new Action( 'Test notification (m)', 77, function()
		{
			that.notification.show();
		} ) )
		
		this.actions.add( 'alert_test', new Action( 'Message from rein (e)', 69, function()
		{
			alert( 'Rein calling from space. Actionbar is huge success. Flexibility to add wicked insane crazy cool actions! Over and out.' );
		} ) )
		
		// Create our actionbar
		this.actionbar = new ActionBar( this.actions );
	}

} );