var Action = Base.extend( {

	constructor: function( name, keycode, action )
	{
		this.name = name;
		this.keycode = keycode;
		this.action = action;
		
		this.$container = $( '<div>' ).addClass( 'action' ).text( name );
		
		this.bindClick();
		this.bindKey();
	},
	bindKey: function()
	{
		Game.input_manager.bindKey( this.keycode, this.action );
	},
	bindClick: function()
	{
		this.$container.click( this.action );
	}

} );