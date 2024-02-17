gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     scroller: ".fullpage"
// });

// gsap.to("#sky", {
//     scrollTrigger: {
//         trigger: "#section1",
//         start: "top top",
//         end: "top top",
//         scrub: 1
//     },
//     scale: 1.2,
//     rotation: 10
// })

if (window.innerWidth > 767) {
    gsap.to("#sky", {
        scrollTrigger: {
            trigger: "#section1",
            start: "top",
            end: "bottom",
            scrub: 1
        },
        scale: 1.5,
        rotation: 10
    });
}

// gsap.to("#sky", {
//     scrollTrigger: {
//         trigger: "#section1",
//         start: "top",
//         end: "bottom",
//         markers: true,
//         scrub: 1
//     },
//     scale: 1.5,
//     rotation: 10
// });

gsap.to("#h1container", {
    duration: 2,
    scrollTrigger: {
        scrub: 1
    },
    y: 3000
})

// gsap.to("#hello", {
//     scrollTrigger: {
//         scrub: 1
//     },
//     y: 2000,
//     opacity: 100
// })

gsap.to("#h1ex", {
    scrollTrigger: {
        scrub: 1
    },
    y: 2000,
    opacity: -20
})

gsap.to("#beyond", {
    scrollTrigger: {
        scrub: 1
    },
    y: 2000,
    opacity: -20
})

gsap.to("#s2text", {
    scrollTrigger: {
        trigger: "#section2",
        start: "center",
        end: "bottom",
        scrub: 1
    },
    y: -200,
    opacity: 0.2
})

// gsap.to("#section3", {
//     scrollTrigger: {
//         trigger: "#section3",
//         start: "top",
//         end: "bottom",
//         scrub: 1
//     },
//     // y: -50,
//     opacity: 0.2
// })

gsap.set("#big1", { y: "50%" });
gsap.set("#event", { y: "50%" });
gsap.set("#event_d", { y: "50%" });

gsap.to("#big1", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section3",
        start: "top center",
        end: "120%",
        scrub: 1
    },
    y: -50,
    // opacity: 0.2
})

gsap.to("#event", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section3",
        start: "top center",
        end: "100%",
        scrub: 1
    },
    y: -50,
    // opacity: 0.2
})

gsap.to("#event_d", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section3",
        start: "top center",
        end: "120%",
        scrub: 1
    },
    // opacity: 0.2,
    y: -50,
})

gsap.to("#section4", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top",
        end: "bottom",
        scrub: 1
    },
    y: -50,
    opacity: 0.2
})

// gsap.to("#balloon", {
//     scrollTrigger: {
//         scrub: 1
//     },
//     scale: 2,
//     y: 400
// })

// gsap.to("#rocks3", {
//     scrollTrigger: {
//         scrub: 1
//     },
//     y: 300
// })

// gsap.to("#rocks2", {
//     scrollTrigger: {
//         scrub: 1,
//     },
//     y: 100
// })

// gsap.to("#rocks1", {
//     scrollTrigger: {
//         scrub: 1
//     },
//     y: 200
// })

gsap.to("#balloon", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 2,
    y: 800
})

gsap.to("#rocks3", {
    scrollTrigger: {
        scrub: 1
    },
    y: 300
})

gsap.to("#rocks2", {
    scrollTrigger: {
        scrub: 1
    },
    y: 500
})

gsap.to("#rocks1", {
    scrollTrigger: {
        scrub: 1
    },
    y: 600
})

gsap.to("#lcloud", {
    scrollTrigger: {
        scrub: 1
    },
    x: -800
})

gsap.to("#rcloud", {
    scrollTrigger: {
        scrub: 1
    },
    x: 800
})

gsap.to("#section4", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "center center",
        scrub: 1
    },
    marginLeft: 40,
    marginRight: 40
})

gsap.to("#images", {
    scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "center center",
        scrub: 1
    },
    y: 30
})


gsap.to("#bottomrocks", {
    duration: 2,
    scrollTrigger: {
        scrub: 1,
        end: "bottom"
    },
    y: -350
});

gsap.set("#hello", { y: "50%" });
gsap.set("#hello_d", { y: "50%" });

gsap.to("#hello", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section5",
        start: "top center",
        end: "120%",
        scrub: 1
    },
    y: -50,
    // opacity: 0.2
})

gsap.to("#hello_d", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section5",
        start: "top center",
        end: "120%",
        scrub: 1
    },
    y: -50,
    // opacity: 0.2
})

gsap.set("#carousel-container-odd", { y: "10%" });
gsap.set("#carousel-container", { y: "10%" });

gsap.to("#carousel-container-odd", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section4",
        start: "top center",
        end: "120%",
        scrub: 1
    },
    y: -100,
    // opacity: 0.2
})

gsap.to("#carousel-container", {
    duration: 2,
    scrollTrigger: {
        trigger: "#section4",
        start: "top center",
        end: "120%",
        scrub: 1
    },
    y: -100,
    // opacity: 0.2
})

const navItems = document.querySelectorAll('.navli');
const vline = document.querySelectorAll('.vertical-line');
const vborder = document.querySelectorAll('.vertical-border');

ScrollTrigger.create({
    trigger: "#rocks2",
    start: "top top",
    onEnter: () => {
        navbar.style.borderBottomColor = "black";
        navItems.forEach(item => {
            item.style.color = "black";
        });
        navhead.style.color = "black";
        vline.forEach(item => {
            item.style.backgroundColor = 'black';
        });
        search.style.color = "black";

    },
    onLeaveBack: () => {
        navbar.style.borderBottomColor = "#FFFFFF";
        navItems.forEach(item => {
            item.style.color = "#FFFFFF";
        });
        navhead.style.color = "#FFFFFF";
        vline.forEach(item => {
            item.style.backgroundColor = '#FFFFFF';
        });
        search.style.color = "#FFFFFF";
    }
});

ScrollTrigger.create({
    trigger: "#section4",
    start: "top top",
    onEnter: () => {
        vborder.forEach(item => {
            item.style.opacity = "100";
        });
    },
    onLeaveBack: () => {
        vborder.forEach(item => {
            item.style.opacity = "0";
        });
    }
});

const carousels = document.querySelectorAll('.carousel');
const btncarousels = document.querySelectorAll('.btncarousel');
const totalSlides = carousels[0].querySelectorAll('.slide').length;

let currentIndex = 0;

document.getElementById('car').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    scrollToSlide(currentIndex);
});

document.getElementById('car2').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    scrollToSlide(currentIndex);
});

document.getElementById('car3').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    scrollToSlide(currentIndex);
});

function scrollToSlide(index) {
    carousels.forEach(carousel => {
        gsap.to(carousel, { duration: 2, y: -index * 115 + '%' });
    });
    btncarousels.forEach(carousel => {
        gsap.to(carousel, { duration: 1, x: -index * 100 + '%' });
    });
}

function playAnimation() {

    gsap.set("#balloon", { y: "-60%" });
    gsap.set("#rocks3", { y: "-40%" });
    gsap.set("#rocks2", { y: "-40%" });
    // gsap.set("#section1", { height: "0" });
    gsap.set("#rocks1", { y: "-40%" });
    gsap.set("#sky", { rotation: 10, scale: 1.5 });
    gsap.set("#h1ex", { y: 2000, opacity: -20 });
    gsap.set("#beyond", { y: 2000, opacity: -20 });


    // gsap.to("#section1", {
    //     duration: 3,
    //     height: "40vh",
    // });

    gsap.to("#sky", {
        duration: 2,
        scale: 1,
        rotation: 0,
        ease: "none"
    });

    gsap.to("#balloon", {
        duration: 2,
        y: 0
    });

    gsap.to("#rocks3", {
        duration: 2,
        y: 0
    });

    gsap.to("#rocks2", {
        duration: 2,
        y: 0
    })

    gsap.to("#rocks1", {
        duration: 2,
        y: 0
    });

    gsap.to("#h1ex", {
        duration: 2,
        y: 0,
        opacity: 1
    })

    gsap.to("#beyond", {
        duration: 2,
        y: 0,
        opacity: 1
    })
}

window.addEventListener('load', playAnimation);
gsap.registerPlugin(ScrollToPlugin);

document.getElementById('section1btn').addEventListener('click', () => {
    gsap.to(window, {
        duration: 2, scrollTo: 0
    });
});

document.getElementById('section2btn').addEventListener('click', () => {
    gsap.to(window, {
        duration: 2, scrollTo: { y: "#section2", offsetY: 60 }
    });
});

document.getElementById('section3btn').addEventListener('click', () => {
    gsap.to(window, {
        duration: 2, scrollTo: { y: "#section3", offsetY: 60 }
    });
});

document.getElementById('section4btn').addEventListener('click', () => {
    gsap.to(window, {
        duration: 2, scrollTo: { y: "#section4", offsetY: 60 }
    });
});

document.getElementById('section5btn').addEventListener('click', () => {
    gsap.to(window, {
        duration: 2, scrollTo: { y: "#section5", offsetY: 60 }
    });
});



