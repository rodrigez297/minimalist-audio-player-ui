## minimalist-audio-player-ui

A minimalist audio player UI library for web applications.

### Features

- Simple and lightweight audio player UI.
- Utilizes Howler.js and WaveSurfer.js for audio playback and visualization.
- Play/pause functionality with customizable buttons.
- Styling with SASS for easy customization.

### Installation

You can install the library via npm:

```bash
npm install minimalist-audio-player-ui
```

### Usage

```javascript
import { player, waveSurfer } from 'minimalist-audio-player-ui';

// Initialize player and waveform
// Add event listeners for UI controls
// Additional customization as needed
```

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimalist Audio Player UI</title>
    <link rel="stylesheet" href="styles.css"> <!-- Include compiled CSS -->
</head>
<body>
<div id="waveform"></div>
<button id="play">Play</button>
<button id="pause">Pause</button>
<input type="range" id="volume-slider" min="0" max="1" step="0.01" value="1">
<input type="range" id="seek-slider" min="0" max="100" step="0.1" value="0">
<script src="index.js"></script>
</body>
</html>
```

### License

This project is licensed under the MIT License - see th
