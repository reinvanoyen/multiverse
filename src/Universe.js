"use strict";

var Universe = Base.extend( {
	
	constructor: function()
	{
		this.stage = new PIXI.DisplayObjectContainer();
		this.age = 0;
		
		this.camera = new Camera( this.stage );
		this.player = new Player();
		
		// Solar systems
		this.solar_systems = new DrawableStorage();
		this.addSolarSystems( 5 );
		
		// Follow player
		this.camera.follow( this.player );
		
		// Add some allies
		this.ally = new Ally();
		this.ally.setPosition( 400, -400 );
		this.ally.follow( this.player );
		
		this.ally2 = new Ally();
		this.ally2.setPosition( 300, 300 );
		this.ally2.follow( this.ally );
		
		// Draw
		this.ally.draw( this.stage );
		this.ally2.draw( this.stage );
		this.player.draw( this.stage );
		this.solar_systems.drawAll( this.stage );
		Game.stage.addChild( this.stage );
	},
	addSolarSystems: function( n )
	{
		for( var i = 1; i <= n; i++ )
		{
			var solar = new SolarSystem( randomInt( -20000, 20000 ), randomInt( -20000, 20000 ) );
			solar.addPlanets( 15 );
			solar.addMinerals( 200 );
			solar.addGas( 100 );
			this.solar_systems.add( 'solar_' + i, solar );
		}
	},
	update: function()
	{
		this.age++;
		this.solar_systems.updateAll();
		this.ally.update();
		this.ally2.update();
		this.player.update();
		this.camera.update();
	}
	
} );