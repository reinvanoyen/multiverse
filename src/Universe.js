var Universe = Base.extend( {
	
	constructor: function()
	{
		this.stage = new PIXI.DisplayObjectContainer();
		
		this.age = 0;
		
		this.camera = new Camera( this.stage );
		this.player = new Player();
		this.sounds = new SoundStorage();
		
		// Sound
		var theme_sound = new Sound( 'sound/music/theme.mp3', 'audio/mpeg' );
		theme_sound.loop();
		this.sounds.add( 'theme', theme_sound );
		this.sounds.add( 'sidethruster', new Sound( 'sound/ship/sidethruster1.wav', 'audio/wav' ) );
		this.sounds.add( 'booster', new Sound( 'sound/ship/booster1.wav', 'audio/wav' ) );
		this.sounds.get( 'theme' ).play();
		
		// Solar systems
		this.solar_systems = new DrawableStorage();
		this.addSolarSystems( 10 );
		
		// Scrolling
		this.bindScroll();
		
		// Set background
		var bg = PIXI.Sprite.fromImage( 'textures/background.png' );
		bg.width = Game.width;
		bg.height = Game.height;
		
		// Draw
		this.camera.follow( this.player );
		this.player.draw( this.stage );
		this.solar_systems.drawAll( this.stage );
		Game.stage.addChild( bg );
		Game.stage.addChild( this.stage );
	},
	addSolarSystems: function( n )
	{
		for( var i = 1; i <= n; i++ )
		{
			var solar = new SolarSystem( randomInt( -20000, 20000 ), randomInt( -20000, 20000 ) );
			solar.addPlanets( 15 );
			this.solar_systems.add( 'solar_' + i, solar );
		}
	},
	bindScroll: function()
	{
		var that = this;
		$( window ).bind( 'mousewheel', function( e )
		{
			if( e.originalEvent.wheelDelta /120 > 0 )
			{
				that.camera.setZoom( Math.min( that.camera.zoom + 0.05, 1 ) );
			}
			else
			{
				that.camera.setZoom( Math.max( that.camera.zoom - 0.05, 0.02) );
			}
		} );
	},
	update: function()
	{
		this.age++;
		Game.ui.top.updateAge( this.age );
		this.solar_systems.updateAll();
		this.player.update();
		this.camera.update();
	}
	
} );
