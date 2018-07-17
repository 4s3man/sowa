var element = document.querySelector("#svg8");
var cloneElement = element.cloneNode(true);

var now = window.performance.now();
var sowa = new Animation();
sowa.addModels(['#svg8']);
//ADD TO ANIMATION

var sowaUp_easing = 'easingQuadraticInOut';
var oddechT = 2500;
var mucha_m1T = 500;

  sowa.addTo(
    'calaSowa_Set',
    '#g1028',
    {translate:[-3,21]},
    {duration:1}
  );
  sowa.addTo(
    'oddech_lewa',
    '#path4643',
    {path:'#path990'},
    {yoyo:true, repeat:Infinity, duration:oddechT, morphPrecision:2}
  );
  sowa.addFromTo(
    'oddech-lewa_cien1',
    '#path26935',
    {opacity:1},
    {opacity:0},
    {duration:oddechT, yoyo:true, repeat:Infinity}
  );
  sowa.addFromTo(
    'oddech-lewa_cien2',
    '#path1000',
    {opacity:0},
    {opacity:1},
    {duration:oddechT, yoyo:true, repeat:Infinity}
  );
  sowa.addTo(
    'oddech_prawa',
    '#path994',
    {path:'#path1016'},
    {yoyo:true, repeat:Infinity, duration:oddechT, morphPrecision:2}
  );
  sowa.addFromTo(
    'oddech-prawa_cien1',
    '#path26933',
    {opacity:1},
    {opacity:0},
    {duration:oddechT, yoyo:true, repeat:Infinity}
  );
  sowa.addFromTo(
    'oddech-prawa_cien2',
    '#path1006',
    {opacity:0},
    {opacity:1},
    {duration:oddechT, yoyo:true, repeat:Infinity}
  );

  sowa.addAllFromTo(
    'oddech-srodek_cien1',
    '#path26927, #path26931, #path26929',
    {opacity:1},
    {opacity:0},
    {duration:oddechT, yoyo:true, repeat:Infinity}
  );
  sowa.addAllFromTo(
    'oddech-srodek_cien2',
    '#path1021, #path1017, #path1019',
    {opacity:0},
    {opacity:1},
    {duration:oddechT, yoyo:true, repeat:Infinity}
  );
  sowa.addAllTo(
    'brwi_Down',
    '#path21289-3, #path21287-3',
    { svgTransform: { translate:[0,2] }},
    {duration:3000}
  );
  sowa.addAllTo(
    'powieka_50',
    '#linearGradient1074, #linearGradient1044',
    {attr: {x1:'147.499%', y1:'40.592%', x2:'147.419%', y2:'41.569%'}},
    {duration:5000, easing: 'easingElasticInOut'}
  );
  sowa.addAllFromTo(
    'powieka_100',
    '#linearGradient1074, #linearGradient1044',
    {attr: {x1:'147.499%', y1:'40.592%', x2:'147.419%', y2:'41.569%'}},
    {attr: {x1:'124.907%', y1:'42.979%', x2:'124.845%', y2:'43.732%'}},
    {duration:1000, easing:'linear'}
  );
  sowa.addFromTo(
    'lewaPowieka_50',
    '#linearGradient1044',
    {attr: {x1:'124.907%', y1:'42.979%', x2:'124.845%', y2:'43.732%'}},
    {attr: {x1:'147.499%', y1:'40.592%', x2:'147.419%', y2:'41.569%'}},
    {duration:700, easing:'easingCubicOut'}
  );
  sowa.addFromTo(
    'lewaPowieka_dol',
    '#linearGradient1044',
    {attr: {x1:'147.499%', y1:'40.592%', x2:'147.419%', y2:'41.569%'}},
    {attr: {x1:'124.907%', y1:'42.979%', x2:'124.845%', y2:'43.732%'}},
    {duration:1000}
  );
  sowa.addTo(
    'mucha1_Blink',
    '#g1090',
    {opacity:0},
    {duration:50, repeat:Infinity, yoyo:true}
  );
  sowa.addFromTo(
    'mucha2_Blink',
    '#g1098',
    {opacity:0},
    {opacity:1},
    {duration:50, repeat:Infinity, yoyo:true}
  );
  sowa.addTo(
    'mucha_pre',
    '#g993',
    {},
    {duration:8000}
  );
  sowa.addTo(
    'pole_pre',
    '#radialGradient1016',
    {},
    {duration:8500}
  );
  sowa.addTo(
    'pole_pre1',
    '#radialGradient1016',
    {},
    {duration:8800}
  );
  sowa.addTo(
    'mucha_przylot',
    '#g993',
    {svgTransform:{rotate:-20, translate:[50,-30]}},
    {duration:mucha_m1T, transformOrigin:'0%, 10%'}
  );
  sowa.addTo(
    'mucha_odbicie',
    '#g993',
    {svgTransform:{rotate:10, translate:[5,-20]}},
    {duration:100}
  );
  sowa.addTo(
    'mucha_wait1',
    '#g993',
    {},
    {duration:500}
  );
  sowa.addTo(
    'mucha_gora',
    '#g993',
    {svgTransform:{rotate:10, translate:[0,-40]}},
    {duration:200, easing:'easingCubicOut'}
  );
  sowa.addTo(
    'mucha_wait2',
    '#g993',
    {},
    {duration:1200}
  );
  sowa.addTo(
    'mucha_dol',
    '#g993',
    {svgTransform:{ translate:[0,30]}},
    {duration:200, easing:'easingCubicOut'}
  );
  sowa.addTo(
    'mucha_wait3',
    '#g993',
    {},
    {duration:1200}
  );
  sowa.addTo(
    'mucha_tyl',
    '#g993',
    {svgTransform:{ translate:[50,-20]}},
    {duration:200, easing:'easingCubicOut'}
  );
  sowa.addTo(
    'mucha_wait4',
    '#g993',
    {},
    {duration:2000}
  );
  sowa.addTo(
    'mucha_odlot',
    '#g993',
    {svgTransform:{ translate:[200,50]}},
    {duration:200, easing:'easingCubicOut'}
  );
  sowa.addFromTo(
    'pole_In',
    '#radialGradient1016',
    {attr: {cx:"191.56073", cy:"-43.738079", fx:"191.56073", fy:"-43.738079"}},
    {attr: {cx:"199.17686", cy:"26.689135", fx:"199.17686", fy:"26.689135"}},
    {duration:1000, easing:'easingCubicOut' }
  );
  sowa.addTo(
    'pole_Out',
    '#path995',
    {opacity:0},
    {duration:2000}
  );
  sowa.addTo(
    'oko_lewo',
    '#g1074',
    { svgTransform:{ translate:[1,0] } },
    {duration:1000, easing:'easingCubicOut'}
  );
  sowa.addTo(
    'oko_wait',
    '#g1074',
    { },
    {duration:1500}
  );
  sowa.addFromTo(
    'oko_powrot',
    '#g1074',
    { svgTransform:{ translate:[1,0] } },
    { svgTransform:{ translate:[0,0] } },
    {duration:2000}
  );
  sowa.addTo(
    'calaSowa_wait',
    '#g1028',
    {},
    {duration:5000}
  );
  sowa.addTo(
    'calaSowa_Up',
    '#g1028',
    {translate:[-3,-21]},
    {duration:5000, easing:sowaUp_easing}
  );
  sowa.addFromTo(
    'calaSowa_Levitate',
    '#g1028',
    {translate:[-3,-21]},
    {translate:[-3,-10]},
    {yoyo:true, repeat:Infinity, duration:2500} //2500
  );
  sowa.addTo(
    'cien_Up',
    '#path860',
    {svgTransform:{scale:0.7}},
    {duration:5000, easing:sowaUp_easing}
  );
  sowa.addTo(
    'cien_Levitate',
    '#path860',
    {svgTransform:{scale:0.85}},
    {duration:2500, repeat:Infinity, yoyo:true}
  );

function start() {

sowa.makeTweens();
var s = sowa.tweens;

//TWEENS ORDER
s['oddech_lewa'].start();
s['oddech-lewa_cien1'].start();
s['oddech-lewa_cien2'].start();

s['oddech_prawa'].start();
s['oddech-prawa_cien1'].start();
s['oddech-prawa_cien2'].start();

s['oddech-srodek_cien1'].start();
s['oddech-srodek_cien2'].start();

s['calaSowa_Set'].start();
s['powieka_50'].start();
s['powieka_50'].chain(s['powieka_100']);
s['powieka_50'].chain(s['powieka_100'], s['brwi_Down']);;

s['mucha1_Blink'].start();
s['mucha2_Blink'].start();

s['calaSowa_Set'].chain(s['mucha_pre'], s['pole_pre'], s['pole_pre1']);
s['mucha_pre'].chain(s['mucha_przylot']);
s['pole_pre'].chain(s['pole_In'], s['lewaPowieka_50'], s['oko_lewo']);

s['oko_lewo'].chain(s['oko_wait']);
s['oko_wait'].chain(s['oko_powrot']);
s['oko_powrot'].chain(s['lewaPowieka_dol']);
s['lewaPowieka_dol'].chain(s['calaSowa_wait']);
s['calaSowa_wait'].chain(s['calaSowa_Up'], s['cien_Up']);
s['calaSowa_Up'].chain(s['calaSowa_Levitate'], s['cien_Levitate']);

s['pole_pre1'].chain(s['pole_Out']);

s['mucha_przylot'].chain(s['mucha_odbicie']);
s['mucha_odbicie'].chain(s['mucha_wait1']);
s['mucha_wait1'].chain(s['mucha_gora']);
s['mucha_gora'].chain(s['mucha_wait2']);
s['mucha_wait2'].chain(s['mucha_dol']);
s['mucha_dol'].chain(s['mucha_wait3']);
s['mucha_wait3'].chain(s['mucha_tyl']);
s['mucha_tyl'].chain(s['mucha_wait4']);
s['mucha_wait4'].chain(s['mucha_odlot']);
}
start();
//MAKE INPUTS
var frost = {};
var dono = new InputsConstructor(sowa, frost);
dono.makeForm();
dono.showSelectedTween();
$('#tweenSelect').on('click',function(){
  if($('#optionForm').length)$('#optionForm').remove();
  dono.showSelectedTween();
});
