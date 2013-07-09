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
		
		// Fire test
		this.fire = new Fire();
		this.fire.setPosition( 100, 100 );
		this.fire.start();
		this.fire.draw( this.stage );
		
		this.cloud = new Cloud();
		this.cloud.setPosition( -100, -100 );
		this.cloud.start();
		this.cloud.draw( this.stage );
		
		this.spark = new Spark();
		this.spark.setPosition( -100, 100 );
		this.spark.start();
		this.spark.draw( this.stage );
		
		// Draw
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
			solar.addMinerals( 150 );
			this.solar_systems.add( 'solar_' + i, solar );
		}
	},
	update: function()
	{
		this.age++;
		this.fire.update();
		this.cloud.update();
		this.spark.update();
		this.solar_systems.updateAll();
		this.player.update();
		this.camera.update();
	}
	
} );