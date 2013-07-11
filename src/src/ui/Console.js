"use strict";

var Console = Window.extend( {

	constructor: function()
	{
		this.base();
		this.setTitle( 'Developer console' );
		
		var that = this;
		this.$form = $( '<form>' ).submit( function( e ) {
			that.onSubmit( e, that );
		} );
		
		this.$textarea = $( '<textarea>' ).appendTo( this.$form );
		this.$button = $( '<button>' ).appendTo( this.$form ).text( 'Run' );
		
		this.setContent( this.$form );
	},
	onSubmit: function( e, that )
	{
		eval( that.$textarea.val() );
		e.preventDefault();
	}

} );