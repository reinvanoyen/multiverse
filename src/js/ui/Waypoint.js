"use strict";

var Waypoint = Drawable.extend( {

	constructor: function()
	{
		this.base( 'textures/waypoint.png' );
		this.arrow = new Drawable( 'textures/waypoint_arrow.png' );
		this.arrow.sprite.anchor.y = -7;
		this.arrow.draw( Game.stage );
		this.draw( Game.universe.stage );
		Game.sounds.get( 'waypoint_set' ).play();
	},
	linkToObject: function( object )
	{
		this.linked_object = object;
	},
	update: function()
	{
		if( this.linked_object )
		{
			this.setPosition( this.linked_object.position.x, this.linked_object.position.y );
		}
		
		var angle = Game.universe.camera.follow_object.position.getAngle( this.position );
		var distance = Game.universe.camera.follow_object.position.getDistance( this.position );
		
		if( distance < 500 )
		{
			this.arrow.sprite.visible = false;
		}
		else
		{
			this.arrow.sprite.visible = true;
			this.arrow.setPosition( Game.width / 2, Game.height / 2 );
		
			this.sprite.scale.x = 1 / Game.universe.camera.zoom;
			this.sprite.scale.y = 1 / Game.universe.camera.zoom;
		
			this.arrow.sprite.rotation = -angle;
		}
	}

} );