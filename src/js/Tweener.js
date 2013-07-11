var Tweener = {

	linear: function( start_value, end_value, step )
	{
		if( start_value > end_value )
		{
			start_value = Math.max( start_value - step, end_value );
		}
		else if( start_value < end_value )
		{
			start_value = Math.min( start_value + step, end_value );
		}
		return start_value;
	}

};