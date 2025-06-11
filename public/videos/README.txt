VIDEO FILE INSTRUCTIONS
=====================

To make the hero section video work, you need to add a video file named "manufacturing-showcase.mp4" in this directory.

Option 1: Create a video from an existing image
-----------------------------------------------
You can use FFmpeg to create a simple video from the hero background image:

1. Install FFmpeg from https://ffmpeg.org/download.html
2. Run the following command:

   ffmpeg -loop 1 -i ../images/hero-background.jpg -c:v libx264 -t 10 -pix_fmt yuv420p manufacturing-showcase.mp4

This will create a 10-second video from the image.

Option 2: Use your own manufacturing video
------------------------------------------
If you have your own manufacturing footage, you can:

1. Convert it to MP4 format if needed
2. Name it "manufacturing-showcase.mp4" 
3. Place it in this directory (public/videos/)

The video should be in landscape orientation for best results in the hero section. 