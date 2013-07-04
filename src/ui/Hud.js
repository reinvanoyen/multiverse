Ui.Hud = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).attr( 'id', 'hud' ).appendTo( $( 'body' ) );
		this.$age = $( '<div>' ).attr( 'id', 'age' ).appendTo( this.$container );
	},
	updateAge: function( age )
	{
		var age = Math.ceil( age / 10000 );
		this.$age.text( 'Year ' + age );
	}

} );