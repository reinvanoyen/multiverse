var Main = {

	create: function()
	{
		var that = this;
		this.main_menu = new MainMenu();
		
		this.main_menu.addItem( 'Play', function()
		{
			Game.create();
			that.main_menu.close();
		} );
		
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