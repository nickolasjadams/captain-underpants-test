
    var slider = tns({
        "container": '.slider',
        "items": 1,
        "slideBy": 'page',
        "speed": 500,
        "mouseDrag": true,
        "nav": false,
        "controlsPosition": "bottom",
        "arrowKeys": true,
        "swipeAngle": false,
        "controlsContainer": "#customize-controls",
        "preventScrollOnTouch": 'auto',
        "preventScrollOnTouch": 'force'
    });

    document.querySelectorAll(".slide > a").forEach(function(slide) {
        slide.insertAdjacentHTML('afterbegin', "<img class='outline' src='images/slide-outline.png' alt=''>");
    });
