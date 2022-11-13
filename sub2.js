const fadeEls = document.querySelectorAll('.fadein');
        fadeEls.forEach(function (fadeEl, index) {
            gsap.to(fadeEl, {
                duration: 1,
                delay: (index + 1) * 1,
                opacity: 1,
            })
        })


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


var swiper = new Swiper(".mySwiper", {
            speed: 100,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            autoplay: {
                delay: 15,
            },
            loop: true,
            coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
            },
        });

var start = document.querySelector('.start')
        start.addEventListener('click', function () {
            swiper.autoplay.start()
        });

var stop2 = document.querySelector('.stop')
        stop2.addEventListener('click', function () {
            swiper.autoplay.stop()
        });