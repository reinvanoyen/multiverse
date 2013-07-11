var Layer = Base.extend( {

	constructor: function( texture_path, factor, reference )
	{
		this.texture = PIXI.Texture.fromImage( texture_path );
		
		this.factor = factor;
		this.reference = reference;
		this.container = new PIXI.TilingSprite( this.texture, Game.width, Game.height );
	},
	draw: function( stage )
	{
		stage.addChild( this.container );
	},
	update: function()
	{
		this.container.tilePosition.x = this.reference.position.x * this.factor;
		this.container.tilePosition.y = this.reference.position.y * this.factor;
	}

} );