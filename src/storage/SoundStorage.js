var SoundStorage = Storage.extend( {

	stopAll: function()
	{
		this.each( function( e )
		{
			e.stop();
		} );
	},
	muteAll: function()
	{
		this.each( function( e )
		{
			e.mute();
		} );
	},
	unmuteAll: function()
	{
		this.each( function( e )
		{
			e.unmute();
		} );
	}

} );