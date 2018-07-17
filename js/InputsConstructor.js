function InputsConstructor(obiekt){
  this.obiekt = obiekt;
  this.animation = obiekt.animation;
  this.controllSection = $('#JS_controlls');
  this.form = $('<form>').attr({id:'TweenControll_Form'});
  this.dontShow = [
    'easing','chain','rpr','attr'
  ];
  this.propertiesWitchObjectValues = [
    'attr'
  ];

  this.makeForm = function(){
    var formElements = [];
    formElements.push(this.createInput_select());
    this.appendArrTo(formElements, this.form);
    this.form.appendTo(this.controllSection);
  }

  this.appendArrTo = function( arr, elem ){
    for (var i = 0; i < arr.length; i++) {
      arr[i].appendTo(elem);
    }
  }
  this.createInput_select = function(){
    var input = $('<select>').attr({id:'tweenSelect'});
    for (var type in this.animation) {
      var current = this.animation[type];
      for(var name in current){
        $('<option>').attr({
          value:name,
          tweenType:type,
        }).html(name).appendTo(input);
      }
    }
    return input;
  }
  this.createInput_submit = function(id,val) {
    var submit = $('<input>').attr({id:id, type:'submit', value:val});
    submit.click(function(event){
      event.preventDefault();
    });
    return submit;
  }
  this.tweenForm = null,
  this.showSelectedTween = function(){
    var type = $('#tweenSelect option:selected').attr('tweentype'),
        Ivalue = $('#tweenSelect option:selected').val(),
        animation = this.animation[type][Ivalue],
        duration = animation['options']['duration'],
        tweenForm = $('<form>').attr({id:'optionForm',class:'tweenForm'}).html('Animowany element: ' + animation['element']);


        let wholeDuration = [];
        wholeDuration[0] = $('<input>').attr({type:'range', value:50, max:101, min:1, id:'wholeDuration'});
        wholeDuration[1] = $('<div>').attr({id:'wholeDurationDisplay'}).html(0);
        this.appendArrWithWrapper(wholeDuration, 'Whole X times slower', tweenForm);

        let durationElem = [];
        durationElem[0] = $('<input>').attr({type:'range', value:duration, max:10000, min:1, id:'duration'});
        durationElem[1] = $('<div>').attr({id:'durationDisplay'}).html(duration);
        this.appendArrWithWrapper(durationElem, 'Current Tween duration', tweenForm);

      tweenForm.appendTo(this.controllSection);
      this.createInput_submit('update','update').appendTo(tweenForm);

      $('#duration').on('mousemove', function () {
        $('#durationDisplay').html(this.value);
      });
      $('#wholeDuration').on('mousemove', function () {
        $('#wholeDurationDisplay').html(this.value-51);
      });

      $('#update').click(function(){
        $('#wholeDuration, #duration, #Uopt').each(function(index){
          if(this.value){
            switch (this.id) {
              case 'duration':
                  if(undefined != obiekt.animation[type][Ivalue].options.duration)obiekt.animation[type][Ivalue].options.duration = this.value;
                break;
              case 'wholeDuration':
              for (let Ttype in obiekt.animation) {
                let currentType = obiekt.animation[Ttype];
                for (var Tvalue in currentType) {
                  if(undefined != obiekt.animation[Ttype][Tvalue].options.duration)obiekt.animation[Ttype][Tvalue].options.duration = obiekt.animation[Ttype][Tvalue].options.duration * this.value/50;
                }
              }

                break;
              case 'Uopt':
                  obiekt.animation[type][value].opt = obj;
                break;
              default:
            }
          }
        });
        obiekt.animationReload();
        start();
      });
  }
  this.appendArrWithWrapper = function(inputs, name, form){
    if(inputs){
      let wrap = $('<div>').attr({class:name}).html('<h2>' + name + '</h2>');
      this.appendArrTo(inputs, wrap);
      wrap.appendTo(form);
    }
  }
  this.getFromJSON = function(obj){
    var wrappers = [];
    for (var key in obj) {
      let current = obj[key],
          inputWrap = $('<div>').attr({class:'inputWrap'});
        if(current instanceof Array){
          $('<label>').attr({class:'keyValue',}).html(key).appendTo(inputWrap);
          this.appendArrTo(this.makeInputElementsArr(current), inputWrap);
          inputWrap.appendTo(this.controllSection);
        }
        else if (current instanceof Object) {
          $('<input>').attr({class:'objKey',type:'hidden', value:key}).appendTo(inputWrap);
          this.appendArrTo(this.makeInputElementsArr(current), inputWrap);
          inputWrap.appendTo(this.controllSection);
        }
        else {
          let elemArr = [];
          elemArr[0] = $('<label>').attr({class:'keyValue',}).html(key),
          elemArr[1] = $('<input>').attr({class:'value', value:current});
          this.appendArrTo(elemArr, inputWrap);
        }
      wrappers.push(inputWrap);
    }
    return wrappers;
  }
  this.makeInputElementsArr = function(obj){
    var elementsArr = [];
    for (var key in obj) {
      var current = obj[key],
          label = $('<label>').attr({class:'keyValue',}).html(key),
          input = $('<input>').attr({class:'value', value:current});
      if(obj instanceof Array);
      else elementsArr.push(label);
      elementsArr.push(input);
    }
    return elementsArr;
  }
  this.makeUpdateInputs = function(type, text, id, value){
    let inputs = [];
      inputs[0] = $('<label>').html(text);
      inputs[1] = $('<input>').attr({type:type, id:id});
    return inputs;
  }
}
