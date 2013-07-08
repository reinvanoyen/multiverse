var Game = {
	
	settings:
	{
		fps: 60
	},
	create: function()
	{
		this.state = 'initialising';
		
		$( 'body' ).attr( 'oncontextmenu', 'return false;' );
		
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		
		this.stage = new PIXI.Stage( 0x071621, true );
		this.renderer = PIXI.autoDetectRenderer( this.width, this.height );
		
		this.input_manager = new InputManager();
		this.universe = new Universe();
		this.ui = new Ui();
		
		this.loadSounds();
		
		document.body.appendChild( this.renderer.view );
	},
	start: function()
	{
		var that = this;
		this.loopInterval = setInterval( function()
		{
			that.update();
			that.draw();
		}, 1000 / this.settings.fps );
		this.state = 'playing';
	},
	stop: function()
	{
		this.state = 'paused';
		clearInterval( this.loopInterval );
	},
	update: function()
	{
		this.universe.update();
		this.ui.update();
	},
	draw: function()
	{
		this.renderer.render( this.stage );
	},
	loadSounds: function()
	{
		this.sounds = new SoundStorage();
		
		// Sound
		var theme_sound = new Sound( 'sound/music/stringpad1.mp3', 'audio/mpeg' );
		theme_sound.loop();
		this.sounds.add( 'theme', theme_sound );
		this.sounds.add( 'sidethruster', new Sound( 'sound/ship/sidethruster1.wav', 'audio/wav' ) );
		this.sounds.add( 'booster', new Sound( 'sound/ship/booster1.wav', 'audio/wav' ) );
		this.sounds.add( 'action', new Sound( 'sound/ui/action.mp3', 'audio/mpeg' ) );
		this.sounds.add( 'mineral_pickup', new Sound( 'sound/ship/mineral_pickup.mp3', 'audio/mpeg' ) );
		this.sounds.add( 'waypoint_set', new Sound( 'sound/ui/waypoint_set.mp3', 'audio/mpeg' ) );
		this.sounds.get( 'theme' ).play();
	}
};
