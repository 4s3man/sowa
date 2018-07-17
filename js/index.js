// identify the elements
var el1 = document.querySelector('.box1');
var el2 = document.querySelector('.box2');
var el3 = document.querySelector('.box3');
var el4 = document.querySelector('.box4');

// built the tween objects
var tween1 = KUTE.fromTo(el1,{rotate:0},{rotate:720},{duration: 1500});
var tween2 = KUTE.fromTo(el2,{rotateX:0},{rotateX:360},{duration: 1500});
var tween3 = KUTE.fromTo(el3,{rotateY:0},{rotateY:360}, {perspective:400, duration: 1500} );
var tween4 = KUTE.fromTo(el4,{rotateZ:0},{rotateZ:-360},{duration: 1500});

// start the animation
tween1.start();
tween2.start();
tween3.start();
tween4.start();