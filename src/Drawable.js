"use strict";

var Drawable = Base.extend( {

	constructor: function( texture_path )
	{
		this.sprite = PIXI.Sprite.fromImage( texture_path );
		
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		
		this.sprite.position.x = 0;
		this.sprite.position.y = 0;
		
		this.position = new Point( 0, 0 );
		
		this.sprite.setInteractive( true );
	},
	setPosition: function( x, y )
	{
		this.sprite.position.x = x;
		this.sprite.position.y = y;
		this.position.x = x;
		this.position.y = y;
	},
	setRotation: function( radian )
	{
		this.sprite.rotation = radian;
	},
	draw: function( stage )
	{
		stage.addChild( this.sprite );
	},
	getWindowPosition: function()
	{
		var x = Game.universe.stage.position.x + this.sprite.position.x;
		var y = Game.universe.stage.position.y + this.sprite.position.y;
		
		return new PIXI.Point( x, y )
	},
	frustum: function()
	{
		if( Game.universe.camera.center.getDistance( this.position ) > 2000 )
		{
			this.sprite.visible = false;
		}
		else
		{
			this.sprite.visible = true;
		}
	}

} );