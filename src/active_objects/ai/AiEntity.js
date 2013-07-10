var AiEntity = Movable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.state = 'idle';
		this.view_distance = 500;
	},
	follow: function( movable )
	{
		this.state = 'following';
		this.follow_object = movable;
	},
	update: function()
	{
		if( this.state === 'following' )
		{
			this.direction = -this.position.getAngle( this.follow_object.position );
			this.sprite.rotation = this.direction;
			this.accelerate( 100 );
		}
		this.base();
	}

} );