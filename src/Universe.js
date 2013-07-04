var Universe = Base.extend( {
	
	constructor: function()
	{
		this.stage = new PIXI.DisplayObjectContainer();
		this.camera = new Camera( this.stage );
		this.sun = new Sun( 'textures/sun.png', 0, 0 );
		this.player = new Player();
		this.planets = new DrawableStorage();
		
		this.addPlanets( 100 );
		
		this.camera.follow( this.player );
		
		this.player.draw( this.stage );
		this.sun.draw( this.stage );
		this.planets.drawAll( this.stage );
		
		Game.stage.addChild( this.stage );
	},
	addPlanets: function( n )
	{
		for( i = 0; i <= n; i++ )
		{
			var planet = new Planet( 'textures/mars.png', this.sun, randomInt( 300, 20000 ), randomInt( 10, 50 ), randomInt( 10, 100 ) );
			
			if( i%2 === 0 )
			{
				for( j = 0; j < randomInt( 1, 5 ); j++ )
				{
					var moon = new Planet( 'textures/pluto.png', planet, randomInt( 150, 200 ), randomInt( 200, 600 ), randomInt( 10, 100 ) );
					this.planets.add( 'moon_' + i + '_' + j, moon );
				}
			}
			
			this.planets.add( 'planet_' + i, planet );
		}
	},
	update: function()
	{
		this.player.update();
		this.camera.update();
		this.planets.updateAll();
	}
	
} );