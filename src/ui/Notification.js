var Notification = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).addClass( 'notification' ).hide().appendTo( $( 'body' ) );
	},
	setText: function( text )
	{
		this.$container.text( text );
	},
	show: function()
	{
		this.$container.fadeIn( function()
		{
			$( this ).delay( 1000 ).fadeOut();
		} );
	}

} );