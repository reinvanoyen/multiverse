var GravityFieldObserver = Base.extend( {

	planets_vs_player: function( planets, player )
	{
		planets.each( function( planet )
		{
			var distance_x = Math.abs( planet.sprite.position.x - player.sprite.position.x );
			var distance_y = Math.abs( planet.sprite.position.y - player.sprite.position.y );
			
			if( distance_x < 100 && distance_y < 100 )
			{
				//player.sprite.position.x = planet.sprite.position.x;
				//player.sprite.position.y = planet.sprite.position.y;
			}
			
		} );
	}

} );