var Universe = Base.extend( {
	
	constructor: function()
	{
		this.stage = new PIXI.DisplayObjectContainer();
		
		this.age = 0;
		
		this.camera = new Camera( this.stage );
		this.sun = new Sun( 'textures/sun.png', 0, 0 );
		this.player = new Player();
		this.planets = new DrawableStorage();
		this.sounds = new SoundStorage();
		
		var theme_sound = new Sound( 'sound/music/theme.mp3', 'audio/mpeg' );
		theme_sound.loop();
		this.sounds.add( 'theme', theme_sound );
		this.sounds.get( 'theme' ).play();
		
		this.addPlanets( 200, this.stage );
		
		this.camera.follow( this.player );
		
		this.sun.draw( this.stage );
		this.player.draw( this.stage );
		
		this.bindScroll();
		
		Game.stage.addChild( this.stage );
	},
	addPlanets: function( n, stage )
	{
		for( i = 0; i <= n; i++ )
		{
			var planet = new Planet( 'textures/mars.png', this.sun, randomInt( 600, 50000 ), randomInt( -30, 30 ), randomInt( 10, 100 ) );
			
			if( i%2 === 0 )
			{
				for( j = 0; j < randomInt( 1, 10 ); j++ )
				{
					var moon = new Planet( 'textures/pluto.png', planet, randomInt( 150, 200 ), randomInt( -100, 100 ), randomInt( 10, 100 ) );
					this.planets.add( 'moon_' + i + '_' + j, moon );
				}
			}
			
			this.planets.add( 'planet_' + i, planet );
		}
		
		this.planets.drawAll( stage );
	},
	bindScroll: function()
	{
		var that = this;
		$( window ).bind( 'mousewheel', function( e )
		{
			if( e.originalEvent.wheelDelta /120 > 0 )
			{
				that.camera.setZoom( 1 );
			}
			else
			{
				that.camera.setZoom( 0.1 );
			}
		} );
	},
	update: function()
	{
		this.age++;
		
		Game.hud.updateAge( this.age++ );
		this.player.update();
		this.camera.update();
		this.planets.updateAll();
	}
	
} );