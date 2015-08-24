if(!Function.prototype.bind) {
Function.prototype.bind = function(that){
    var self = this,
      args = arguments.length > 1 ? Array.slice(arguments, 1) : null,
      F = function(){};

    var bound = function(){
      var context = that, length = arguments.length;
      if (this instanceof bound){
        F.prototype = self.prototype;
        context = new F;
      }
      var result = (!args && !length)
        ? self.call(context)
        : self.apply(context, args && length ? args.concat(Array.slice(arguments)) : args || arguments);
      return context == that ? result : context;
    };
    return bound;
  };
}

AC = function(input,options) {
  this.input = input;
  this.active = -1;
  this.ackeydown = function(e) {
    //lastKeyPressCode = e.key;  Replacing Keys with numeric keyCodes to avoid issues out of case sensitivity
    lastKeyPressKeyCode = e.keyCode;
    /*if(!lastKeyPressCode) {
      if(e.keyCode == 8)
        lastKeyPressCode = "backspace";
      else if(e.keyCode == 38)
        lastKeyPressCode = "up";
      else if(e.keyCode == 40)
        lastKeyPressCode = "down";
      else if(e.keyCode == 9)
        lastKeyPressCode = "tab";
      else if(e.keyCode == 13)
        lastKeyPressCode = "enter";
      else if(e.keyCode == 27)
        lastKeyPressCode = "esc";
    }*/
    switch(lastKeyPressKeyCode) {   // Replacing Keys with numeric keyCodes to avoid issues out of case sensitivity
      case 8:
        var str = e.target.id;
        var patt = /i/;
        if(str.match(patt)){
          $(options.searchBox).focus();
        }
        this.updateList();
        break;
      case 38:
        e.preventDefault();
        this.moveSelect(-1);
        break;
      case 9:
        break;      
      case 40:
        e.preventDefault();
        this.moveSelect(1);
        break;
      case 13:
        e.preventDefault();
        if (this.selectCurrent(true)) {
          e.stopImmediatePropagation();
          return false;
        }
        break;
      case 27:
        hasFocus = false;
        this.hideResultsNow();
        e.preventDefault();
        break;
      default:
        this.updateList();
        break;
    }
  };
  this.updateList = function() {
    this.active =- 1;
    if(timeout)clearTimeout(timeout);
    timeout = setTimeout(function() { this.onChange(); }.bind(this),options.delay);
  };
  this.onChange=function(){
    if('delete'==lastKeyPressCode||'shift'==lastKeyPressCode)
      return $results.hide();
    var v = $input[0].value;
    if(v==prev)
      return;
    prev=v;
    if(v.length>=options.minChars){
      if(options.loadingClass)
        $input.addClass(options.loadingClass);
      this.requestData(v);
    }
    else {
      if(options.loadingClass)
        $input.removeClass(options.loadingClass);
      $results.hide();
    }
  };
  this.moveSelect = function(step) {
    if($results.is(":visible")) {
      var lis = $('.'+options.resultsClass+' li');
      if(!lis||lis.length==0)
        return;
      var lastActive = this.active;
      this.active += step;
      if(this.active==-1&&lastActive!=0) {
        this.active=lis.length;
        $input.val(prev);
        $input.focus();
      } else if(this.active==-1&&lastActive==0) {
        this.active=-1;
        $input.val(lis[lastActive].selectValue);
        $input.focus();
      } else if(this.active==-2&&lastActive==-1) {
        this.active = lis.length-1;
        $input.val(lis[this.active].selectValue);
        $(lis[this.active].firstChild).focus();
      } else if(this.active==lis.length) {
        this.active=-1;
        $input.val(lis[lastActive].selectValue);
        $input.focus();
      } else {
        $input.val(lis[this.active].selectValue);
        $(lis[this.active].firstChild).focus();
      }
    }
  };
  
  this.selectCurrent = function(fSubmit) {
    var selected = $('.' + options.resultsClass + ' li')[this.active];
    if (selected){
      this.selectItem(selected, fSubmit);
      return true;
    }else{
      return false;
    }
  };
  
  this.selectItem = function(li,fSubmit) {
    if(!li) {
      li=document.createElement("li");
      li.extra=[];
      li.selectValue="";
    }
    var v = (li.selectValue || li.innerText || li.text).trim();
    input.lastSelected=v;
    prev=v;
    $results.innerHTML="";
    $input[0].value=v;
    $input.focus();
    this.hideResultsNow();
    var searchForm=$(options.searchForm);
    searchForm.trigger('submitSearchForm',{ initiator:"autocomplete", target:this.input});
    $(options.submitButton).click();
  };
  this.createSelection = function(start,end) {
    var field = $input;
    if(field.createTextRange) {
      var selRange = field.createTextRange();
      selRange.collapse(true);
      selRange.moveStart("character",start);
      selRange.moveEnd("character",end);
      selRange.select();
    } else if(field.setSelectionRange) {
      field.setSelectionRange(start,end);
    } else {
      if(field.selectionStart) { 
        field.selectionStart=start;
        field.selectionEnd=end;
      }
    }
    field.focus();
  };
  this.autoFill = function(sValue) {
    if(lastKeyPressCode!='backspace') {
      $input.value=($input.value+sValue.substring(prev.length));
      this.createSelection(prev.length,sValue.length);
    }
  };
  this.hideResults = function() {
    if(timeout)
      clearTimeout(timeout);
    timeout=setTimeout(this.hideResultsNow,200);
  };
  this.hideResultsNow = function() {
    if(timeout)
      clearTimeout(timeout);
    if(options.loadingClass)
      $input.removeClass(options.loadingClass);
    if(document.activeElement != $input[0] && document.activeElement != $($submitBtn)[0]) {
      $($input).trigger('inactive');
    }
    $results.hide();
    if(options.mustMatch) {
      var v = $input.value;
      if(v!=input.lastSelected) {
        this.selectItem(null,false);
      }
    }
  };
  this.receiveData = function(q,data) {
    if(data) {
      if(options.loadingClass)
        $input.removeClass(options.loadingClass);
      results.innerHTML="";
      if(!hasFocus||data.length==0)
        return this.hideResultsNow();
      results.appendChild(this.dataToDom(data));
      if(options.autoFill&&($input.value.toLowerCase()==q.toLowerCase()))
        this.autoFill(data[0][0]);
      $results.show();
    } else {
      this.hideResultsNow();
    }
  };
  this.dataToDom = function(data) {
    var ul = document.createElement("ul");
    var num = data.length;
    if((options.maxItemsToShow>0)&&(options.maxItemsToShow<num))
      num=options.maxItemsToShow;
    for(var i=0;i<num;i++) {
      var row=data[i];
      if(!row)
        continue;
      var li=document.createElement("li");
      var res=this.formatItem(row,i,num,$input[0].value,options.categories);
      li.innerHTML=res.innerHTML;
      li.selectValue=res.selectValue;
      var extra=null;
      if(row.length>1) {
        extra=[];
        for(var j=1;j<row.length;j++) {
          extra[extra.length]=row[j];
        }
      }
      li.extra=extra;
      ul.appendChild(li);
      $(li).click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.selectItem(e.target,true);
      }.bind(this));
      li.children[0].id='i'+i;
      $(li.children[0]).keydown(this.ackeydown.bind(this));
      $(li.children[0]).mouseenter(function(e) { $(this).addClass('ac_focus'); });
      $(li.children[0]).mouseleave(function(e){ $(this).removeClass('ac_focus'); });
      $(li.children[0]).focus(function(e){
        e.preventDefault();
        $('.ac_focus').each(function() {
          $(this).removeClass('ac_focus');
        });
        $(this).addClass('ac_focus');
        hasFocus=true;
        ourIsFocused=true;
      });
      $(li.children[0]).blur(function(e){ 
        $(e.target).removeClass('ac_focus');
        ourIsFocused=false;
        if(timeoutDropdown)
          clearTimeout(timeoutDropdown);
        timeoutDropdown=setTimeout(function() {
          if(!ourIsFocused) {
            hasFocus=false;
            this.hideResults();
          }
        }.bind(this),100);
      }.bind(this));
      $(li.children[0]).mouseenter(function(e) {
        $input.focus();
        this.active = parseInt(e.target.id.substr(1,e.target.id.length));
        e.preventDefault();
      }.bind(this));
    }
    return ul;
  };
  this.requestData = function(q) {
    if(!options.matchCase)
      q=q.toLowerCase();
    var data=options.cacheLength?this.loadFromCache(q):null;
    if(data) {
      this.receiveData(q,data);
    } else if((typeof options.url=="string")&&(options.url.length>0)) {
      function blockListCreater(json) {
        if(!json)
          return;
        var term = json.data.QueryTerm;
        var data=[];
        for(var i=0;i<10;i++) {
          if(json.data.SuggestionItems[i])
            data[data.length]=[json.data.SuggestionItems[i].Suggestion];
        }
        if(data) {
          this.addToCache(q,data);
          if(data.length!=0&&data.length<options.matchSubsetIfLessThen) {
            fMatchCache=true;
          } else {
            fMatchCache=false;
          }
          if($input[0].value.toLowerCase().trim()==term.trim()) {
            this.receiveData(q,data);
          }
        }
      }

      SearchHttpRequest.get(options.url,{ q:encodeURI(q),lang:options.language },blockListCreater.bind(this));
    } else {
      if(options.loadingClass)
        $input.removeClass(options.loadingClass);
    }
  };
  this.loadFromCache = function(q) {
    if(!q)
      return null;
    if(cache.data[q])
      return cache.data[q];
    if(options.matchSubset||fMatchCache) {
      for(var i=q.length-1;i>=options.minChars;i--) {
        var qs=q.substr(0,i);
        var c=cache.data[qs];
        if(c) {
          var csub=[];
          for(var j=0;j<c.length;j++) {
            var x=c[j];
            var x0=x[0];
            if(this.matchSubset(x0,q)) {
              csub[csub.length]=x;
            }
          }
          return csub;
        }
      }
    }
    return null;
  };
  this.matchSubset = function(s,sub) {
    if(!options.matchCase)
      s=s.toLowerCase();
    var i=s.indexOf(sub);
    if(i==-1)
      return false;
    return i==0||options.matchContains;
  };
  this.flushCache = function() {
    cache={};
    cache.data={};
    cache.length=0;
  };
  this.setExtraParams = function(p) {
    options.extraParams=p;
  };
  this.addToCache = function(q,data) {
    if(!data||!q||!options.cacheLength)
      return;
    if(!cache.length||cache.length>options.cacheLength) {
      this.flushCache();
      cache.length++;
    } else if(!cache[q]) {
      cache.length++;
    }
    cache.data[q]=data;
  };
  this.formatItem = function(row,i,num,inputvalue,categories) {
    for(var c=0;c<categories.length;c++) {
      var cIndex=row[0].indexOf(categories[c][0]);
      if(cIndex!=-1) {
        var firstPart=row[0].substr(0,cIndex);
        var woInFirstPart=row[0].substr(0,cIndex-3);
        var inw=row[0].substr(cIndex-3,3);
        row[0]=woInFirstPart+'<span class="ac_green">'+inw+categories[c][1]+'</span>';
        row[1]=categories[c][0];
        row[2]=woInFirstPart.trim();
        row[3]=firstPart+categories[c][1];
        break;
      }
    }
    var title=row[0];
    if(!row[3]) {
      row[3]=row[0];
    }
    var index=title.toLowerCase().indexOf(inputvalue.toLowerCase());
    var len=inputvalue.length;
    var html="<a href='javascript:void(0);'>"+title.substr(0,index)+'<span>'+title.substr(index,len)+'</span>'+title.substr(index+len)+'</a>';
    return { selectValue:row[3],innerHTML:html };
  };
  var me=this;
  var actype;
  var okflag=false;
  var err='';
  var $input=$(input).prop("autocomplete","off");
  var $submitBtn=options.submitButton;
  if(options.inputClass)
    $input.addClass(options.inputClass);
  var results=document.createElement("div");
  var $results=$(results);
  $results.hide().addClass(options.resultsClass).addClass(options.resultsStyleClass).css('position','absolute');
  $results.css('width',(options.width||parseInt(parseInt(input.offsetWidth)-2))+"px");
  $input.parent().append(results);
  input.autocompleter=me;
  var timeout=null;
  var prev="";
  var cache={};
  var keyb=false;
  var hasFocus=false;
  var lastKeyPressCode=null;
  var fMatchCache=false;
  var ourIsFocused=false;
  var timeoutDropdown;
  this.flushCache();
  if(options.data!=null) {
    var sFirstChar="",stMatchSets={},row=[];
    if(typeof options.url!="string")
      options.cacheLength=1;
    for(var i=0;i<options.data.length;i++) {
      row=((typeof options.data[i]=="string")?[options.data[i]]:options.data[i]);
      if(row[0].length>0) {
        sFirstChar=row[0].substring(0,1).toLowerCase();
        if(!stMatchSets[sFirstChar])
          stMatchSets[sFirstChar]=[];
        stMatchSets[sFirstChar].push(row);
      }
    }
    for(var k in stMatchSets) {
      options.cacheLength++;
    }
  };
  $input.keydown(function(e) { 
    this.ackeydown.call(this,e);
  }.bind(this));
  $input.keydown(function(event) {
    if(event.charCode == 13)//"enter" key pressed
      this.hideResultsNow();
  }.bind(this));
  $input.focus(function() {
    hasFocus=true;
    ourIsFocused=true;
    $('#'+this.id).trigger('active');
  });
  $input.blur(function(e) {
    ourIsFocused=false;
    if(timeoutDropdown)
      clearTimeout(timeoutDropdown);
    timeoutDropdown=setTimeout(function() {
      if(!ourIsFocused) {
        hasFocus=false;
        this.hideResults();
      }
      if(!$results.is(":visible") && document.activeElement != $input && document.activeElement != $submitBtn) {
        $input.trigger('inactive');
      }
    }.bind(this),150);
  }.bind(this));
  if($submitBtn) {
    $($submitBtn).blur(function(e) {
      setTimeout(function() {
        if(!$results.is(":visible") && document.activeElement != $input) {
          $input.trigger('inactive');
        }
      },1);
    }.bind(this));
  }
  if(options.focusOnMouseEnter) {
    $input.mouseenter(function(e) {
      $input.focus();
      e.preventDefault();
    });
  }
  this.hideResultsNow();
};

var SearchHttpRequest = {
  get:function(url,params,callback) {
    var process=true,sid='sid'+parseInt(Math.random()*1000000),cb='cb=SearchHttpRequest.callback.'+sid,script=document.createElement('script');
    script.type='text/javascript';
    if(params) {
      var sep='';
      url+="?";
      for(var name in params){ 
        url+=sep+name+'='+params[name];sep='&';
      }
    }
    if(url.indexOf('?')==-1)
      script.src=url+'?'+cb;
    else if(url.match(/\?[\w\d]+/))
      script.src=url+'&'+cb;
    else
      script.src=url+cb;

    SearchHttpRequest.callback[sid]=function(response){
      process=false;
      callback(response);
    };
    script.onerror = script.onload = script.onreadystatechange = function(e){
      if(!this.loaded && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        this.loaded=1;
        this.onerror=this.onload=this.onreadystatechange=null;
        if(process) {
          callback(false);
        } else {}
        this.parentNode.removeChild(this);
        delete script;
        delete SearchHttpRequest.callback[sid];
      }
    };
    if(document.getElementsByTagName('head').length) {
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      document.appendChild(script);
    }
  },callback:{}};

function autocomplete_start(cats,fastendpoint,opt) {
  
  var langInput;
  
  try{
    langInput = opt.language || $('input[name="lang"]').val() || 'en';
  }catch(err){
    langInput = "en";
  }
  
  var options = {
    matchSubset:0,
    matchSubsetIfLessThen:10,
    matchContains:1,
    cacheLength:1,
    minChars:2,
    delay:100,
    categories:cats,
    url:fastendpoint,
    data:null,
    searchForm:opt.searchForm||"#searchHP",
    searchBox:opt.searchBox||"#searchBox",
    submitButton:opt.submitButton||"#submitButton",
    inputClass:opt.inputClass||"ac_input",
    resultsClass:opt.resultsClass||"js_ac_results",
    resultsStyleClass:opt.resultsStyleClass||"ac_results_supp",
    lineSeparator:opt.lineSeparator||"\n",
    cellSeparator:opt.cellSeparator||"|",
    matchCase:opt.matchCase||0,
    mustMatch:opt.mustMatch||0,
    extraParams:opt.extraParams||{},
    selectFirst:opt.selectFirst||false,
    selectOnly:opt.selectOnly||false,
    focusOnMouseEnter:opt.focusOnMouseEnter||false,
    maxItemsToShow:opt.maxItemsToShow||-1,
    autoFill:opt.autoFill||false,
    width:opt.width||0,
    language:langInput
  };
  return new AC($(options.searchBox),options);
}

function getSearchContainerWidth(searchBox) {
  var searchBox = $(searchBox);
  if(searchBox) {
    var elementWidth = searchBox.outerWidth(false);

    var borderWidth = parseInt(searchBox.css("border-left-width"), 10);
    if(borderWidth != 'NaN')
      elementWidth -= borderWidth;

    borderWidth = parseInt(searchBox.css("border-right-width"), 10);
    if(borderWidth != 'NaN')
        elementWidth -= borderWidth;

    return elementWidth;
  }
  return 0;
}

$(document).ready(function(){

  var lang = getURLParameter("lc");
  
  if(lang == "zh-hant") {
    lang = "zht";
  } else if(lang == "zh-hans") {
    lang = "zhs";
  }

  var cats = [
    ["PRODUCTS_AND_SERVICES","Products &amp; Services"],
    ["SUPPORT_AND_DRIVERS","Support &amp; Drivers"],
    ["LEARN_USE_AND_CREATE","Learn, Use &amp; Create"],
    ["COMMUNITY","Community"],
    ["ABOUT_HP","About HP"],
    ["ALL_RESULTS","All Results"]];

  var acWidth = getSearchContainerWidth($("#qryId"));
  var acWidth2 = getSearchContainerWidth($("#qryId2"));
  var pnameIdWidth = $("#pnameId2").width();
  if(pnameIdWidth != null) {
	  if(pnameIdWidth.toFixed() == 200){  // Fix for ALM 4462
	    acWidth2 = 216;
	  }else if(pnameIdWidth.toFixed() == 265){
	    acWidth2 = 281;
	  }
  }
  var acWidth3 = getSearchContainerWidth($("#qt"));

  autocomplete_start(cats,"http://iapproautocm.austin.hp.com/hp-iap-autocomplete/search",{searchForm:"#searchHP",searchBox:"#qryId",submitButton:"#headerSearchSubmit", resultsClass: "resultsList", width:acWidth,language:lang});
  autocomplete_start(cats,"http://iapproautocm.austin.hp.com/hp-iap-autocomplete/search",{searchForm:"#twoBoxSearch2",searchBox:"#qryId2",submitButton:"#rightSearchSubmit", resultsClass: "resultsList1", width:acWidth2,language:lang});
  autocomplete_start(cats,"http://iapproautocm.austin.hp.com/hp-iap-autocomplete/search",{searchForm:"#prodfinder",searchBox:"#qt",submitButton:"#Continue", resultsClass: "resultsList2", width:acWidth3,language:lang});

});
