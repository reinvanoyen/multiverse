var RangedWeapon = Weapon.extend( {

	constructor: function( texture_path )
	{
		this.base( texture_path );
		this.projectiles = [];
		
		this.fire_interval = 10;
		this.time_since_last_shot = this.fire_interval;
		this.is_firing = false;
		
		this.last_fired_projectile = -1;
		
		this.range = 400;
		this.direction = 0;
	},
	fire: function()
	{
		if( this.time_since_last_shot >= this.fire_interval )
		{
			this.time_since_last_shot = 0;
			this.is_firing = true;
			
			this.last_fired_projectile = Math.min( this.last_fired_projectile + 1, this.projectiles.length - 1 );
			this.projectiles[ this.last_fired_projectile ].fire();
		}
	},
	update: function()
	{
		this.time_since_last_shot++;
		
		var projectile_amount = this.projectiles.length;
		while( projectile_amount-- )
		{
			this.projectiles[ projectile_amount ].update();
		}
	},
	draw: function( stage )
	{
		this.base( stage );
		
		var projectile_amount = this.projectiles.length;
		while( projectile_amount-- )
		{
			this.projectiles[ projectile_amount ].draw( stage );
		}
	}

} );