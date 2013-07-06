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
	getDistance: function( point )
	{
		var xs = this.x - point.x;
		xs = xs * xs;
		
		var ys = this.y - point.y;
		ys = ys * ys;
		
		return Math.sqrt( xs + ys );
	},
	equals: function( point )
	{
		return point.x === this.x && point.y === this.y;
	}

} );