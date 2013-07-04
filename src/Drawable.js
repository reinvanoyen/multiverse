var Drawable = Base.extend( {

	constructor: function( texture_path )
	{
		this.sprite = PIXI.Sprite.fromImage( texture_path );
		
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		
		this.sprite.position.x = 0;
		this.sprite.position.y = 0;
		
		this.sprite.setInteractive( true );
		
		var that = this;
		this.sprite.click = function( data )
		{
			that.click( data );
		}
	},
	draw: function( stage )
	{
		stage.addChild( this.sprite );
	},
	click: function( data )
	{
	}

} );