var p0 = new TimelineMax({onUpdate:updatePercentage});
// var p1 = new TimelineMax();
const controller = new ScrollMagic.Controller();

p0.from('.plan_img_bg', .5, {x:-100, opacity: 0});

const scene = new ScrollMagic.Scene({
    triggerElement: ".plan_list",
    triggerHook: "onLeave",
    duration: "100%"
})
    // .setPin(".sticky")
    .setTween(p0)
	.addTo(controller);

function updatePercentage() {
  p0.progress();
//   p1.progress();
//   t3.progress();
//   t4.progress();


}
