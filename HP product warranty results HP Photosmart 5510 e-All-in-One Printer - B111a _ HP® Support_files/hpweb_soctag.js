if(document.location.protocol=="https:"){var soc_protDir="https://secure.hp-ww.com/";}else{var soc_protDir="http://welcome.hp-ww.com/";}
if(!window.encodeURIComponent){var soc_page_url=location.href;var soc_pageTitle=document.title;var soc_pageDesc=soc_getDesc();}else{var soc_page_url=encodeURIComponent(location.href);var soc_pageTitle=encodeURIComponent(document.title);var soc_pageDesc=encodeURIComponent(soc_getDesc());}
var soc_placeHldrArr=new Array();var social_checkTitleCounter=new Array();var social_showEng=true;var social_localExists=new Array();var scriptloaded=false;var dynamicURL=false;var social_jsonLocal=0;var social_jsonList=0;var social_permalink=location.href;var social_permalink_assgn=false;var soc_numMenus=1;var soc_linkID=0;var soc_listLoaded=false;var soc_filledFlags=new Array();var soc_titles=new Array();var soc_desc=new Array();var soc_permalinks=new Array();var soc_layerTitle="Share or Tag with:";var soc_linkTitle="View tagging links &ndash; opens a pop-up layer on this page";var soc_layerStart="Start of Social Tagging links popup layer ";var soc_closeAct="Close";var soc_closeActScrn=" pop-up layer";var soc_openMsg="These links open in new window";var soc_layerEnd="End of Social Tagging links popup layer";var soc_permalinkpopup=soc_protDir+"country/us/en/soctag/hpweb_permalink.html";var soc_listURLdef=soc_protDir+"country/us/en/js/hpweb_soctag_list.js";

var soc_listURL="";document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\""+soc_protDir+"styles/hpweb_soctag.css"+"\">");document.write('<!--[if IE 5]>\n<style>\n.social_contentBlock{margin-top:15px;padding-left: 10px;width: 100%;overflow:auto;padding-bottom:5px;}\n.social_column{float:left;margin:0px; padding-right:10px;width:120px;}\n</style>\n<![endif]-->\n');

var agt=navigator.userAgent.toLowerCase();

var is_aol7=(agt.indexOf('aol/7')!=-1);
var is_opera=(agt.indexOf('opera')!=-1);
var is_ie5=(agt.indexOf('msie 5')!=-1);
var is_safari=(agt.indexOf('safari')!=-1);
var is_moz17=(agt.indexOf('mozilla/5')!=-1)&&(agt.indexOf('1.7')!=-1);
var is_netscape71=(agt.indexOf('netscape/7.1')!=-1);

//New variable added for Firefox 3.0 Support
var is_firefox= (agt.indexOf('firefox/3.')!=-1);


if(is_safari){
	document.write('<style type="text/css">.social_screenReading{FONT-SIZE:0px;OVERFLOW:hidden; WIDTH:0px;POSITION:absolute;HEIGHT:0px;display:none;}</style>\n');
	}
if(is_moz17||is_netscape71)
{
	document.write('<style type="text/css">.social_menu_style{width:404px;}</style>\n');
	}

if(is_aol7){
document.write('<style type="text/css">.social_menu_style{width:404px;} .social_contentBlock{margin-top:15px;padding:0; width:100%;overflow:visible;padding-bottom:10px;}</style>\n');

}


//This condition fixes the extra "white space" issue with Firefox 3.0
if(is_firefox)
{
	
		document.write('<style type="text/css"> .social_menu_style{POSITION: absolute; top:0px; left: 0px; width:404px; display:block; clear:both; margin-left:0px; text-indent: -1px;}</style>\n');
	
}

function soc_getObject(objectId){if(document.getElementById&&document.getElementById(objectId)){return document.getElementById(objectId);}else if(document.all&&document.all(objectId)){return document.all(objectId);}else if(document.layers&&document.layers[objectId]){return document.layers[objectId];}else{return false;}}
function soc_loadContent(file,opt_id){var script_id='loadScript';if(opt_id)script_id=opt_id;var head=document.getElementsByTagName('head').item(0);var scriptTag=document.getElementById(script_id);if(scriptTag)head.removeChild(scriptTag);script=document.createElement('script');script.src=file;script.type='text/javascript';script.id=script_id;head.appendChild(script);}
function createSocialTagging(soc_title,soc_style,social_permalink_par,opt_pars){social_showEng=true;soc_listURL="";if(social_permalink_par=='')
dynamicURL=true;if(typeof(is_printable)=='undefined'){var re=new RegExp("([<>();~`]|(%3[BECbec])|(&\#x3[BECbec];)|&\#(62|60|40|41|43|59|126|96)|%(28|29|2b|2B|7e|7E|60)|&\#x(28|29|2[Bb]|7[Ee]|60);)");if(re.test(social_permalink_par))return false;if(opt_pars&&re.test(opt_pars))return false;if(re.test(location.href))return false;soc_linkID++;social_localExists[soc_linkID]=false;soc_numMenus=soc_linkID;soc_filledFlags.push(false);social_permalink=social_permalink_par;social_permalink_assgn=true;soc_titles.push(soc_pageTitle);soc_desc.push(soc_pageDesc);soc_permalinks.push(social_permalink);if(opt_pars){var opt_parsArray=opt_pars.split("|");for(i=0;i<opt_parsArray.length;i++){var params=opt_parsArray[i].split("=");if(params[0].toLowerCase()=='list'){soc_listURL=params[1];}
if(params[0].toLowerCase()=='usen'){if(params[1].toLowerCase()=='false'){social_showEng=false;}}
if(params[0].toLowerCase()=='title'){window.encodeURIComponent?soc_titles[soc_linkID-1]=encodeURIComponent(params[1]):soc_titles[soc_linkID-1]=params[1];}
if(params[0].toLowerCase()=='desc'){window.encodeURIComponent?soc_desc[soc_linkID-1]=encodeURIComponent(params[1]):soc_desc[soc_linkID-1]=params[1];}}
if(social_showEng==false&&soc_listURL!=""){social_showEng=false;}else{social_showEng=true;}}
var soc_placeHldr_Hldr='<span id="social_contents_Holder'+soc_linkID+'"></span>';document.write(soc_placeHldr_Hldr);social_checkTitleCounter[soc_linkID]=0;loadList(soc_linkID);var soc_closeLinkChar=soc_closeAct.substring(0,1);var soc_closeLinkKey=soc_closeLinkChar.toLowerCase();var soc_closeLinkRest=soc_closeAct.substring(1,soc_closeAct.length);soc_placeHldr='<div id="social_menuBlock'+soc_linkID+'" class="social_menuBlock"><div id="social_menuShare'+soc_linkID+'" class="social_menuShare_style"><span id="soc_layerTriggerLink'+soc_linkID+'"><a href="javascript: loadScript(\''+soc_linkID+'\');" title="'+soc_linkTitle+'" class="social_noline '+soc_style+'" id="social_returnIndex'+soc_linkID+'"><img src="'+soc_protDir+'img/soctag/social.gif" alt="" width="16" height="16" border="0" class="social_img" id="social_img_block'+soc_linkID+'"><span>'+soc_title+'</span></a></span></div>';soc_placeHldr+='         <div id="social_menu'+soc_linkID+'" class="social_menu_style" onmouseup="event.cancelBubble = true;">';soc_placeHldr+='   <div class="social_content" id="social_contentAll'+soc_linkID+'" style="float:left">';soc_placeHldr+='    <div class="theme" style="padding:5px 0 5px 0; height:1.45em;"><div class="social_bandedHeader">';soc_placeHldr+='     <span id="soc_layerStart'+soc_linkID+'" class="social_screenReading">'+soc_layerStart+'</span><span id="soc_layerCloseHeader'+soc_linkID+'"><div class="themeheader" style="display:inline; float:right">&raquo;&nbsp;<a href="javascript: soc_blurClose(\'soc_linkID='+soc_linkID+'\');" class="themelink" id="social_closeButton'+soc_linkID+'" title="'+soc_closeAct+soc_closeActScrn+'" accesskey="'+soc_closeLinkKey+'"><span class="social_underline">'+soc_closeLinkChar+'</span>'+soc_closeLinkRest+'<span class="social_screenReading" id="soc_closeActScrn'+soc_linkID+'">'+soc_closeActScrn+'</span></a></div></span>';soc_placeHldr+='     <div style="display:inline; float:left"><h2 class="themeheader" style="display:inline;" id="soc_layerTitle'+soc_linkID+'">'+soc_layerTitle+'</h2><div class="social_screenReading" id="soc_openNewWindow'+soc_linkID+'">'+soc_openMsg+'</div></div>';soc_placeHldr+='    </div></div>';soc_placeHldr+='    <div class="social_contentBlock">';soc_placeHldr+='    <div class="social_column">';soc_placeHldr+='     <div id="social_column1_'+soc_linkID+'" class="social_linksUnit">';soc_placeHldr+='     </div>';soc_placeHldr+='    </div>';soc_placeHldr+='    <div class="social_column">';soc_placeHldr+='     <div id="social_column2_'+soc_linkID+'" class="social_linksUnit">';soc_placeHldr+='     </div>';soc_placeHldr+='    </div>';soc_placeHldr+='    <div class="social_column" style="padding-right:0px">';soc_placeHldr+='     <div id="social_column3_'+soc_linkID+'" class="social_linksUnit">';soc_placeHldr+='     </div>';soc_placeHldr+='    </div>';soc_placeHldr+='    </div>';soc_placeHldr+='    <div class="theme social_bottomColor" style="float:left"></div>';soc_placeHldr+='   </div>';soc_placeHldr+='  </div>';soc_placeHldr+=' </div>';soc_placeHldrArr[soc_linkID]=soc_placeHldr;checkForLocalTitle(soc_linkID);}}
function checkForLocalTitle(socID){social_checkTitleCounter[socID]++;if(social_jsonLocal.text){writePlaceHolder(socID);if(social_jsonLocal.text.text_layerTitle&&soc_getObject('social_returnIndex'+socID)){soc_getObject('social_returnIndex'+socID).title=social_jsonLocal.text.text_layerTitle;social_localExists[socID]=true;}}else if(social_checkTitleCounter[socID]==10){social_localExists[socID]=false;soc_listURL=soc_listURLdef;loadList();if(social_showEng==true){writePlaceHolder(socID);}}else{setTimeout("checkForLocalTitle("+socID+")",50);}}
function loadList(socID){soc_listLoaded=true;if(soc_listURL=="")
soc_listURL=soc_listURLdef;soc_loadContent(soc_listURL);}
function writePlaceHolder(socID){document.getElementById('social_contents_Holder'+socID).innerHTML=soc_placeHldrArr[socID];}
/*Copyright (c) 2007 Ryan Grove <ryan@wonko.com>. All rights reserved. Licensed under the New BSD License: http://www.opensource.org/licenses/bsd-license.html Version: 1.0.3*/
var LazyLoad=function(){var pending=null;var queue=[];return{load:function(urls,callback,obj,scope){var request={urls:urls,callback:callback,obj:obj,scope:scope};if(pending){queue.push(request);return;}
pending=request;urls=urls.constructor===Array?urls:[urls];var script;for(var i=0;i<urls.length;i+=1){script=document.createElement('script');script.src=urls[i];document.getElementsByTagName('head')[0].appendChild(script);}
if(!script){return;}
if((/msie/i).test(navigator.userAgent)&&!(/AppleWebKit\/([^ ]*)/).test(navigator.userAgent)&&!(/opera/i).test(navigator.userAgent)){script.onreadystatechange=function(){if(this.readyState=='loaded'||this.readyState=='complete'){LazyLoad.requestComplete();}};}else{script=document.createElement('script');script.appendChild(document.createTextNode('LazyLoad.requestComplete();'));document.getElementsByTagName('head')[0].appendChild(script);}},loadOnce:function(urls,callback,obj,scope,force){var newUrls=[],scripts=document.getElementsByTagName('script');urls=urls.constructor===Array?urls:[urls];for(var i=0;i<urls.length;i+=1){var loaded=false,url=urls[i];for(var j=0;j<scripts.length;j+=1){if(url===scripts[j].src){loaded=true;break;}}
if(!loaded){newUrls.push(url);}}
if(newUrls.length>0){this.load(newUrls,callback,obj,scope);}else if(force){if(obj){if(scope){callback.call(obj);}else{callback.call(window,obj);}}else{callback.call();}}},requestComplete:function(){if(pending.callback){if(pending.obj){if(pending.scope){pending.callback.call(pending.obj);}else{pending.callback.call(window,pending.obj);}}else{pending.callback.call();}}
pending=null;if(queue.length>0){var request=queue.shift();this.load(request.urls,request.callback,request.obj,request.scope);}}};}();function loadScript(mOrder){LazyLoad.loadOnce(soc_protDir+'js/hpweb_soctag_delay.js',soc_showMenu,mOrder);if(scriptloaded==false){scriptloaded=true;}else{soc_showMenu(mOrder);}}
function soc_showMenu(mOrder){document.onmouseup=soc_hideMenus;var mId='social_menu'+mOrder;if(dynamicURL){soc_permalinks[mOrder-1]=escape(window.location.href);soc_filledFlags[mOrder-1]=false;}
if(soc_filledFlags[mOrder-1]){soc_reposition_resize(mOrder);soc_chngeObjVis(mId,'visible',mOrder);if(is_safari||is_opera)soc_refresh();}else soc_fillLinksJSON(mOrder);}
function soc_getDesc(){var metaElements=document.all?document.all.tags('META'):document.getElementsByTagName?document.getElementsByTagName('META'):new Array();var metaDesc="";var i=0;for(var m=0;m<metaElements.length;m++){if(metaElements[m].name.toLowerCase()=='description')metaDesc=metaElements[m].content;}
return metaDesc;}