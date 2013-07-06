var Ui = Base.extend( {

	constructor: function()
	{
		// Create actions
		this.actions = new ActionStorage();
		
		// Create our UI objects
		this.inventory = new Inventory();
		this.top = new Top();
		
		this.healthbar = new StatBar();
		this.healthbar.$container.appendTo( $( 'body' ) );
		
		this.notification = new Notification();
		
		this.log = new Log();
		this.log.addLine( 'Start exploring the universe!', 'success' );
		
		var that = this;
		
		// Assign actions
		this.actions.add( 'inventory', new Action( 'Inventory (I)', 'ui/icons/inventory.png', 73, function()
		{
			if( that.inventory.is_open )
			{
				that.inventory.close();
				that.log.addLine( 'Closed inventory', 'neutral' );
			}
			else
			{
				that.inventory.open();
				that.log.addLine( 'Opened inventory', 'neutral' );
			}
		} ) );
		
		this.actions.add( 'log', new Action( 'Log (L)', 'ui/icons/inventory.png', 76, function()
		{
			if( that.log.is_visible )
			{
				that.log.hide();
				that.log.addLine( 'Closed log', 'neutral' );
			}
			else
			{
				that.log.show();
				that.log.addLine( 'Opened log', 'neutral' );
			}
		} ) );
		
		this.actions.add( 'alert', new Action( 'Message from rein (E)', 'ui/icons/inventory.png', 69, function()
		{
			new Alert( 'Rein calling from space', 'Welwelwel, een alertje. Nu nog een OK knopke om te sluiten en wa styling.' );
			that.log.addLine( 'Opened message from Rein', 'neutral' );
		} ) );
		
		this.actions.add( 'pause', new Action( 'Pause (P)', 'ui/icons/pause.png', 80, function()
		{
			if( Game.state === 'playing' )
			{
				Game.stop();
				that.notification.setText( 'Game paused' );
				that.notification.show();
			}
			else
			{
				Game.start();
				that.notification.setText( 'Game unpaused' );
				that.notification.show();
			}
		} ) );
		
		// Create our actionbar
		this.actionbar = new ActionBar( this.actions );
		
		// Do some temporary shit
		var notification = new Notification();
		notification.setText( 'Dear citizens,' );
		
		var notification2 = new Notification();
		notification2.setText( 'Don\'t mind the framedrops.' );
		
		var notification3 = new Notification();
		notification3.setText( 'I\'ll fix them later ;)' );
		
		var notification4 = new Notification();
		notification4.setText( 'New feature: press L for the game log' );
		
		var notification5 = new Notification();
		notification5.setText( 'Zoom out using scroll!' );
		
		var notification6 = new Notification();
		notification6.setText( 'Also, this universe has only one song!' );
		
		var notification7 = new Notification();
		notification7.setText( 'Prepare yourself' );
		
		var notification8 = new Notification();
		notification8.setText( 'I\'ll take away some health now' );
		
		var notification9 = new Notification();
		notification9.setText( 'One' );
		
		var notification10 = new Notification();
		notification10.setText( 'Two' );
		
		var notification11 = new Notification();
		notification11.setText( 'Three' );
		
		setTimeout( function()
		{
			notification.show();
		}, 1000 );
		
		setTimeout( function()
		{
			notification2.show();
		}, 3000 );
		
		setTimeout( function()
		{
			notification3.show();
		}, 5000 );
		
		setTimeout( function()
		{
			notification4.show();
		}, 10000 );
		
		setTimeout( function()
		{
			notification5.show();
		}, 13000 );
		
		setTimeout( function()
		{
			notification6.show();
		}, 20000 );
		
		setTimeout( function()
		{
			notification7.show();
		}, 23000 );
		
		setTimeout( function()
		{
			notification8.show();
		}, 30000 );
		
		setTimeout( function()
		{
			notification9.show();
		}, 33000 );
		
		setTimeout( function()
		{
			notification10.show();
		}, 35000 );
		
		setTimeout( function()
		{
			notification11.show();
			Game.universe.player.setHealth( 67 );
		}, 37000 );
		
	}

} );