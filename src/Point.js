var Point = Base.extend( {

	constructor: function( x, y )
	{
		this.x = x;
		this.y = y;
	},
	getAngle: function( point )
	{
		return Math.atan2( point.x - this.x, point.y - this.y );
	},
	equals: function( point )
	{
		return point.x == this.x && point.y == this.y;
	}

} );