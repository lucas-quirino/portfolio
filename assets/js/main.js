function openNav() {
    document.getElementById("nav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("nav").style.height = "0%";
  }



gsap.registerPlugin(ScrollTrigger);

// You can use a ScrollTrigger in a tween or timeline
gsap.to("#svg-title", {
    yPercent: 10,
    scaleY: 1.18,
    scrollTrigger: {
      trigger: "#svg-title",
      start: "500px 480px",
      end: "300px 100px",
      scrub: true,
      // markers: true,
    }
  });


var tl = gsap.timeline({delay: 0});
        tl.from("#svg-title", {yPercent: -400, scaleY: 9,  ease: "back.out(1.8)", duration: 1}, 0),
        tl.from(".scroll-tx-right", {xPercent: 200,  ease: "back.out(.7)", duration: 1.4}, 0);
        tl.from(".scroll-tx-left", {xPercent: -200,  ease: "back.out(.7)", duration: 1.4}, 0);
        tl.from("#menu-btn", {xPercent: 200,  ease: "back.out(.7)", duration: 1}, 0);





gsap.set("#cursor-ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector("#cursor-ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {

  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});
