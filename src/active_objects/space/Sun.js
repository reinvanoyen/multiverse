var Sun = Drawable.extend( {
	
	constructor: function( texture_path, x, y )
	{
		this.base( texture_path );
	
		this.sprite.position.x = x;
		this.sprite.position.y = y;
	}
	
} );