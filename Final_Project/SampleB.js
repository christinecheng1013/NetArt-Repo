const players = new Tone.Players({
    sample1: "https://christinecheng1013.github.io/NetArt-Repo/media/drone1.aiff",
    sample2: "https://christinecheng1013.github.io/NetArt-Repo/media/drone2.aiff",
    sample3: "https://christinecheng1013.github.io/NetArt-Repo/media/bubble4.wav"
  });
  
  let slider1 = document.getElementById("slider1");
  let slider2 = document.getElementById("slider2");
  let slider3 = document.getElementById("slider3");
  let slider4 = document.getElementById("slider4");
  let slider5 = document.getElementById("slider5");
  let slider6 = document.getElementById("slider6");
  
  let PPdelay = new Tone.PingPongDelay({
    delayTime: 0.25,
    feedback: 0.2
  });
  //resonance ranges from 0-1
  PPdelay.toDestination();
  
  let pitchShift = new Tone.PitchShift({
    pitch: 0,
    windowSize: 0.1
  });
  // windowSize better ranges between 0.03 to 0.1
  // pitch measures in semitone. i.e. 12 is an octave
  pitchShift.toDestination();
  
  let vibrato = new Tone.Vibrato({
    frequency: 5,
    depth: 0.1
  });
  vibrato.toDestination();
  
  slider1.onclick = () => {
    PPdelay.delayTime.value = slider1.value * 0.1;
  };
  
  slider2.onclick = () => {
    PPdelay.feedback.value = slider2.value * 0.1;
  };
  
  slider3.onclick = () => {
    pitchShift.pitch = slider3.value * 1.1;
  };
  slider4.onclick = () => {
    pitchShift.windowSize = slider4.value * 0.01;
  };
  
  slider5.onclick = () => {
    vibrato.frequency.value = slider5.value * 1.5;
  };
  slider6.onclick = () => {
    vibrato.depth.value = slider6.value * 0.1;
  };
  //multiply by 0.1 for JCReverb param
  // const comb1 = new
  // Tone.FeedbackCombFilter(0).toDestination();
  // const comb2 = new Tone.FeedbackCombFilter(0).toDestination();
  // const comb3 = new Tone.FeedbackCombFilter(0).toDestination();
  
  players.connect(PPdelay);
  players.connect(pitchShift);
  players.connect(vibrato);
  
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
  document.querySelector("#onoff")?.addEventListener("click", async () => {
    await Tone.start();
    console.log("audio is ready");
  });
  
  