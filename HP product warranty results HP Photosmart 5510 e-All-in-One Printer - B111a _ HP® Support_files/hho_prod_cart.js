
var isCookieExists = false;
var cookieValue= getCookie("hpcompc_usen"); 

var jumpId = "re_r602_marketing/hho/customercare/pervasivecart";

var staticURL = "http://www.shopping.hp.com/webapp/shopping/";

var staticCheckOutURL = staticURL+"cart_detail.do?jumpid="+jumpId;
var staticReqURL = staticURL+"hho_cart.do?jumpid="+jumpId;

isCookieExists = (cookieValue!=null && cookieValue == "cartExists=true" )? true : false; 

/*
  This will get the cookie value 
*/
function getCookie(nameOfCookie){
    if (document.cookie.length > 0) {              
    begin = document.cookie.indexOf(nameOfCookie+"=");     
    if (begin != -1) {           
      begin += nameOfCookie.length+1;       
      end = document.cookie.indexOf(";", begin);
      if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(begin, end));
    }
  }
  return null;
}

