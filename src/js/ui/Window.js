"use strict";

var Window = Base.extend( {

	constructor: function( draggable, resizable )
	{
		var that = this;
		
		this.is_draggable = draggable;
		this.is_resizable = resizable;
		
		this.is_open = false;
		
		this.$window = $( '<div>' ).addClass( 'window' ).hide().appendTo( Main.$body );

		this.$header = $( '<div>' ).addClass( 'window_header' ).appendTo( this.$window );
		this.$title = $( '<span>' ).appendTo( this.$header );
		
		this.$container = $( '<div>' ).addClass( 'window_container' ).appendTo( this.$window );
		this.$content = $( '<div>' ).addClass( 'window_content' ).appendTo( this.$container );
		
		if( this.is_resizable )
		{
			this.$window.addClass( 'resizable' );
		}
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
		this.focus();
		this.$window.show();
		this.is_open = true;
	},
	close: function()
	{
		this.$window.hide();
		this.is_open = false;
	},
	focus: function()
	{
		this.$window.removeClass( 'unfocused' ).addClass( 'focused' );
	},
	unfocus: function()
	{
		this.$window.removeClass( 'focused' ).addClass( 'unfocused' );
	}

} );