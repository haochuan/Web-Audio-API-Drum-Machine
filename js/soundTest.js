var audioContext = new webkitAudioContext();
var bufferLoader;
var bufferLib;
var bgBuffer;
var backAudio;

function loadAudio() {
	bufferLoader = new BufferLoader(
		audioContext,
		[
			"audio/bg.mp3",
			"audio/snareDrum.wav",
			"audio/hh.wav",
		],
		finishLoading
		);
	bufferLoader.load();
}

function finishLoading(bufferList) {
	bufferLib = bufferList;
	bgBuffer = bufferLib[0]
	console.log("Done loading!")
}


function init() {
	loadAudio();
	console.log(typeof bgBuffer);
	backAudio = new Sound(audioContext, bgBuffer);
}

