var tl = new TimelineMax({onUpdate:updatePercentage});
var t0 = new TimelineMax();
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
var t5 = new TimelineMax();
const controller = new ScrollMagic.Controller();

t0.from('blockquote', .5, {x:-100, opacity: 0});
tl.from('#event01', .8, {x:-200, opacity: 0});
tl.from('#event02', .8, {x:200, opacity: 0});
tl.from('#etext01', .6, {y:-280, opacity: 0, ease: Power2.easeInOut}, "=-.7");
tl.from('#etext02', .6, {y:280, opacity: 0, ease: Power4.easeInOut}, "=-.7");
t2.from('#button01', 1, {x:-140, opacity: 0,ease: Power1.easeInOut}, "=-.7");
t2.from('#button02', 1, {x:140, opacity: 0,ease: Power1.easeInOut}, "=-.7");
t3.from('blockquote2', 1, {x:-100, opacity: 0});
t4.from('#news01', 1, {x:-350, opacity: 0,ease: Power4.easeInOut}, "=-1");
t4.from('#news02', 1, {x:350, opacity: 0,ease: Power4.easeInOut}, "=-1");
t4.from('#ntext01', 1, {y:-300, opacity: 0,ease: Power4.easeInOut}, "=-.5");
t4.from('#ntext02', 1, {y:300, opacity: 0,ease: Power4.easeInOut}, "=-.5");
t5.from('#button03', 1, {x:-350, opacity: 0,ease: Power1.easeInOut}, "=-1");
t5.from('#button04', 1, {x:350, opacity: 0,ease: Power1.easeInOut}, "=-1");


const scene = new ScrollMagic.Scene({
    triggerElement: ".events_title",
    triggerHook: "onLeave",
    duration: "150px"
})
    .setTween(tl)
	.addTo(controller);

const scene0 = new ScrollMagic.Scene({
    triggerElement: ".events_title",
})
    .setTween(t0)
	.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#button02",
})
    // .setPin(".sticky")
    .setTween(t2)
	.addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".news_title",
})
    // .setPin(".sticky")
    .setTween(t3)
	.addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".news_title",
})
    // .setPin(".sticky")
    .setTween(t4)
	.addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: "#button04",
})
    // .setPin(".sticky")
    .setTween(t5)
	.addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  t2.progress();
  t3.progress();
  t4.progress();
  t5.progress();

    //console.log(tl.progress());
    //console.log(t2.progress());
    //console.log(t3.progress());

}
