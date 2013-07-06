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
		this.audio.volume = 1;
	},
	stop: function()
	{
		this.audio.pause();
		this.audio.currentTime = 0;
	},
	loop: function()
	{
		this.audio.loop = true;
	}

} );