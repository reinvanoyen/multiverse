Ui.Window = Base.extend( {

	constructor: function()
	{
		var that = this;
		this.$window = $( '<div>' ).addClass( 'window' ).hide().appendTo( $( 'body' ) );
		this.$header = $( '<div>' ).addClass( 'window_header' ).appendTo( this.$window );
		this.$title = $( '<span>' ).appendTo( this.$header );
		this.$content = $( '<div>' ).addClass( 'window_content' ).appendTo( this.$window );
		this.$close_button = $( '<div>' ).addClass( 'window_close_button' ).appendTo( this.$header ).click( function()
		{
			that.close();
		} );
	},
	setTitle: function( title )
	{
		this.title = title;
		this.$title.text( this.title );
	},
	setContent: function( html )
	{
		this.$content.html( html );
	},
	open: function()
	{
		this.$window.show();
	},
	close: function()
	{
		this.$window.hide();
	}

} );