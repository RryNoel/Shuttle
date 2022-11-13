const fadeEls = document.querySelectorAll('.fadein');
        fadeEls.forEach(function (fadeEl, index) {
            gsap.to(fadeEl, {
                duration: 1,
                delay: (index + 1) * 1,
                opacity: 1,
            })
        })


gsap.to(".box", {duration: 0.5, y: 20, repeat: -1, yoyo: true});


const spyEls = document.querySelectorAll(".msg1_PA");
        const controller = new ScrollMagic.Controller();

        spyEls.forEach(function (spyEl) {
            new ScrollMagic.Scene({
            triggerElement: spyEl,
            // triggerHook: 0.2
            })
            .setClassToggle(spyEl, "show")
            .addTo(controller);
        });