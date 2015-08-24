
jQuery.getJShost=function(param){var JShost;jQuery("script").each(function(){if(jQuery(this).attr("src")){var src=jQuery(this).attr("src");if(src.indexOf(param)>-1){JShost=src.match(/^http:\/\/[^/]+/);return false;}}});return JShost;}
jQuery.getURLparam=function(param){param=param.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var r1="[\\?&]"+param+"=([^&#]*)";var r2=new RegExp(r1);var r3=r2.exec(window.location.href);if(r3==null)return"";else return r3[1];};jQuery.cutURLparam=function(param,url){var urlparts=url.split('?');if(urlparts.length>=2){var prefix=encodeURIComponent(param)+'=';var pars=urlparts[1].split(/[&;]/g);for(var i=pars.length;i-->0;){if(pars[i].indexOf(prefix,0)==0){pars.splice(i,1);}}
if(pars.length>0){return urlparts[0]+'?'+pars.join('&');}
else{return urlparts[0];}}
else{return url;}}
jQuery.cookie=function(key,value,options){if(arguments.length>1&&String(value)!=="[object Object]"){options=jQuery.extend({},options);if(value===null||value===undefined){options.expires=-1;}
if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}
value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
options=value||{};var result,decode=options.raw?function(s){return s;}:decodeURIComponent;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null;};

/*
Date: 11/17/2011 1:06:20 AM
All images published
*/