"use strict";

requestAnimFrame = (function() {
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
window.setTimeout(callback, 1000/60);
}; })();

var Game = {
	
	create: function( callback )
	{
		Game.state = 'initialising';
		
		Game.width = window.innerWidth;
		Game.height = window.innerHeight;
		
		Game.stage = new PIXI.Stage( 0x071621 );
		Game.renderer = PIXI.autoDetectRenderer( Game.width, Game.height );
		
		// Delta time
		Game.delta = 0;
		
		// Create our needed objects
		Game.input_manager = new InputManager();
		Game.ui = new Ui();
		Game.sounds = new SoundStorage();
		Game.universe = new Universe();
		
		Game.loadSounds();
		
		// Append our view to the body
		document.body.appendChild( Game.renderer.view );
		
		// Call callback
		callback();
	},
	start: function()
	{
		var that = Game;
		
		Game.sounds.unmuteAll();
		Game.state = 'playing';
		
		Game.then = Date.now();
		
		Game.renderFrame();
	},
	stop: function()
	{
		Game.state = 'paused';
		Game.sounds.muteAll();
	},
	renderFrame: function()
	{
		if( Game.state === 'playing' )
		{
			Game.now = Date.now();
			Game.delta = ( Game.now - Game.then ) / 1000;
			
			Game.universe.update();
			Game.ui.update();
			
			// Render stage
			Game.renderer.render( Game.stage );
			
			// Request next frame
			requestAnimFrame( Game.renderFrame );
			
			Game.then = Game.now;
		}
	},
	loadSounds: function()
	{
		// Sound
		var theme_sound = new Sound( 'sound/music/stringpad1.mp3', 'audio/mpeg' );
		theme_sound.loop();
		Game.sounds.add( 'theme', theme_sound );
		Game.sounds.add( 'sidebooster', new Sound( 'sound/ship/sidebooster.mp3', 'audio/mpeg' ) );
		Game.sounds.add( 'booster', new Sound( 'sound/ship/booster.mp3', 'audio/mpeg' ) );
		Game.sounds.add( 'action', new Sound( 'sound/ui/action.mp3', 'audio/mpeg' ) );
		Game.sounds.add( 'mineral_pickup', new Sound( 'sound/ship/mineral_pickup.mp3', 'audio/mpeg' ) );
		Game.sounds.add( 'waypoint_set', new Sound( 'sound/ui/waypoint_set.mp3', 'audio/mpeg' ) );
		Game.sounds.get( 'theme' ).play();
	}
};
