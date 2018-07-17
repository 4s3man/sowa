var Animation = function(){
  this.animation = {
    to: [],
    allTo: [],
    fromTo: [],
    allFromTo: []
  }
  this.tweens = [];
  this.models = [];
  this.addModels = function(obiects){
    for (var i = 0; i < obiects.length; i++) {
      let element = document.querySelector(obiects[i]);
      this.models[obiects[i]] = element.cloneNode(true);
    }
  }
  this.addTo = function(name, obj, end, options=null){
    this.animation['to'][name] = {
      element: obj,
      end: end,
      options: options,
    }
  }
  this.addAllTo = function(name, obj, end, options=null){
    this.animation['allTo'][name] = {
      element: obj,
      end: end,
      options: options,
    }
  }
  this.addFromTo = function(name, obj, start, end, options=null){
    this.animation['fromTo'][name] = {
      element: obj,
      start: start,
      end: end,
      options: options,
    }
  }
  this.addAllFromTo = function(name, obj, start, end, options=null){
    this.animation['allFromTo'][name] = {
      element: obj,
      start: start,
      end: end,
      options: options,
    }
  }
  this.makeTweens = function(){
    for (var type in this.animation) {
      var tweens = this.animation[type];
      this.makeTween(tweens, type);
    }
  },
  this.makeTween = function(tweens, type){
    for (var name in tweens) {
      var current = tweens[name];
      switch (type) {
        case 'to':
            this.tweens[name] = KUTE.to(current.element, current.end, current.options);
          break;
        case 'allTo':
            this.tweens[name] = KUTE.allTo(current.element, current.end, current.options);
        break;
        case 'fromTo':
            this.tweens[name] = KUTE.fromTo(current.element, current.start, current.end, current.options);
          break;
        case 'allFromTo':
            this.tweens[name] = KUTE.allFromTo(current.element, current.start, current.end, current.options);
        break;
        default:

        break;
      }
    }
  }
  this.animationReload = function(){
    let s = this.tweens;
    for (let key in s) {
      if (s.hasOwnProperty(key)) {
          if(s[key].playing)s[key].stop();
          s[key].paused = true;
      }
    }
    for (let key in this.models) {
      if (this.models.hasOwnProperty(key)) {
        element = document.querySelector(key);
        let cloned = this.models[key].cloneNode(true);
        element.parentNode.replaceChild(cloned, element);
      }
    }
  }
}
