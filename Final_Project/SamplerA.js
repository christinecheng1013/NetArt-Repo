const players = new Tone.Players({
  sample1: "https://christinecheng1013.github.io/NetArt-Repo/docs/media/bubble2.wav",
  sample2: "https://christinecheng1013.github.io/NetArt-Repo/docs/media/bubble3.wav",
  sample3: "https://christinecheng1013.github.io/NetArt-Repo/docs/media/bubble4.wav"
});

let slider1 = document.getElementById("slider1");
let slider2 = document.getElementById("slider2");
let slider3 = document.getElementById("slider3");
let slider4 = document.getElementById("slider4");
let slider5 = document.getElementById("slider5");
let slider6 = document.getElementById("slider6");
let slider7 = document.getElementById("slider7");

let filter = new Tone.FeedbackCombFilter ({
  delayTime: '4n',
  resonance: 0.2
})
//resonance ranges from 0-1
filter.toDestination()

let filter2 = new Tone.Tremolo ({
  frequency: 10,
  depth: 0.5
})
filter2.toDestination()

let filter3 = new Tone.Freeverb ({
  roomSize: 0.7,
  dampening: 3000
})
filter3.toDestination()

let volume = new Tone.Volume ({
  Volume: 0,
})
volume.toDestination()

slider1.onclick = () => {
  filter.resonance.value = slider1.value * 0.1;
};

slider2.onclick = () => {
  filter.delayTime.value = slider2.value * 0.01;
};

slider3.onclick = () => {
  filter2.frequency.value = slider3.value * 0.1;
};
slider4.onclick = () => {
  filter2.depth.value = slider4.value * 0.1;
};

slider5.onclick = () => {
  filter3.roomSize.value = slider5.value * 0.1;
};
slider6.onclick = () => {
  filter3.dampening = slider6.value * 1.1;
};
slider7.onclick = () => {
  volume.volume.value = slider7.value * 0.03;
};
//multiply by 0.1 for JCReverb param
// const comb1 = new 
// Tone.FeedbackCombFilter(0).toDestination();
// const comb2 = new Tone.FeedbackCombFilter(0).toDestination();
// const comb3 = new Tone.FeedbackCombFilter(0).toDestination();

  players.connect(filter);
  players.connect(filter2);
  players.connect(filter3);
  players.connect(volume);

document.getElementById("buttonA").addEventListener("click", () => {
  players.player("sample1").start();
});

document.getElementById("buttonB").addEventListener("click", () => {
  players.player("sample2").start();
});

document.getElementById("buttonC").addEventListener("click", () => {
  players.player("sample3").start();
});

//attach a click listener to a play button
document.querySelector('#onoff')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})
