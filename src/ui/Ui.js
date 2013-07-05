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
		this.actions.add( 'inventory', new Action( 'Inventory (I)', 'ui/icons/inventory.png', 73, function()
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
		
		this.actions.add( 'notification', new Action( 'Test notification (M)', 'ui/icons/inventory.png', 77, function()
		{
			that.notification.show();
		} ) );
		
		this.actions.add( 'alert', new Action( 'Message from rein (E)', 'ui/icons/inventory.png', 69, function()
		{
			new Alert( 'Rein calling from space', 'Welwelwel, een alertje. Nu nog een OK knopke om te sluiten en wa styling.' );
		} ) );
		
		this.actions.add( 'pause', new Action( 'Pause (P)', 'ui/icons/pause.png', 80, function()
		{
			Game.stop();
			that.notification.setText( 'Game paused' );
			that.notification.show();
		} ) );
		
		// Create our actionbar
		this.actionbar = new ActionBar( this.actions );
	}

} );