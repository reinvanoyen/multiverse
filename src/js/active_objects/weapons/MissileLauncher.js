var MissileLauncher = RangedWeapon.extend( {

	constructor: function()
	{
		this.base( 'textures/weapons/missile_launcher.png' );
		
		this.fire_interval = 30;
		this.time_since_last_shot = this.fire_interval;
		
		for( var i = 0; i < 5; i++ )
		{
			this.projectiles.push( new Projectile( this, 'textures/weapons/projectiles/missile.png' ) );
		}
	}

} );