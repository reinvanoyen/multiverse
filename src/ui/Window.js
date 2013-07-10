"use strict";

var Window = Base.extend( {

	constructor: function( draggable, resizable )
	{
		var that = this;
		
		this.is_draggable = draggable;
		this.is_resizable = resizable;
		
		this.is_open = false;
		this.$window = $( '<div>' ).addClass( 'window' ).hide().appendTo( $( 'body' ) );
		this.$header = $( '<div>' ).addClass( 'window_header' ).appendTo( this.$window );
		this.$title = $( '<span>' ).appendTo( this.$header );
		this.$content = $( '<div>' ).addClass( 'window_content' ).appendTo( this.$window );
		this.$close_button = $( '<div>' ).addClass( 'window_close_button' ).appendTo( this.$header ).click( function()
		{
			that.close();
		} );
	},
	setTitle: function( title )
	{
		this.title = title;
		this.$title.text( this.title );
	},
	setContent: function( html )
	{
		this.$content.html( html );
	},
	setHeight: function( height )
	{
		this.$content.css( 'height', height );
	},
	open: function()
	{
		this.$window.show();
		this.is_open = true;
	},
	close: function()
	{
		this.$window.hide();
		this.is_open = false;
	}

} );