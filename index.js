import { Howl } from 'howler';
import WaveSurfer from 'wavesurfer.js';

const FILE_PATH = process.env.soundFile;

// Initialization of WaveSurfer
const waveSurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  progressColor: 'purple'
});

// Load a track
waveSurfer.load(FILE_PATH);

// Initialize Howl
const player = new Howl({
  src: [FILE_PATH],
  html5: true // Force HTML5 Audio, enabling the audio to be played from a file:// URL
});

// Play/pause functionality
document.getElementById('play').addEventListener('click', function() {
  player.play();
  waveSurfer.play();
});

document.getElementById('pause').addEventListener('click', function() {
  player.pause();
  waveSurfer.pause();
});

// Additional features (just examples, can be extended)
const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('input', function() {
  const volume = parseFloat(this.value);
  player.volume(volume);
});

const seekSlider = document.getElementById('seek-slider');
seekSlider.addEventListener('input', function() {
  const seekTo = parseFloat(this.value);
  player.seek(seekTo);
  waveSurfer.seekTo(seekTo / player.duration());
});

// Event listeners for audio player events
player.on('play', function() {
  console.log('Audio playback started');
});

player.on('pause', function() {
  console.log('Audio playback paused');
});

player.on('end', function() {
  console.log('Audio playback ended');
});


export { player, waveSurfer }; // Exporting for external use if required
