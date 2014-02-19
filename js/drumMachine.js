var audioContext = new webkitAudioContext();
var bufferLoader;
var bufferLib;

var bassBuffer;
var snareBuffer;
var hhBufer;

var bassSource;
var snareSource;
var hhSource;




function loadAudio() {
	bufferLoader = new BufferLoader(
		audioContext,
		[
			"audio/bassDrum.wav",
			"audio/snareDrum.wav",
			"audio/hh.wav",
		],
		finishLoading
		);
	bufferLoader.load();
}

function finishLoading(bufferList) {
	bufferLib = bufferList;
	bassBuffer = bufferLib[0];
	snareBuffer = bufferLib[1];
	hhBuffer = bufferLib[2];
}

function playAudio(buffer, time) {
	var gainNode = audioContext.createGainNode();
	var source = audioContext.createBufferSource();
	var volume = $( "#bass_drum_vol" ).slider( "value" );
	gainNode.gain.value = volume;
	source.buffer = buffer;
	source.connect(gainNode);
	gainNode.connect(audioContext.destination);
	source.noteOn(time);
}

function stopAudio(source, time) {
	if(buffer) {
		buffer.noteOff(time);
	}
}

function pattern1(times) {
	var tempo = $( "#tempo" ).slider( "value" );
	var startTime = audioContext.currentTime + 0.1000;
	console.log(startTime);
	var eighthNoteTime = (60 / tempo) / 2;

	for (var bar = 0; bar < times; bar++) {
  		var time = startTime + bar * 8 * eighthNoteTime;
  		// Play the bass (kick) drum on beats 1, 5
  		playAudio(bassBuffer, time);
  		playAudio(bassBuffer, time + 4 * eighthNoteTime);

  		// Play the snare drum on beats 3, 7
  		playAudio(snareBuffer, time + 2 * eighthNoteTime);
  		playAudio(snareBuffer, time + 6 * eighthNoteTime);

  		// Play the hi-hat every eighth note.
  		for (var i = 0; i < 8; ++i) {
    		playAudio(hhBuffer, time + i * eighthNoteTime);
  		}
	}
	
}

function pattern2(times) {
	var tempo = $( "#tempo" ).slider( "value" );
	var startTime = audioContext.currentTime + 0.1000;
	console.log(startTime);
	var sixteenthNoteTime = (60 / tempo) / 4;

	for (var bar = 0; bar < times; bar++) {
  		var time = startTime + bar * 16 * sixteenthNoteTime;
  		// Play the bass (kick) drum on beats 1, 5
  		playAudio(bassBuffer, time);
  		playAudio(bassBuffer, time + 8 * sixteenthNoteTime);


  		// Play the snare drum on beats 3, 7
  		playAudio(snareBuffer, time + 4 * sixteenthNoteTime);
  		playAudio(snareBuffer, time + 7 * sixteenthNoteTime);
  		playAudio(snareBuffer, time + 9 * sixteenthNoteTime);
  		playAudio(snareBuffer, time + 12 * sixteenthNoteTime);

  		// Play the hi-hat every eighth note.
  		for (var i = 0; i < 16; ++i) {
    		playAudio(hhBuffer, time + i * sixteenthNoteTime);
  		}
	}
	
}

function pattern3(times) {
	var tempo = $( "#tempo" ).slider( "value" );
	var startTime = audioContext.currentTime + 0.1000;
	console.log(startTime);
	var sixteenthNoteTime = (60 / tempo) / 4;

	for (var bar = 0; bar < times; bar++) {
  		var time = startTime + bar * 16 * sixteenthNoteTime;
  		// Play the bass (kick) drum on beats 1, 5
  		playAudio(bassBuffer, time);
  		playAudio(bassBuffer, time + 2 * sixteenthNoteTime);
  		playAudio(bassBuffer, time + 11 * sixteenthNoteTime);
  		playAudio(bassBuffer, time + 14 * sixteenthNoteTime);
  		

  		// Play the snare drum on beats 3, 7
  		playAudio(snareBuffer, time + 4 * sixteenthNoteTime);
  		playAudio(snareBuffer, time + 7 * sixteenthNoteTime);
  		playAudio(snareBuffer, time + 9 * sixteenthNoteTime);
  		playAudio(snareBuffer, time + 12 * sixteenthNoteTime);

  		// Play the hi-hat every eighth note.
  		for (var i = 0; i < 8; ++i) {
    		playAudio(hhBuffer, time + i * sixteenthNoteTime * 2);
  		}
	}
	
}

function main() {
	var times = $( "#times" ).slider( "value" );
	var pattern = $('input[name="optionsRadios"]:checked').val();
	if(pattern == "1") {
		pattern1(times);
	}
	else if(pattern =="2") {
		pattern2(times);
	}
	else if(pattern == "3") {
		pattern3(times);
	}
	console.log(times);
	console.log(pattern);
}