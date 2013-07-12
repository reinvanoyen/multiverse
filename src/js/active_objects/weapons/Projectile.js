var Projectile = Movable.extend( {

	constructor: function( ranged_weapon, texture_path )
	{
		this.base( texture_path );
		this.ranged_weapon = ranged_weapon;
		this.sprite.visible = false
		this.is_fired = false;
	},
	fire: function()
	{
		this.setPosition( this.ranged_weapon.position.x, this.ranged_weapon.position.y );
		this.direction = this.ranged_weapon.direction;
		this.sprite.rotation = this.direction;
		this.is_fired = true;
	},
	update: function()
	{
		if( this.is_fired )
		{
			this.sprite.visible = true;
			this.velocity = 2000;
			this.base();
		}
	}

} );