"use strict";

var Action = Base.extend( {

	constructor: function( name, icon_path, keycode, action )
	{
		this.name = name;
		this.icon_path = icon_path;
		this.keycode = keycode;
		this.action = action;
		
		this.tooltip = new Tooltip();
		this.tooltip.addLine( name );
		
		this.$container = $( '<div>' ).addClass( 'action' ).css( {
			'background-image' : 'url( '+ this.icon_path + ' )'
		} );
		
		this.bindClick();
		this.bindKey();
		this.bindHover();
	},
	bindKey: function()
	{
		var that = this;
		Game.input_manager.bindKey( this.keycode, function()
		{
			that.performAction( that.action )
		} );
	},
	bindClick: function()
	{
		var that = this;
		this.$container.click( function() {
			that.performAction( that.action )
		} );
	},
	bindHover: function()
	{
		var that = this;
		this.$container.hover( function( e ) {
			that.tooltip.setPosition( e.pageX, e.pageY );
			that.tooltip.show();
		}, function()
		{
			that.tooltip.hide();
		} );
	},
	performAction: function( action )
	{
		Game.sounds.get( 'action' ).play();
		action();
	}

} );