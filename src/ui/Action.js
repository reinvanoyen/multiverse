var Action = Base.extend( {

	constructor: function( name, icon_path, keycode, action )
	{
		this.name = name;
		this.icon_path = icon_path;
		this.keycode = keycode;
		this.action = action;
		
		this.tooltip = new Tooltip();
		this.tooltip.addLine( name );
		
		this.$container = $( '<div>' ).addClass( 'action' ).css( {
			'background-image' : 'url( '+ this.icon_path + ' )'
		} );
		
		this.bindClick();
		this.bindKey();
		this.bindHover();
	},
	bindKey: function()
	{
		Game.input_manager.bindKey( this.keycode, this.action );
	},
	bindClick: function()
	{
		this.$container.click( this.action );
	},
	bindHover: function()
	{
		var that = this;
		this.$container.hover( function( e ) {
			that.tooltip.setPosition( e.pageX, e.pageY );
			that.tooltip.show();
		}, function()
		{
			that.tooltip.hide();
		} );
	}

} );