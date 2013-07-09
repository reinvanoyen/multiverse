"use strict";

var MainMenu = Base.extend( {

	constructor: function()
	{
		this.is_open = true;
		this.title = 'Main menu';
		this.$container = $( '<div>' ).attr( 'id', 'main_menu' ).appendTo( $( 'body' ) );
		this.$item_list = $( '<ul>' ).attr( 'id', 'main_menu_items' ).appendTo( this.$container );
		this.$title = $( '<div>' ).attr( 'id', 'title' ).text( this.title ).appendTo( this.$container );
	},
	addItem: function( name, action )
	{
		var $button = $( '<li>' ).addClass( 'main_menu_button' ).text( name ).appendTo( this.$item_list ).click( function()
		{
			action();
		} );
	},
	open: function()
	{
		this.$container.show();
		this.is_open = true;
	},
	close: function()
	{
		this.$container.hide();
		this.is_open = false;
	},
	setTitle: function( title )
	{
		this.title = title;
		this.$title.text( this.title );
	}
} );