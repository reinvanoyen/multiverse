"use strict";

var SolarSystem = Base.extend( {

	constructor: function( x, y )
	{
		this.center = new Point( x, y );
		this.sun = this.sun = new Sun( 'textures/sun.png', this.center.x, this.center.y );
		this.planets = new DrawableStorage();
		this.moons = new DrawableStorage();
		this.minerals = new DrawableStorage();
	},
	addPlanets: function( n )
	{
		for( var i = 1; i <= n; i++ )
		{
			var planet = new Planet( randomPlanetSkin(), this.sun, randomInt( 600, 5000 ), randomInt( -300, 300 ), randomInt( 10, 100 ) );
			
			if( i%2 === 0 )
			{
				for( var j = 0; j < randomInt( 1, 5 ); j++ )
				{
					var moon = new Planet( 'textures/moon.png', planet, randomInt( 150, 200 ), randomInt( -1000, 1000 ), randomInt( 10, 100 ) );
					this.moons.add( 'moon_' + i + '_' + j, moon );
				}
			}
			
			this.planets.add( 'planet_' + i, planet );
		}
	},
	addMinerals: function( n )
	{
		for( var i = 1; i <= n; i++ )
		{
			var mineral = new Mineral( randomInt( this.center.x - 10000, this.center.x + 10000 ), randomInt( this.center.y - 10000, this.center.y + 10000 ) );
			this.minerals.add( 'mineral_' + i, mineral );
		}
	},
	draw: function( stage )
	{
		this.sun.draw( stage );
		this.planets.drawAll( stage );
		this.moons.drawAll( stage );
		this.minerals.drawAll( stage );
	},
	update: function()
	{
		this.sun.update();
		this.planets.updateAll();
		this.moons.updateAll();
		this.minerals.updateAll();
	}

} );