function randomInt( min, max )
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat( min, max, precision )
{
	if( typeof( precision ) === 'undefined' )
	{
		var precision = 2;
	}
	return parseFloat( Math.min( min + ( Math.random() * ( max - min ) ), max).toFixed( precision ) );
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
		'rein'
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
		'ora',
	];
	
	var name = start_syllables[ randomInt( 0, start_syllables.length - 1 ) ];
	var name = name + end_syllables[ randomInt( 0, end_syllables.length - 1 ) ];
	
	return name;
}

function randomPlanetSkin()
{
	var planet_skins = [
		'textures/mars.png',
		'textures/jupiter.png',
		'textures/venus.png',
		'textures/pluto.png',
		'textures/earth.png',
		'textures/red.png',
		'textures/green.png'
	];
	
	return planet_skins[ randomInt( 0, planet_skins.length - 1 ) ];
}

function randomPlanet()
{
	var solar_systems = Game.universe.solar_systems;
	var selected_solar_system = solar_systems.get( 'solar_' + randomInt( 1, solar_systems.length() ) );
	var planets = selected_solar_system.planets;
	var selected_planet = planets.get( 'planet_' + randomInt( 1, planets.length() ) );
	return selected_planet;
}