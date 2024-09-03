gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo", {
    scrollTrigger:{
        trigger: ".logo",
        start: "top 50%",
        markers: true,
    }
})