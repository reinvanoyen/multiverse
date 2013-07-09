"use strict";

var Game = {
	
	create: function( callback )
	{
		this.state = 'initialising';
		
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		
		this.stage = new PIXI.Stage( 0x071621 );
		this.renderer = PIXI.autoDetectRenderer( this.width, this.height );
		
		// Delta time
		this.delta = 0;
		
		// Create our needed objects
		this.input_manager = new InputManager();
		this.ui = new Ui();
		this.sounds = new SoundStorage();
		this.universe = new Universe();
		
		this.loadSounds();
		
		// Append our view to the body
		document.body.appendChild( this.renderer.view );
		
		// Call callback
		callback();
	},
	start: function()
	{
		var that = this;
		
		this.sounds.unmuteAll();
		this.state = 'playing';

		var end_time = Date.now();
		
		this.loopInterval = setInterval( function()
		{
			var start_time = Date.now();
			that.delta = ( start_time - end_time ) / 1000;
			that.update();
			end_time = start_time;
		}, 1 );
	},
	stop: function()
	{
		this.state = 'paused';
		this.sounds.muteAll();
		clearInterval( this.loopInterval );
	},
	update: function()
	{
		// Update objects
		this.universe.update();
		this.ui.update();
		
		// Render stage
		this.renderer.render( this.stage );
	},
	loadSounds: function()
	{
		// Sound
		var theme_sound = new Sound( 'sound/music/stringpad1.mp3', 'audio/mpeg' );
		theme_sound.loop();
		this.sounds.add( 'theme', theme_sound );
		this.sounds.add( 'sidebooster', new Sound( 'sound/ship/sidebooster.mp3', 'audio/mpeg' ) );
		this.sounds.add( 'booster', new Sound( 'sound/ship/booster.mp3', 'audio/mpeg' ) );
		this.sounds.add( 'action', new Sound( 'sound/ui/action.mp3', 'audio/mpeg' ) );
		this.sounds.add( 'mineral_pickup', new Sound( 'sound/ship/mineral_pickup.mp3', 'audio/mpeg' ) );
		this.sounds.add( 'waypoint_set', new Sound( 'sound/ui/waypoint_set.mp3', 'audio/mpeg' ) );
		this.sounds.get( 'theme' ).play();
	}
};
