var AiEntity = Movable.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.view_distance = 1000;
		this.acceleration = 10;
		this.exhaust_flume = new ExhaustFlume();
		
		this.target = null;
		this.state = 'idle';
	},
	setState: function( state )
	{
		this.state = state;
	},
	setTarget: function( drawable )
	{
		this.target = drawable;
	},
	follow: function()
	{
		var distance = this.position.getDistance( this.target.position );
			
		if( distance < this.view_distance )
		{
			if( distance > 300 )
			{
				this.easeToAngle( -this.position.getAngle( this.target.position ) );
				this.accelerate( 350 );
				this.exhaust_flume.start();
			}
			else
			{
				this.accelerate( 0 );
				this.exhaust_flume.stop();
			}
			this.sprite.rotation = this.direction;
		}
	},
	look: function()
	{
		var distance = this.position.getDistance( this.target.position );
			
		if( distance < this.view_distance )
		{
			this.easeToAngle( -this.position.getAngle( this.target.position ) );
			this.sprite.rotation = this.direction;
		}
	},
	idle: function()
	{
	
	},
	update: function()
	{
		switch( this.state )
		{
			case 'following':
				this.follow();
			break;
			case 'looking':
				this.look();
			break;
			default:
				this.idle();
		}
		
		this.exhaust_flume.direction = -this.direction;
		this.exhaust_flume.setPosition( this.position.x, this.position.y );
		this.exhaust_flume.update();
		
		this.base();
	},
	draw: function( stage )
	{
		this.exhaust_flume.draw( stage );
		this.base( stage );
	}

} );