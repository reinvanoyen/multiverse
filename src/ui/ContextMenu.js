var ContextMenu = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).addClass( 'context_menu' ).hide().appendTo( $( 'body' ) );
		this.target = null;
	},
	addAction: function( name, action )
	{
		var that = this;
		var $action = $( '<span>' ).text( name ).appendTo( this.$container ).click( function()
		{
			action( that.target );
			that.hide();
		} );
	},
	show: function()
	{
		this.$container.show();
	},
	hide: function()
	{
		this.$container.hide();
	},
	setPosition: function( x, y )
	{
		this.$container.css( {
			left: x,
			top: y
		} );
	}

} );