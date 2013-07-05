var PhysicsObject = Drawable.extend( {
	
	constructor: function( texture_path )
	{
		this.base( texture_path );
		
		this.velocity_x = 0;
		this.velocity_y = 0;
	},
	move: function()
	{
		this.sprite.position.x = this.sprite.position.x + this.velocity_x;
		this.sprite.position.y = this.sprite.position.y + this.velocity_y;
	}
	
} );