var Game = {
	
	settings:
	{
		fps: 60
	},
	create: function()
	{
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		
		this.stage = new PIXI.Stage( 0x071621, true );
		this.renderer = PIXI.autoDetectRenderer( this.width, this.height );
		
		this.input_manager = new InputManager();
		this.universe = new Universe();
		this.hud = new Ui.Hud();
		
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
	},
	stop: function()
	{
		clearInterval( this.loopInterval );
	},
	update: function()
	{
		this.universe.update();
	},
	draw: function()
	{
		this.renderer.render( this.stage );
	}
};