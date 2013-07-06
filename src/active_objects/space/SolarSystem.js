var SolarSystem = Base.extend( {

	constructor: function( x, y )
	{
		this.sun = this.sun = new Sun( 'textures/sun.png', x, y );
		this.planets = new DrawableStorage();
	},
	addPlanets: function( n )
	{
		for( var i = 1; i <= n; i++ )
		{
			var planet = new Planet( randomPlanetSkin(), this.sun, randomInt( 600, 5000 ), randomInt( -30, 30 ), randomInt( 10, 100 ) );
			
			/*
			if( i%2 === 0 )
			{
				for( var j = 0; j < randomInt( 1, 5 ); j++ )
				{
					var moon = new Planet( 'textures/moon.png', planet, randomInt( 150, 200 ), randomInt( -100, 100 ), randomInt( 10, 100 ) );
					this.planets.add( 'moon_' + i + '_' + j, moon );
				}
			}
			*/
			
			this.planets.add( 'planet_' + i, planet );
		}
	},
	draw: function( stage )
	{
		this.sun.draw( stage );
		this.planets.drawAll( stage );
	},
	update: function()
	{
		this.planets.updateAll();
	}

} );