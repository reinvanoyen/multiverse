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
				Game.sounds.muteAll();
				that.notification.setText( 'Game paused' );
				that.notification.show();
			}
			else
			{
				Game.start();
				Game.sounds.unmuteAll();
				that.notification.setText( 'Game unpaused' );
				that.notification.show();
			}
		} ) );
		
		this.actions.add( 'player', new Action( 'Player (H)', 'ui/icons/planet.png', 72, function()
		{
			Game.universe.camera.follow( Game.universe.player );
		} ) );
		
		this.actions.add( 'random_planet', new Action( 'Random planet (R)', 'ui/icons/planet.png', 82, function()
		{
			var planet = randomPlanet();
			
			Game.universe.camera.follow( planet );
			var notification = new Notification();
			notification.setText( 'Planet ' + planet.getName() );
			notification.show();
		} ) );
		
		this.actions.add( 'mute_sound', new Action( 'Mute music', 'ui/icons/planet.png', 34, function()
		{
			Game.sounds.get( 'theme' ).mute();
		} ) );
		
		// Create our actionbar
		this.actionbar = new ActionBar( this.actions );
		
		// Do some temporary shit
		var notification = new Notification();
		notification.setText( 'Dear citizens,' );
		
		var notification2 = new Notification();
		notification2.setText( 'Today I implemented waypoints' );
		
		var notification3 = new Notification();
		notification3.setText( 'It\'s not finished yet' );
		
		var notification4 = new Notification();
		notification4.setText( 'But it\'s fun already :)' );
		
		var notification5 = new Notification();
		notification5.setText( 'Here, let me set one at a random position' );
		
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
			that.waypoints.add( 'waypoint_1', waypoint );
			that.log.addLine( 'Waypoint set', 'success' );
		}, 14000 );
	},
	update: function()
	{
		this.waypoints.updateAll();
	}

} );