"use strict";

var Log = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).attr( 'id', 'log' ).hide().appendTo( Main.$body );
		
		this.line_count = 0;
		
		this.type_colors = {
			success: '#00ff00',
			neutral: '#bbb',
			error: '#ff0000',
			warning: '#ffa500',
			notification: '#fff'
		};
		
		this.is_visible = false;
	},
	addLine: function( text, type )
	{
		var current_time = new Date();
		var hours = current_time.getHours();
		var minutes = current_time.getMinutes();
		
		this.line_count++;
		
		if( this.line_count > 10 )
		{
			this.$container.children( $( 'span' ) ).first().remove();
			this.line_count--;
		}
		var $line = $( '<span>' ).text( '[' + hours + ':' + minutes + '] ' + text ).css( { color: this.type_colors[ type ] } ).appendTo( this.$container );
	},
	show: function()
	{
		this.$container.show();
		this.is_visible = true;
	},
	hide: function()
	{
		this.$container.hide();
		this.is_visible = false;
	}

} );