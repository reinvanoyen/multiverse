var Sun = Drawable.extend( {
	
	constructor: function( texture_path, x, y )
	{
		this.base( texture_path );
	
		this.setPosition( x, y );
	}
	
} );