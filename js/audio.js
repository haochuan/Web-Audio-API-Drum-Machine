var audioContext = new webkitAudioContext();
var audioBuffer = null;
var source = null;


function loadAudio(url) {
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.responseType = "arraybuffer";
	request.onload = function() {
		audioContext.decodeAudioData(request.response, function() {
			audioBuffer = buffer;
		});
	}
	request.send();
}


function playAudio(buffer) {
	source = audioContext.createBufferSource();
	source.buffer = buffer;
	source.connect(audioContext.destination);
	source.noteOn(0);
}

function stopAudio(buffer) {
	if(buffer) {
		buffer.noteOff(0);
	}
}