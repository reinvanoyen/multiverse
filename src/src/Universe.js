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
		this.addSolarSystems( 6 );
		
		// Follow player
		this.camera.follow( this.player );
		
		// Add some allies
		this.ally = new Ally();
		this.ally.setTarget( this.player );
		this.ally.setPosition( 400, -400 );
		this.ally.setState( 'following' );
		
		// Add some allies
		this.ally2 = new Ally();
		this.ally2.setTarget( this.ally );
		this.ally2.setPosition( 600, -600 );
		this.ally2.setState( 'following' );
		
		this.debris1 = new Layer( 'textures/layers/clouds.png', 0.9, this.stage );
		this.debris2 = new Layer( 'textures/layers/clouds.png', 1, this.stage );
		this.debris3 = new Layer( 'textures/layers/clouds.png', 1.2, this.stage );
		
		// Draw
		this.debris1.draw( Game.stage );
		this.debris2.draw( Game.stage );
		this.solar_systems.drawAll( this.stage );
		this.ally.draw( this.stage );
		this.ally2.draw( this.stage );
		this.player.draw( this.stage );
		Game.stage.addChild( this.stage );
		this.debris3.draw( Game.stage );
	},
	addSolarSystems: function( n )
	{
		for( var i = 1; i <= n; i++ )
		{
			var solar = new SolarSystem( randomInt( -10000, 10000 ), randomInt( -10000, 10000 ) );
			solar.addPlanets( 15 );
			solar.addMinerals( 200 );
			solar.addGas( 100 );
			this.solar_systems.add( 'solar_' + i, solar );
		}
	},
	update: function()
	{
		this.age++;
		this.debris1.update();
		this.debris2.update();
		this.debris3.update();
		this.solar_systems.updateAll();
		this.ally.update();
		this.ally2.update();
		this.player.update();
		this.camera.update();
	}
	
} );