var SoundStorage = Storage.extend( {

	stopAll: function()
	{
		this.each( function( e )
		{
			e.stop();
		} );
	}

} );