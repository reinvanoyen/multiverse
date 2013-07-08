var MainMenu = Base.extend( {

	constructor: function()
	{
		this.is_open = true;
		this.$container = $( '<div>' ).attr( 'id', 'main_menu' ).appendTo( $( 'body' ) );
		Game.stop();
	},
	open: function()
	{
		this.$container.show();
		this.is_open = true;
		Game.stop();
	},
	close: function()
	{
		this.$container.hide();
		this.is_open = false;
		Game.start();
	}
} );