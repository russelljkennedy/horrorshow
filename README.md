# Generate your own horror movie

A generator that will create a random poster with a new background, cast, title and tagline on a button click. After rendering, there's an option to generate another, or open the poster as an image in a new tab.

The generator itself is built in vanilla JavaScript, while the image opening function uses the [html2canvas](http://html2canvas.hertzen.com/) JS library to capture the div and build a canvas from it.

All seems to work well in most modern browsers, but not brilliantly in IE just yet. The image capture also doesn't seem to function in Edge for some reason. I'll work on better supporting these browsers in the future.

Anyhow, [give it a go](https://russelljkennedy.github.io/horrorshow/), if you're feeling sufficiently courageous.
