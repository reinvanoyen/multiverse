var Storage = Base.extend( {

	_objects: {},
	add: function( k, v )
	{
		if( this._objects[ k ] )
		{
			return this._objects[ k ];
		}
		this._objects[ k ] = v;
		return this._objects[ k ];
	},
	get: function( k )
	{
		if( this._objects[ k ] )
		{
			return this._objects[ k ];
		}
		return false;
	},
	each: function( callback )
	{
		for( key in this._objects )
		{
			callback( this._objects[ key ] );
		}
	}
} );