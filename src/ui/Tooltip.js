var Tooltip = Base.extend( {

	constructor: function()
	{
		this.$container = $( '<div>' ).addClass( 'tooltip' ).hide().appendTo( $( 'body' ) );
		this.text = false;
	},
	addLine: function( text )
	{
		if( this.text )
		{
			this.text += '<br />';
		}
		else
		{
			this.text = '';
		}
		this.text = this.text + text;
		
		this.$container.html( this.text );
	},
	setPosition: function( x, y )
	{
		this.$container.css( {
			left: x,
			top: y
		} );
	},
	hide: function()
	{
		this.text = '';
		this.$container.hide().empty();
	},
	show: function( stage )
	{
		this.$container.fadeIn();
	}

} );