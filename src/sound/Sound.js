var Sound = Base.extend( {

	constructor: function( src, type )
	{
		this.$container = $( '<audio>' ).appendTo( $( 'body' ) );
		this.$source = $( '<source>' ).attr( 'src', src ).attr( 'type', type ).appendTo( this.$container );
		this.audio = this.$container[0];
	},
	play: function()
	{
		this.audio.play();
	},
	loop: function()
	{
		this.audio.loop = true;
	}

} );