var Ui = Base.extend( {

	constructor: function()
	{
		// Create actions
		this.actions = new ActionStorage();
		
		this.waypoints = new DrawableStorage();
		
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
		
		this.actions.add( 'log', new Action( 'Log (L)', 'ui/icons/log.png', 76, function()
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
		
		this.actions.add( 'pause', new Action( 'Pause (P)', 'ui/icons/pause.png', 80, function()
		{
			if( Game.state === 'playing' )
			{
				Game.stop();
				Game.sounds.stopAll();
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
		
		this.actions.add( 'random_planet', new Action( 'Random planet (R)', 'ui/icons/planet.png', 82, function()
		{
			if( Game.universe.camera.follow_object !== Game.universe.player )
			{
				Game.universe.camera.follow( Game.universe.player );
			}
			else
			{
				var planet = randomPlanet();
			
				Game.universe.camera.follow( planet );
				var notification = new Notification();
				notification.setText( 'Planet ' + planet.getName() );
				notification.show();
			}
		} ) )
		
		// Create our actionbar
		this.actionbar = new ActionBar( this.actions );
		
		// Do some temporary shit
		var notification = new Notification();
		notification.setText( 'Dear citizens,' );
		
		var notification2 = new Notification();
		notification2.setText( 'Today I added waypoints' );
		
		var notification3 = new Notification();
		notification3.setText( 'It\'s not finished yet' );
		
		var notification4 = new Notification();
		notification4.setText( 'But is fun already :)' );
		
		var notification5 = new Notification();
		notification5.setText( 'Here, let me set one at a random position' );
		
		var notification6 = new Notification();
		notification6.setText( 'I\'ll take away some health now' );
		
		var notification7 = new Notification();
		notification7.setText( 'One' );
		
		var notification8 = new Notification();
		notification8.setText( 'Two' );
		
		var notification9 = new Notification();
		notification9.setText( 'Three' );
		
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
		}, 8000 );
		
		setTimeout( function()
		{
			notification5.show();
		}, 11000 );
		
		setTimeout( function()
		{
			var waypoint = new Waypoint();
			waypoint.setPosition( randomInt( -10000, 10000 ), randomInt( -10000, 10000 ) );
			waypoint.draw( Game.universe.stage );
			that.waypoints.add( 'waypoint', waypoint );
			that.log.addLine( 'Waypoint set', 'success' );
		}, 14000 );
		
		setTimeout( function()
		{
			notification6.show();
		}, 25000 );
		
		setTimeout( function()
		{
			notification7.show();
		}, 27000 );
		
		setTimeout( function()
		{
			notification8.show();
		}, 29000 );
		
		setTimeout( function()
		{
			notification9.show();
			Game.universe.player.setHealth( 67 );
		}, 31000 );
		
	},
	update: function()
	{
		this.waypoints.updateAll();
	}

} );