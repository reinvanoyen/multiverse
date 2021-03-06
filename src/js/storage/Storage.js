"use strict";

var Storage = Base.extend( {
	
	constructor: function()
	{
		this._objects = {};
	},
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
		for( var key in this._objects )
		{
			callback( this._objects[ key ] );
		}
	},
	length: function()
	{
		return Object.keys( this._objects ).length;
	}
	
} );