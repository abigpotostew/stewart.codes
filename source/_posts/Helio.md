title: Helio
author: Stewart Bracken
tags:
  - nft
  - generativeart
  - publicworks.art
categories:
  - art
date: 2022-10-18 22:52:00
---
Helio is my favorite and most expressive generative work yet with ambitious goals to display in realtime at large resolutions and print at super large scale. In my mind, the project succeeded on both accounts. The animation can be displayed on almost any device at any resolution. Only on high density displays over at resolutions well over 4k does the framerate begin to drop below 60. And the webapp is able to print out super high resolution still frames that can be used for print. For the prints below, I created prints at 300 dpi for panels up to 7 feet.

----

{% imgsb sb-gallery-image /images/helio/helio-print-smallest.jpeg 375 452 '"Wall Print 01" "Wall Print 01"' %}

----

{% imgsb sb-gallery-image /images/helio/small-wall-stairs-web.jpg 375 772 '"Wall Print 02" "Wall Print 02"' %}


----

{% imgsb sb-gallery-image /images/helio/top-short-stairwell-thumb.jpeg 375 436 '"Wall Print 03" "Wall Print 03"' %}

----

The variety of shapes and movement in both stills and animations is stunning. The generative color palettes adding many layers of recognition and surprise.

----
{% twitter https://twitter.com/stewbracken/status/1575549754875838464 %}


Following my prior works, Helio is a real time WebGL animation, inviting the viewers to watch and enjoy. It's a slow consumption.


I was nspired by a prior work called Mischief Makers made by me in 2015.

{% imgsb sb-gallery-image /images/helio/mischief.gif %}

Like Hyperion, Helio utilizes distance fields. I wanted to take the same spirit of Hyperion but apply the distance field in two dimensions rather than three to meet my inspiration and to return to master the basics of the technique I've been practicing for a couple years now.


Helio is a WebGL generative animation minted on demand using publicworks.art.

The algorithm produces some surprising outputs.


### The Algorithm


The base of the Helio algorithm consists of randomly placed origins points. NFTs have between 5 and 15 origin points. The number of origins has a drastic affect on the final image not yet seen here.

{% imgsb sb-gallery-image /images/helio/process-01-02.gif 375 375 '"Process 01 01" "Process 01 01"' %}

By adding the kaleidoscope effect and moving origins around, a large variety of symmetric compositions are achieved. 

{% imgsb sb-gallery-image /images/helio/process-01-01.png 375 275 '"Process 01 01" "Process 01 01"' %}

By randomly moving the origins around the screen, and choosing a new keleidoscopic folding structure, we can already see a large difference in generated patterns.

{% imgsb sb-gallery-image /images/helio/process-01-02.png 375 275 '"Process 01 02" "Process 01 02"' %}

----

{% imgsb sb-gallery-image /images/helio/process-01-03.png 375 100 '"Process 01 03" "Process 01 03"' %}


----


Now that a basic structure is formed, color can be derived from the distance fields.

{% imgsb sb-gallery-image /images/helio/process-02-05.png 375 250 '"Process 02 01" "Process 02 01"' %}

Using @iquilezles https://iquilezles.org/articles/palettes/ generative color palettes I can map personally curated color palettes to the distance field. Color also has a drastic affect on the output of the same distance field


----

{% imgsb sb-gallery-image /images/helio/process-02-02.png 375 250 '"Process 02 02" "Process 02 02"'  %}

----

{% imgsb sb-gallery-image /images/helio/process-02-03.png 375 250 '"Process 02 03" "Process 02 03"' %}

----

The foreground builds on top of the background.
