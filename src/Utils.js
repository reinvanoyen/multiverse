function randomInt( min, max )
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPlanetName()
{
	var start_syllables = [
		'sat',
		'urop',
		'utop',
		'xyros',
		'ven',
		'uran',
		'plut',
		'mar',
		'kor',
		'kerat',
		'sator',
		'jupit',
		'por',
		'xyr',
		'mux',
		'las',
		'polis',
		'poxu',
	];
	
	var end_syllables = [
		'us',
		'us',
		'us',
		'us',
		'us',
		'ius',
		'ius',
		'ius',
		'ium',
		'ium',
		'ium',
		'uto',
		'une',
		'is',
		'urnus',
		'erra',
		'es',
		'as',
		'er',
		'ar',
		'arnos',
		'iumis',
		'astra',
		'ury',
		'atops',
		'aros',
		'ora'
	];
	
	var name = start_syllables[ randomInt( 0, start_syllables.length - 1 ) ];
	var name = name + end_syllables[ randomInt( 0, end_syllables.length - 1 ) ];
	
	return name;
}