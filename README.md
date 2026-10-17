# Pocket Retro

A personal retro photo, video and sound editor that runs entirely in the browser. Nothing is uploaded: photos, videos and sounds are processed on your device.

- **Camera mode**: 2000s digicam, flip phone, webcam and toy camera looks, date stamps, viewfinder frames, a live low-res viewfinder and short clips.
- **Tape mode**: NTSC/VHS effects (a JavaScript port of the core effect from [ntsc-rs](https://github.com/valadaptive/ntsc-rs) by valadaptive, MIT licence), a CRT TV look, overlays, borders and VHS sound.

## Updating the site
1. Upload the new files to this repository (they replace the old ones).
2. In `sw.js`, change `VERSION` (for example `pocket-retro-1.0.1`) so phones fetch the new version.

## Credits
The Tape effect engine is a port of ntsc-rs. Copyright © valadaptive, MIT licence (full text in the app's Credits section).
