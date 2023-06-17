
gsap.to("#bottle", {
    scrollTrigger: {
        trigger: "#page3",
        start: "bottom 20%",
        end: "bottom 10",
        // markers: true,
        scrub: 1.5
    },
    // duration:10,
    opacity: 0,
    x: "-20%",
})

gsap.to("#bottle", {
    scrollTrigger: {
        trigger: "#page1",
        start: "bottom 90%",
        end: "bottom 10",
        // markers: true,
        scrub: 1.5
    },
    rotate: "-15deg",
    duration:1.5,
    // opacity: 0
})

gsap.to("#img2",{
    scrollTrigger: {
        trigger: "#page3",
        start: "bottom 10%",
        // markers: true,   
        scrub: 1.5
    },
    opacity:1
})