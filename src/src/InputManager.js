"use strict";

var InputManager = Base.extend( {
	
	_keys_down: {},
	constructor: function()
	{
		var that = this;
		window.addEventListener( 'keydown', function( e )
		{
			that._keys_down[e.which] = true;
		} );
		window.addEventListener( 'keyup', function( e )
		{
			that._keys_down[e.which] = false;
		} );
	},
	is_key_down: function( key )
	{
		return !!this._keys_down[key];
	},
	bindKey: function( keycode, callback )
	{
		window.addEventListener( 'keydown', function( e )
		{
			if( e.which === keycode )
			{
				callback();
			}
		} );
	}
	
} );