var Weapon = Drawable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.damage = 10;
	}

} );