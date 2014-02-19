function Sound(context, audioBuffer) {
	
	// properties
	this.isPlaying = 0;
	this.gainNode= null;
	this.buffer = audioBuffer;

	// methods
	this.play = function() {
		// createGain or createGainNode
		if(!context.createGain) {
			context.createGain = context.createGainNode;
		}
		this.gainNode = context.createGain();
		var source = context.createBufferSource();
		source.buffer = this.buffer;

		source.connect(this.gainNode);
		this.gainNode.connect(context.destination);
		// whether it is a loop
		source.loop = false;
		// Playing the sound
		if(!this.isPlaying) {
			if(!source.start) {
			source.start = source.noteOn;
			}
		source.start(0);
		this.source = source;
		this.isPlaying = 1;
		}

	};

	this.changeVolume = function(element) {
		var volume = element.value;
		var fraction = parseInt(volume) / parseInt(100);
		// use x * x curve since simple linear x does not sound good
		this.gainNode.gain.value = fraction * fraction;
	};

	this.stop = function() {
		if(!this.source.stop) {
			this.source.stop = source.noteOff;
		}
		this.source.stop(0);
		this.isPlaying = 0;
	};


}