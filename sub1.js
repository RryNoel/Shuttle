const fadeEls = document.querySelectorAll('.srh2_B');
        fadeEls.forEach(function (fadeEl, index) {
            gsap.to(fadeEl, {
                duration: 0.3,
                delay: (index + 0.3) * 0.3,
                opacity: 1,
            })
        })