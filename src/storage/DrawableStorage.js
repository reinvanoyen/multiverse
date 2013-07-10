"use strict";

var DrawableStorage = Storage.extend( {

	updateAll: function()
	{
		for( var key in this._objects )
		{
			this._objects[ key ].update();
		}
	},
	drawAll: function( stage )
	{
		for( var key in this._objects )
		{
			this._objects[ key ].draw( stage );
		}
	}

} );