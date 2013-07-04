Ui.Hud = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).attr( 'id', 'hud' ).appendTo( $( 'body' ) );
	}

} );