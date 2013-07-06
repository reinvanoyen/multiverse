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
	},
	draw: function()
	{
		this.renderer.render( this.stage );
	}
};