"use strict";

var Main = {

	create: function()
	{
		var that = this;
		
		this.$body = $( 'body' );
		
		this.main_menu = new MainMenu();
		this.main_menu.setTitle( 'Some game' );
		
		// Play
		this.main_menu.addItem( 'Play', function()
		{
			Game.create( function()
			{
				that.main_menu.close();
				Game.start();
			} );
		} );
		
		// Exit
		this.main_menu.addItem( 'Exit', function()
		{
			var prompt = window.confirm( 'Are you sure?' );
			if( prompt )
			{
				window.open("about:blank","_self");
				window.close();
			}
		} );
	}

};