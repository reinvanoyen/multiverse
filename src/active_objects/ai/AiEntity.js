var AiEntity = Movable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.state = 'idle';
		this.view_distance = 5000;
		this.acceleration = 10;
		this.exhaust_flume = new ExhaustFlume();
	},
	draw: function( stage )
	{
		this.base( stage );
		this.exhaust_flume.draw( stage );
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
			var distance = this.position.getDistance( this.follow_object.position );
			
			if( distance < this.view_distance )
			{
				if( distance > 300 )
				{
					this.easeToAngle( -this.position.getAngle( this.follow_object.position ) );
					this.accelerate( 700 );
					this.exhaust_flume.start();
				}
				else
				{
					this.accelerate( 10 );
					this.exhaust_flume.stop();
				}
				this.sprite.rotation = this.direction;
			}
		}
		
		this.exhaust_flume.direction = -this.direction;
		this.exhaust_flume.setPosition( this.position.x, this.position.y );
		this.exhaust_flume.update();
		
		this.base();
	}

} );