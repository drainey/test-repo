/*
 * 
 * 
 * -meta---
 * version:    
 * builddate:  2015-06-23T03:02:11.161Z
 * generator:  interleave@0.5.24
 * 
 * 
 * 
 */ // req: 

    // 20120525A Events
var hpmmd=window.hpmmd||{type: 'Cleansheet Wash', page:{events:[]},product:{},user:{},legacy:{},promo:{}};

function setupCSMapping() {
    hpmmd.page.section = 'ces';
    hpmmd.page.segment = window.s_prop9 || "consumer";
    hpmmd.page.conv73 = window.s_eVar29;
    hpmmd.page.conv74 = window.s_eVar30;
    hpmmd.page.cesPage = window.s_prop27;

    hpmmd.page.traffic1 = window.s_prop1;
    hpmmd.page.traffic2 = window.s_prop2;
    hpmmd.page.traffic3 = window.s_prop3;
    hpmmd.page.traffic4 = window.s_prop4;
    hpmmd.page.traffic5 = window.s_prop5;
    if (window.s_eVar36) {
        hpmmd.search = {
            sitesearch : {
                keyword : window.s_prop6 || window.s_eVar36,
                type : window.s_eVar37 || "unknown"
            }
        };
    }
    hpmmd.page.download_types = "cab,drv,efi,frm,hqx,exe,zip,wav,mp3,mov,mpg,avi,doc,pdf,xls,dot,pot,ppt,wmv,tar";
}

cesBridgeFunction(hpmmd);

function trackcustomlinksOverride(utilityLabel, utilityValue, sourceData) {

    /* Define default values */
    var linkType = 'o';
    var linkTrackVarList = "";
    var eventList = "";
    var cl = (hpmmd.page.country || "us") + "/" + (hpmmd.page.language || "en");
    var lprop1;
    var eVar30Equivalent;

    if (!utilityLabel)
        utilityLabel = "Diag";

    if (utilityLabel.match("search:")) {
        s.prop4 = "7T";
    }

    if (utilityLabel.match("CountryOL:")) {
        utilityLabel = utilityLabel + " | " + cl + " | product";
    }

    if (utilityLabel == "weResult:") {
        utilityLabel = utilityLabel + " | " + utilityValue;
    }
    if (utilityLabel.match("L3survey:submit")) {
        s_linkTrackVars = "prop1";
        lprop1 = utilityValue;
        window.s_prop1 = lprop1;
        setupCSMapping();
        trackMetrics("cesSupportLink", {
            name : utilityLabel,
            type : "link"
        });
        return;
    }

    if (utilityLabel == "Standard") {
        /* APPROVED: CYNDI: s.eVar29 = "dl:STD:" + utilityValue
         linkType = 'd'; */
        setupCSMapping();
        trackMetrics("cesSupportLink", {
            name : utilityLabel,
            type : "download",
            utility_value : "dl:STD:" + utilityValue
        });
        return;

        /* ISSUE: if (eventList == null || eventList == "") {
         eventList = "event7";
         }
         else {
         eventList = eventList + ",event7";
         } */

        /* ISSUE: if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar29";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar29";
         } */
    }

    if (utilityLabel == "alert") {
        eVar30Equivalent = "alerts:" + utilityValue;
        /* if (eventList == null || eventList == "") {
         eventList = "scAdd";
         }
         else {
         eventList = eventList + ",scAdd";
         } */

        /* if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */
    }

    if (utilityLabel == "topic") {
        eVar30Equivalent = "topics:" + utilityValue;
        /* if (eventList == null || eventList == "") {
         eventList = "scAdd";
         }
         else {
         eventList = eventList + ",scAdd";
         }

         if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */
    }

    if (utilityLabel == "faq") {
        eVar30Equivalent = "faqs:" + utilityValue;
        /* if (eventList == null || eventList == "") {
         eventList = "scAdd";
         }
         else {
         eventList = eventList + ",scAdd";
         }

         if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */
    }

    if (utilityLabel == "discuss") {
        eVar30Equivalent = "forums:" + utilityValue;
        /* if (eventList == null || eventList == "") {
         eventList = "scAdd";
         }
         else {
         eventList = eventList + ",scAdd";
         }

         if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */
    }

    if (utilityLabel == "tosn") {

        if (utilityValue == "solve") {
            eVar30Equivalent = "tosn::solve a problem";
            /* if (eventList == null || eventList == "") {
             eventList = "scAdd";
             }
             else {
             eventList = eventList + ",scAdd";
             } */
        }

        if (utilityValue == "setup") {
            eVar30Equivalent = "tosn::getting started";
            /* if (eventList == null || eventList == "") {
             eventList = "scAdd";
             }
             else {
             eventList = eventList + ",scAdd";
             } */
        }

        if (utilityValue == "prodinfo") {
            eVar30Equivalent = "tosn::product information";
            /* if (eventList == null || eventList == "") {
             eventList = "scAdd";
             }
             else {
             eventList = eventList + ",scAdd";
             } */
        }

        if (utilityValue == "use") {
            eVar30Equivalent = "tosn::how to";
            /* if (eventList == null || eventList == "") {
             eventList = "scAdd";
             }
             else {
             eventList = eventList + ",scAdd";
             } */
        }

        /*  if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */

    }/* End of tosn */

    if (utilityLabel == "solveCategory") {
        eVar30Equivalent = "tosn::solve a problem:" + utilityValue;

        /* if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         }  */
    }

    if (utilityLabel == "setupCategory") {
        eVar30Equivalent = "tosn::getting started:" + utilityValue;

        /* if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */
    }

    if (utilityLabel == "useCategory") {
        eVar30Equivalent = "tosn::how to:" + utilityValue;

        /* if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */
    }

    if (utilityLabel == "prodinfoCategory") {
        eVar30Equivalent = "tosn::product information:" + utilityValue;

        /* if (linkTrackVarList == null || linkTrackVarList == "") {
         linkTrackVarList = "eVar30";
         }
         else {
         linkTrackVarList = linkTrackVarList + ",eVar30";
         } */
    }

    if (!utilityValue)
        utilityValue = "checkindex";

    /* s.events = eventList;

     if ( searchEvents )
     s.events = s.events  + ", " + searchEvents; */

    /* ISSUE: s.products = "HP Deskjet 960c Printer"; */

    /* Define some variables needed by Omniture. */
    setupCSMapping();
    trackMetrics("cesSupportLink", {
        name : utilityLabel,
        type : "link",
        utility_value_2 : eVar30Equivalent
    });

    /* s.linkTrackVars = linkTrackVarList + "events";
     s.linkTrackEvents = eventList;
     s.tl(this, linkType, utilityLabel);    */
}

function cesBridgeFunction(md) {
    md.page.name = (function(p) {
        return (!p ? "PATH|" + location.pathname.replace("/", ":") : p.replace(/ces\:/i, "").replace(/\s*\|\s*/, ":"));
    })(window.s_pageName);
    function getQueryParam(k, u) {
        var re = new RegExp("\\?.*" + k + "\\=([^\\&]+)", "i"), res = re.exec(u || location.href);
        return (!res ? null : res[1]);
    }

    function stripEvents(s) {
        if (s.events) {
            s.events = s.events.replace(new RegExp("[\\,]?(event5|event7)"), "");
        }
    }

    var s_eVar4 = "";
    /* Mapped to custom 74 */
    var tmp_softwareitem = "";
    /* var s_linkTrackVars="s_prop1,s_prop25,s_events,s_products,s_prop3,s_prop4,s_prop5,s_prop7,s_prop8,s_prop9,s_eVar1,s_eVar2,s_prop13,eVar29,eVar30,prop27,prop4,prop7,prop8,products,events";  added additional variables to the list eVar29,eVar30,prop27 - requested by Jason Downing, Laurie Nalani
     var s_linkTrackEvents="event7,scAdd,event21"; As per the request from Laurie and John */

    /* Common metrics plugin function - do not remove */
    if (window.s_prop5 && (s_prop5.toLowerCase().indexOf('ces:document |') != -1 || s_prop5.toLowerCase().indexOf('softwaredownloadindex') != -1)) {
        solutionid = getQueryParam("custom_solutionid");
        if (solutionid && solutionid.length > 0) {
            if (s_prop5.toLowerCase().indexOf('ces:document |') != -1) {
                md.page.custom73 = solutionid + "," + s_prop7 + "," + s_prop8 + "," + s_prop5;
                /* Map eVar3 to Custom 73 */
            } else {
                temp_softwareitem = getQueryParam("softwareitem");
                md.page.custom73 = solutionid + "," + s_prop7 + "," + s_prop8 + "," + s_prop3 + " | " + temp_softwareitem;
            }
        }
        md.page.events.push("Article Or Content Consumption");
        /*  Replaces event5 */
        /* if (window.s_events) {
         s_events+=",event5";
         }
         else {
         s_events="event5";
         }
         s_events="event5" */
    }
    /* once the query string is completely tagged with "tmp_track_link" then you can remove below code which uses jumpid track document */
    var h_jumpid = getQueryParam("jumpid");
    h_jumpid = !h_jumpid ? "" : h_jumpid;
    if (h_jumpid && h_jumpid.length > 0) {
        jumpid_array = h_jumpid.split("/");
        if (h_jumpid.indexOf("_recdoc") > -1) {
            md.page.custom74 = "refdoc:" + jumpid_array[1] + " | recdoc:" + jumpid_array[3];
            /*  Replaces eVar4 */
            s_prop27 = "recdoc:" + jumpid_array[3];
        }
        if (h_jumpid.indexOf("_faqs") > -1) {
            /* s_eVar4 = "refdoc:" + jumpid_array[1] + " | recdoc:"+jumpid_array[3]; */
            s_prop27 = "faqs:top_issues:" + jumpid_array[3];
        }

    }

    /*  Recently intead of jumpid as Query string, its change to "tmp_track_link" for tracking documents */

    var h_tmp_track_link = getQueryParam("tmp_track_link");
    h_tmp_track_link = !h_tmp_track_link ? "" : h_tmp_track_link;
    if (h_tmp_track_link && h_tmp_track_link.length > 0) {
        h_tmp_track_link_array = h_tmp_track_link.split("/");
        if (h_tmp_track_link.indexOf("_recdoc") > -1) {
            md.page.custom74 = "refdoc:" + h_tmp_track_link_array[1] + " | recdoc:" + h_tmp_track_link_array[3];
            s_prop27 = "recdoc:" + h_tmp_track_link_array[3];
        }
        if (h_tmp_track_link.indexOf("_faqs") > -1) {
            /* s_eVar4 = "refdoc:" + jumpid_array[1] + " | recdoc:"+jumpid_array[3]; */
            s_prop27 = "faqs:top_issues:" + h_tmp_track_link_array[3];
        }

    }
    if (window.s_pageName && s_pageName.indexOf("contacthp") > -1) {
        window.s_prop27 = "ces:contacthp";
    }
    setupCSMapping();
    /* if(jQuery) {
     jQuery(document).ready(
     function() {window.trackcustomlinks=trackcustomlinksOverride;}
     );
     } else {
     window.trackcustomlinks=trackcustomlinksOverride;
     } */
}

function s_sendAnalyticsEvent(addlAccount, pageName) {
    trackMetrics("cesSupportPage", {
        name : pageName
    });
}

function s_sendCustomLinkEvent(addlAccount, linkName) {
    trackMetrics("cesSupportLink", {
        name : linkName,
        type : "link"
    });
}

function s_sendDownloadLinkEvent(addlAccount, linkName) {
    trackMetrics("cesSupportLink", {
        name : linkName,
        type : "download"
    });
}

function s_sendExitLinkEvent(addlAccount, linkName) {
    trackMetrics("cesSupportLink", {
        name : linkName,
        type : "exit"
    });
}

/*
 * 
 * 
 * -meta---
 * version:    
 * builddate:  2015-06-23T03:28:37.064Z
 * generator:  interleave@0.5.24
 * 
 * 
 * 
 */ // req: 

    //${DEBUG}
window.doLodash = function() {
    /**
     * @license
     * lodash 3.9.3 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
     * Build: `lodash compat include="flatten,map,reduce,size,forEach,noConflict,unique,compact,union,without,tail,head,merge,contains"`
     */
    ;(function(){function n(n,r,t){if(r!==r){n:{for(r=n.length,t+=-1;++t<r;){var e=n[t];if(e!==e){n=t;break n}}n=-1}return n}for(t-=1,e=n.length;++t<e;)if(n[t]===r)return t;return-1}function r(n){return typeof n=="function"||false}function t(n){return typeof n=="string"?n:null==n?"":n+""}function e(n){return!!n&&typeof n=="object"}function u(){}function o(n){var r=n?n.length:0;for(this.data={hash:Pr(null),set:new xr};r--;)this.push(n[r])}function c(n,r){var t=n.data;return(typeof r=="string"||an(r)?t.set.has(r):t.hash[r])?0:-1;
    }function a(n,r){var t=-1,e=n.length;for(r||(r=Array(e));++t<e;)r[t]=n[t];return r}function i(n,r){for(var t=-1,e=n.length;++t<e&&false!==r(n[t],t,n););return n}function f(n,r){for(var t=-1,e=n.length,u=Array(e);++t<e;)u[t]=r(n[t],t,n);return u}function l(n,r){for(var t=-1,e=n.length;++t<e;)if(r(n[t],t,n))return true;return false}function s(n,r){return null==r?n:p(r,Qr(r),n)}function p(n,r,t){t||(t={});for(var e=-1,u=r.length;++e<u;){var o=r[e];t[o]=n[o]}return t}function h(n,r,t){var e=typeof n;return"function"==e?r===An?n:I(n,r,t):null==n?jn:"object"==e?A(n):r===An?wn(n):O(n,r);
    }function v(n,r,t,e,u,o,c){var f;if(t&&(f=u?t(n,e,u):t(n)),f!==An)return f;if(!an(n))return n;if(e=Hr(n)){if(f=B(n),!r)return a(n,f)}else{var l=yr.call(n),p=l==kn;if(l!=Tn&&l!=xn&&(!p||u))return rr[l]?q(n,l,r):u?n:{};if(fr(n))return u?n:{};if(f=N(p?{}:n),!r)return s(f,n)}for(o||(o=[]),c||(c=[]),u=o.length;u--;)if(o[u]==n)return c[u];return o.push(n),c.push(f),(e?i:b)(n,function(e,u){f[u]=v(e,r,t,u,n,o,c)}),f}function g(n,r,t){for(var u=-1,o=n.length,c=-1,a=[];++u<o;){var i=n[u];if(e(i)&&W(i)&&(t||Hr(i)||cn(i))){
    r&&(i=g(i,r,t));for(var f=-1,l=i.length;++f<l;)a[++c]=i[f]}else t||(a[++c]=i)}return a}function y(n,r){qr(n,r,hn)}function b(n,r){return qr(n,r,Qr)}function d(n,r,t){if(null!=n){n=J(n),t!==An&&t in n&&(r=[t]),t=0;for(var e=r.length;null!=n&&t<e;)n=J(n)[r[t++]];return t&&t==e?n:An}}function j(n,r,t,u,o,c){if(n===r)n=true;else if(null==n||null==r||!an(n)&&!e(r))n=n!==n&&r!==r;else n:{var a=j,i=Hr(n),f=Hr(r),l=En,s=En;i||(l=yr.call(n),l==xn?l=Tn:l!=Tn&&(i=sn(n))),f||(s=yr.call(r),s==xn?s=Tn:s!=Tn&&sn(r));
    var p=l==Tn&&!fr(n),f=s==Tn&&!fr(r),s=l==s;if(!s||i||p){if(!u&&(l=p&&gr.call(n,"__wrapped__"),f=f&&gr.call(r,"__wrapped__"),l||f)){n=a(l?n.value():n,f?r.value():r,t,u,o,c);break n}if(s){for(o||(o=[]),c||(c=[]),l=o.length;l--;)if(o[l]==n){n=c[l]==r;break n}o.push(n),c.push(r),n=(i?U:F)(n,r,a,t,u,o,c),o.pop(),c.pop()}else n=false}else n=$(n,r,l)}return n}function m(n,r){var t=r.length,e=t;if(null==n)return!e;for(n=J(n);t--;){var u=r[t];if(u[2]?u[1]!==n[u[0]]:!(u[0]in n))return false}for(;++t<e;){var u=r[t],o=u[0],c=n[o],a=u[1];
    if(u[2]){if(c===An&&!(o in n))return false}else if(u=An,u===An?!j(a,c,void 0,true):!u)return false}return true}function w(n,r){var t=-1,e=W(n)?Array(n.length):[];return Nr(n,function(n,u,o){e[++t]=r(n,u,o)}),e}function A(n){var r=L(n);if(1==r.length&&r[0][2]){var t=r[0][0],e=r[0][1];return function(n){return null==n?false:(n=J(n),n[t]===e&&(e!==An||t in n))}}return function(n){return m(n,r)}}function O(n,r){var t=Hr(n),e=V(n)&&r===r&&!an(r),u=n+"";return n=K(n),function(o){if(null==o)return false;var c=u;if(o=J(o),!(!t&&e||c in o)){
    if(o=1==n.length?o:d(o,P(n,0,-1)),null==o)return false;c=nn(n),o=J(o)}return o[c]===r?r!==An||c in o:j(r,o[c],An,true)}}function x(n,r,t,u,o){if(!an(n))return n;var c=W(r)&&(Hr(r)||sn(r)),f=c?null:Qr(r);return i(f||r,function(i,l){if(f&&(l=i,i=r[l]),e(i)){u||(u=[]),o||(o=[]);n:{for(var s=l,p=u,h=o,v=p.length,g=r[s];v--;)if(p[v]==g){n[s]=h[v];break n}var v=n[s],y=t?t(v,g,s,n,r):An,b=y===An;b&&(y=g,W(g)&&(Hr(g)||sn(g))?y=Hr(v)?v:W(v)?a(v):[]:Kr(g)||cn(g)?y=cn(v)?pn(v):Kr(v)?v:{}:b=false),p.push(g),h.push(y),
    b?n[s]=x(y,g,t,p,h):(y===y?y!==v:v===v)&&(n[s]=y)}}else s=n[l],p=t?t(s,i,l,n,r):An,(h=p===An)&&(p=i),p===An&&(!c||l in n)||!h&&(p===p?p===s:s!==s)||(n[l]=p)}),n}function E(n){return function(r){return null==r?An:J(r)[n]}}function S(n){var r=n+"";return n=K(n),function(t){return d(t,n,r)}}function _(n,r,t,e,u){return u(n,function(n,u,o){t=e?(e=false,n):r(t,n,u,o)}),t}function P(n,r,t){var e=-1,u=n.length;for(r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),t=t===An||t>u?u:+t||0,0>t&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0,
    t=Array(u);++e<u;)t[e]=n[e+r];return t}function k(r,t){var e=-1,u=C(),o=r.length,a=u==n,i=a&&200<=o,f=i?Wr():null,l=[];f?(u=c,a=false):(i=false,f=t?[]:l);n:for(;++e<o;){var s=r[e],p=t?t(s,e,r):s;if(a&&s===s){for(var h=f.length;h--;)if(f[h]===p)continue n;t&&f.push(p),l.push(s)}else 0>u(f,p,0)&&((t||i)&&f.push(p),l.push(s))}return l}function I(n,r,t){if(typeof n!="function")return jn;if(r===An)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u);
    };case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)};case 5:return function(t,e,u,o,c){return n.call(r,t,e,u,o,c)}}return function(){return n.apply(r,arguments)}}function T(n){return mr.call(n,0)}function U(n,r,t,e,u,o,c){var a=-1,i=n.length,f=r.length;if(i!=f&&(!u||f<=i))return false;for(;++a<i;){var s=n[a],f=r[a],p=e?e(u?f:s,u?s:f,a):An;if(p!==An){if(p)continue;return false}if(u){if(!l(r,function(n){return s===n||t(s,n,e,u,o,c)}))return false}else if(s!==f&&!t(s,f,e,u,o,c))return false}return true}function $(n,r,t){
    switch(t){case Sn:case _n:return+n==+r;case Pn:return n.name==r.name&&n.message==r.message;case In:return n!=+n?r!=+r:n==+r;case Un:case $n:return n==r+""}return false}function F(n,r,t,e,u,o,c){var a=Qr(n),i=a.length,f=Qr(r).length;if(i!=f&&!u)return false;for(f=i;f--;){var l=a[f];if(!(u?l in r:gr.call(r,l)))return false}for(var s=u;++f<i;){var l=a[f],p=n[l],h=r[l],v=e?e(u?h:p,u?p:h,l):An;if(v===An?!t(p,h,e,u,o,c):!v)return false;s||(s="constructor"==l)}return s||(t=n.constructor,e=r.constructor,!(t!=e&&"constructor"in n&&"constructor"in r)||typeof t=="function"&&t instanceof t&&typeof e=="function"&&e instanceof e)?true:false;
    }function M(n,r,t){var e=u.callback||bn,e=e===bn?h:e;return t?e(n,r,t):e}function C(r,t,e){var o=u.indexOf||Z,o=o===Z?n:o;return r?o(r,t,e):o}function L(n){n=vn(n);for(var r=n.length;r--;){var t=n[r][1];n[r][2]=t===t&&!an(t)}return n}function R(n,r){var t=null==n?An:n[r];return fn(t)?t:An}function B(n){var r=n.length,t=new n.constructor(r);return r&&"string"==typeof n[0]&&gr.call(n,"index")&&(t.index=n.index,t.input=n.input),t}function N(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Object),
    new n}function q(n,r,t){var e=n.constructor;switch(r){case Fn:return T(n);case Sn:case _n:return new e(+n);case Mn:case Cn:case Ln:case Rn:case Bn:case Nn:case qn:case Wn:case zn:return e instanceof e&&(e=Lr[r]),r=n.buffer,new e(t?T(r):r,n.byteOffset,n.length);case In:case $n:return new e(n);case Un:var u=new e(n.source,Kn.exec(n));u.lastIndex=n.lastIndex}return u}function W(n){return null!=n&&Y(zr(n))}function z(n,r){return n=typeof n=="number"||Xn.test(n)?+n:-1,r=null==r?Cr:r,-1<n&&0==n%1&&n<r}
    function D(n,r,t){if(!an(t))return false;var e=typeof r;return("number"==e?W(t)&&z(r,t.length):"string"==e&&r in t)?(r=t[r],n===n?n===r:r!==r):false}function V(n){var r=typeof n;return"string"==r&&Vn.test(n)||"number"==r?true:Hr(n)?false:!Dn.test(n)||false}function Y(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cr}function G(n){var r,t=u.support;if(!e(n)||yr.call(n)!=Tn||fr(n)||!(gr.call(n,"constructor")||(r=n.constructor,typeof r!="function"||r instanceof r))||!t.argsTag&&cn(n))return false;var o;return t.ownLast?(y(n,function(n,r,t){
    return o=gr.call(t,r),false}),false!==o):(y(n,function(n,r){o=r}),o===An||gr.call(n,o))}function H(n){for(var r=hn(n),t=r.length,e=t&&n.length,u=!!e&&Y(e)&&(Hr(n)||cn(n)||ln(n)),o=-1,c=[];++o<t;){var a=r[o];(u&&z(a,e)||gr.call(n,a))&&c.push(a)}return c}function J(n){if(u.support.unindexedChars&&ln(n)){for(var r=-1,t=n.length,e=Object(n);++r<t;)e[r]=n.charAt(r);return e}return an(n)?n:Object(n)}function K(n){if(Hr(n))return n;var r=[];return t(n).replace(Yn,function(n,t,e,u){r.push(e?u.replace(Jn,"$1"):t||n);
    }),r}function Q(n,r,t){return n&&n.length?((t?D(n,r,t):null==r)&&(r=1),P(n,0>r?0:r)):[]}function X(n){return n?n[0]:An}function Z(r,t,e){var u=r?r.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?Tr(u+e,0):e;else if(e){if(e=0,u=r?r.length:e,typeof t!="number"||t!==t||u>Fr){u=jn,e=u(t);for(var o=0,c=r?r.length:0,a=e!==e,i=null===e,f=e===An;o<c;){var l=wr((o+c)/2),s=u(r[l]),p=s!==An,h=s===s;(a?h:i?h&&p&&null!=s:f?h&&p:null==s?0:s<e)?o=l+1:c=l}e=Ur(c,$r)}else{for(;e<u;){var o=e+u>>>1,c=r[o];c<t&&null!==c?e=o+1:u=o;
    }e=u}return r=r[e],(t===t?t===r:r!==r)?e:-1}return n(r,t,e||0)}function nn(n){var r=n?n.length:0;return r?n[r-1]:An}function rn(n){return Q(n,1)}function tn(r,t,e,u){if(!r||!r.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=D(r,t,u)?null:t,t=false);var o=M();if((null!=e||o!==h)&&(e=o(e,u,3)),t&&C()==n){t=e;var c;e=-1,u=r.length;for(var o=-1,a=[];++e<u;){var i=r[e],f=t?t(i,e,r):i;e&&c===f||(c=f,a[++o]=i)}r=a}else r=k(r,e);return r}function en(n,r,t,e){var u=n?zr(n):0;return Y(u)||(n=gn(n),u=n.length),
    u?(t=typeof t!="number"||e&&D(r,t,e)?0:0>t?Tr(u+t,0):t||0,typeof n=="string"||!Hr(n)&&ln(n)?t<u&&-1<n.indexOf(r,t):-1<C(n,r,t)):false}function un(n,r,t){var e=Hr(n)?f:w;return r=M(r,t,3),e(n,r)}function on(n,r){if(typeof n!="function")throw new TypeError(On);return r=Tr(r===An?n.length-1:+r||0,0),function(){for(var t=arguments,e=-1,u=Tr(t.length-r,0),o=Array(u);++e<u;)o[e]=t[r+e];switch(r){case 0:return n.call(this,o);case 1:return n.call(this,t[0],o);case 2:return n.call(this,t[0],t[1],o)}for(u=Array(r+1),
    e=-1;++e<r;)u[e]=t[e];return u[r]=o,n.apply(this,u)}}function cn(n){return e(n)&&W(n)&&yr.call(n)==xn}function an(n){var r=typeof n;return!!n&&("object"==r||"function"==r)}function fn(n){return null==n?false:yr.call(n)==kn?dr.test(vr.call(n)):e(n)&&(fr(n)?dr:Qn).test(n)}function ln(n){return typeof n=="string"||e(n)&&yr.call(n)==$n}function sn(n){return e(n)&&Y(n.length)&&!!nr[yr.call(n)]}function pn(n){return p(n,hn(n))}function hn(n){if(null==n)return[];an(n)||(n=Object(n));for(var r=n.length,t=u.support,r=r&&Y(r)&&(Hr(n)||cn(n)||ln(n))&&r||0,e=n.constructor,o=-1,e=Jr(e)&&e.prototype||pr,c=e===n,a=Array(r),i=0<r,f=t.enumErrorProps&&(n===sr||n instanceof Error),l=t.enumPrototypes&&Jr(n);++o<r;)a[o]=o+"";
    for(var s in n)l&&"prototype"==s||f&&("message"==s||"name"==s)||i&&z(s,r)||"constructor"==s&&(c||!gr.call(n,s))||a.push(s);if(t.nonEnumShadows&&n!==pr)for(r=n===hr?$n:n===sr?Pn:yr.call(n),t=Rr[r]||Rr[Tn],r==Tn&&(e=pr),r=Zn.length;r--;)s=Zn[r],o=t[s],c&&o||(o?!gr.call(n,s):n[s]===e[s])||a.push(s);return a}function vn(n){n=J(n);for(var r=-1,t=Qr(n),e=t.length,u=Array(e);++r<e;){var o=t[r];u[r]=[o,n[o]]}return u}function gn(n){for(var r=Qr(n),t=-1,e=r.length,u=Array(e);++t<e;)u[t]=n[r[t]];return u}function yn(n){
    return(n=t(n))&&Hn.test(n)?n.replace(Gn,"\\$&"):n}function bn(n,r,t){return t&&D(n,r,t)&&(r=null),e(n)?mn(n):h(n,r)}function dn(n){return function(){return n}}function jn(n){return n}function mn(n){return A(v(n,true))}function wn(n){return V(n)?E(n):S(n)}var An,On="Expected a function",xn="[object Arguments]",En="[object Array]",Sn="[object Boolean]",_n="[object Date]",Pn="[object Error]",kn="[object Function]",In="[object Number]",Tn="[object Object]",Un="[object RegExp]",$n="[object String]",Fn="[object ArrayBuffer]",Mn="[object Float32Array]",Cn="[object Float64Array]",Ln="[object Int8Array]",Rn="[object Int16Array]",Bn="[object Int32Array]",Nn="[object Uint8Array]",qn="[object Uint8ClampedArray]",Wn="[object Uint16Array]",zn="[object Uint32Array]",Dn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,Vn=/^\w*$/,Yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,Gn=/[.*+?^${}()|[\]\/\\]/g,Hn=RegExp(Gn.source),Jn=/\\(\\)?/g,Kn=/\w*$/,Qn=/^\[object .+?Constructor\]$/,Xn=/^\d+$/,Zn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),nr={};
    nr[Mn]=nr[Cn]=nr[Ln]=nr[Rn]=nr[Bn]=nr[Nn]=nr[qn]=nr[Wn]=nr[zn]=true,nr[xn]=nr[En]=nr[Fn]=nr[Sn]=nr[_n]=nr[Pn]=nr[kn]=nr["[object Map]"]=nr[In]=nr[Tn]=nr[Un]=nr["[object Set]"]=nr[$n]=nr["[object WeakMap]"]=false;var rr={};rr[xn]=rr[En]=rr[Fn]=rr[Sn]=rr[_n]=rr[Mn]=rr[Cn]=rr[Ln]=rr[Rn]=rr[Bn]=rr[In]=rr[Tn]=rr[Un]=rr[$n]=rr[Nn]=rr[qn]=rr[Wn]=rr[zn]=true,rr[Pn]=rr[kn]=rr["[object Map]"]=rr["[object Set]"]=rr["[object WeakMap]"]=false;var tr={"function":true,object:true},er=tr[typeof exports]&&exports&&!exports.nodeType&&exports,ur=tr[typeof module]&&module&&!module.nodeType&&module,or=tr[typeof self]&&self&&self.Object&&self,cr=tr[typeof window]&&window&&window.Object&&window,ar=ur&&ur.exports===er&&er,ir=er&&ur&&typeof global=="object"&&global&&global.Object&&global||cr!==(this&&this.window)&&cr||or||this,fr=function(){
    try{Object({toString:0}+"")}catch(n){return function(){return false}}return function(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}}(),lr=Array.prototype,sr=Error.prototype,pr=Object.prototype,hr=String.prototype,vr=Function.prototype.toString,gr=pr.hasOwnProperty,yr=pr.toString,br=ir._,dr=RegExp("^"+yn(vr.call(gr)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jr=R(ir,"ArrayBuffer"),mr=R(jr&&new jr(0),"slice"),wr=Math.floor,Ar=R(Object,"getPrototypeOf"),Or=pr.propertyIsEnumerable,xr=R(ir,"Set"),Er=lr.splice,Sr=R(ir,"Uint8Array"),_r=function(){
    try{var n=R(ir,"Float64Array"),r=new n(new jr(10),0,1)&&n}catch(t){}return r||null}(),Pr=R(Object,"create"),kr=R(Array,"isArray"),Ir=R(Object,"keys"),Tr=Math.max,Ur=Math.min,$r=4294967294,Fr=2147483647,Mr=_r?_r.BYTES_PER_ELEMENT:0,Cr=9007199254740991,Lr={};Lr[Mn]=ir.Float32Array,Lr[Cn]=ir.Float64Array,Lr[Ln]=ir.Int8Array,Lr[Rn]=ir.Int16Array,Lr[Bn]=ir.Int32Array,Lr[Nn]=ir.Uint8Array,Lr[qn]=ir.Uint8ClampedArray,Lr[Wn]=ir.Uint16Array,Lr[zn]=ir.Uint32Array;var Rr={};Rr[En]=Rr[_n]=Rr[In]={constructor:true,
    toLocaleString:true,toString:true,valueOf:true},Rr[Sn]=Rr[$n]={constructor:true,toString:true,valueOf:true},Rr[Pn]=Rr[kn]=Rr[Un]={constructor:true,toString:true},Rr[Tn]={constructor:true},i(Zn,function(n){for(var r in Rr)if(gr.call(Rr,r)){var t=Rr[r];t[n]=gr.call(t,n)}});var Br=u.support={};!function(n){function r(){this.x=n}var t={0:n,length:n},e=[];r.prototype={valueOf:n,y:n};for(var u in new r)e.push(u);Br.argsTag=yr.call(arguments)==xn,Br.enumErrorProps=Or.call(sr,"message")||Or.call(sr,"name"),Br.enumPrototypes=Or.call(r,"prototype"),
    Br.nonEnumShadows=!/valueOf/.test(e),Br.ownLast="x"!=e[0],Br.spliceObjects=(Er.call(t,0,1),!t[0]),Br.unindexedChars="xx"!="x"[0]+Object("x")[0]}(1,0);var Nr=function(n,r){return function(t,e){var u=t?zr(t):0;if(!Y(u))return n(t,e);for(var o=r?u:-1,c=J(t);(r?o--:++o<u)&&false!==e(c[o],o,c););return t}}(b),qr=function(n){return function(r,t,e){var u=J(r);e=e(r);for(var o=e.length,c=n?o:-1;n?c--:++c<o;){var a=e[c];if(false===t(u[a],a,u))break}return r}}();mr||(T=jr&&Sr?function(n){var r=n.byteLength,t=_r?wr(r/Mr):0,e=t*Mr,u=new jr(r);
    if(t){var o=new _r(u,0,t);o.set(new _r(n,0,t))}return r!=e&&(o=new Sr(u,e),o.set(new Sr(n,e))),u}:dn(null));var Wr=Pr&&xr?function(n){return new o(n)}:dn(null),zr=E("length"),Dr=on(function(n){return k(g(n,false,true))}),Vr=on(function(r,t){var e;if(W(r)){e=t;var u=r?r.length:0,o=[];if(u){var a=-1,i=C(),f=i==n,l=f&&200<=e.length?Wr(e):null,s=e.length;l&&(i=c,f=false,e=l);n:for(;++a<u;)if(l=r[a],f&&l===l){for(var p=s;p--;)if(e[p]===l)continue n;o.push(l)}else 0>i(e,l,0)&&o.push(l)}e=o}else e=[];return e}),Yr=function(n,r){
    return function(t,e,u){return typeof e=="function"&&u===An&&Hr(t)?n(t,e):r(t,I(e,u,3))}}(i,Nr),Gr=function(n,r){return function(t,e,u,o){var c=3>arguments.length;return typeof e=="function"&&o===An&&Hr(t)?n(t,e,u,c):_(t,M(e,o,4),u,c,r)}}(function(n,r,t,e){var u=-1,o=n.length;for(e&&o&&(t=n[++u]);++u<o;)t=r(t,n[u],u,n);return t},Nr);Br.argsTag||(cn=function(n){return e(n)&&W(n)&&gr.call(n,"callee")&&!Or.call(n,"callee")});var Hr=kr||function(n){return e(n)&&Y(n.length)&&yr.call(n)==En},Jr=r(/x/)||Sr&&!r(Sr)?function(n){
    return yr.call(n)==kn}:r,Kr=Ar?function(n){if(!n||yr.call(n)!=Tn||!u.support.argsTag&&cn(n))return false;var r=R(n,"valueOf"),t=r&&(t=Ar(r))&&Ar(t);return t?n==t||Ar(n)==t:G(n)}:G,Qr=Ir?function(n){var r=null==n?null:n.constructor;return typeof r=="function"&&r.prototype===n||(typeof n=="function"?u.support.enumPrototypes:W(n))?H(n):an(n)?Ir(n):[]}:H,Xr=function(n){return on(function(r,t){var e=-1,u=null==r?0:t.length,o=2<u?t[u-2]:An,c=2<u?t[2]:An,a=1<u?t[u-1]:An;for(typeof o=="function"?(o=I(o,a,5),u-=2):(o=typeof a=="function"?a:An,
    u-=o?1:0),c&&D(t[0],t[1],c)&&(o=3>u?An:o,u=1);++e<u;)(c=t[e])&&n(r,c,o);return r})}(x);o.prototype.push=function(n){var r=this.data;typeof n=="string"||an(n)?r.set.add(n):r.hash[n]=true},u.callback=bn,u.compact=function(n){for(var r=-1,t=n?n.length:0,e=-1,u=[];++r<t;){var o=n[r];o&&(u[++e]=o)}return u},u.constant=dn,u.drop=Q,u.flatten=function(n,r,t){var e=n?n.length:0;return t&&D(n,r,t)&&(r=false),e?g(n,r):[]},u.forEach=Yr,u.keys=Qr,u.keysIn=hn,u.map=un,u.matches=mn,u.merge=Xr,u.pairs=vn,u.property=wn,
    u.rest=rn,u.restParam=on,u.toPlainObject=pn,u.union=Dr,u.uniq=tn,u.values=gn,u.without=Vr,u.collect=un,u.each=Yr,u.iteratee=bn,u.tail=rn,u.unique=tn,u.escapeRegExp=yn,u.first=X,u.identity=jn,u.includes=en,u.indexOf=Z,u.isArguments=cn,u.isArray=Hr,u.isFunction=Jr,u.isNative=fn,u.isObject=an,u.isPlainObject=Kr,u.isString=ln,u.isTypedArray=sn,u.last=nn,u.noConflict=function(){return ir._=br,this},u.reduce=Gr,u.size=function(n){var r=n?zr(n):0;return Y(r)?r:Qr(n).length},u.contains=en,u.foldl=Gr,u.head=X,
    u.include=en,u.inject=Gr,u.VERSION="3.9.3",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ir._=u, define(function(){return u})):er&&ur?ar?(ur.exports=u)._=u:er._=u:ir._=u}).call(this);
    return _.noConflict();
}
window.__lodash = doLodash();

window.useOldAnalyticsScript = (function() {
    var _ = __lodash,
        isOldAnalyticsScript = true, // Always assume OLD analytics script for now...

        // Exceptions to using old analytics script - allows us to turn on 
        // select domains or URLs as required
        newAnalyticsURLMatchPatterns = [
            (/^https?...register.hp.com/), (/^https?...h2056\d.www2.hp.com/), (/^https?...h10025.www1.hp.com/), (/testtms=true/i)
        ]; // URLs that load NEW analytics script

    return !(_.reduce(newAnalyticsURLMatchPatterns, function(result, useNewScriptURL) {
        return result || useNewScriptURL.test(location.href);
    }, false));
})();
window.useAsyncAnalytics = (function() {
    var _ = __lodash,
        asyncAnalyticsURLPatterns = [(/testasync=true/)];
    return _.reduce(asyncAnalyticsURLPatterns, function(result, asyncURL) {
        return result || asyncURL.test(location.href);
    }, false);
})();
if(!window.useOldAnalyticsScript) {	
	/* Set default window.hpmmd value */
	if(!window.hpmmd){
	    window.hpmmd = {type:"HP Default Cleansheet Implementation" , page:{},product:{},user:{},promo:{},legacy:{}};
	}
    window.hpmmd.version = '20150615A-TMSBS';

	/* 
	curlRequireD: loglevel v1.3.0 - Used to communicate status to developer
	Automatically turns off when placed in production
	 */
	/*! loglevel - v1.3.0 - https://github.com/pimterry/loglevel - (c) 2015 Tim Perry - licensed MIT */
	!function(a,b){"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define(b):a.log=b()}(this,function(){function a(a){return typeof console===i?!1:void 0!==console[a]?b(console,a):void 0!==console.log?b(console,"log"):h}function b(a,b){var c=a[b];if("function"==typeof c.bind)return c.bind(a);try{return Function.prototype.bind.call(c,a)}catch(d){return function(){return Function.prototype.apply.apply(c,[a,arguments])}}}function c(a,b){return function(){typeof console!==i&&(d(b),g[a].apply(g,arguments))}}function d(a){for(var b=0;b<j.length;b++){var c=j[b];g[c]=a>b?h:g.methodFactory(c,a)}}function e(a){var b=(j[a]||"silent").toUpperCase();try{return void(window.localStorage.loglevel=b)}catch(c){}try{window.document.cookie="loglevel="+b+";"}catch(c){}}function f(){var a;try{a=window.localStorage.loglevel}catch(b){}if(typeof a===i)try{a=/loglevel=([^;]+)/.exec(window.document.cookie)[1]}catch(b){}void 0===g.levels[a]&&(a="WARN"),g.setLevel(g.levels[a])}var g={},h=function(){},i="undefined",j=["trace","debug","info","warn","error"];g.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},g.methodFactory=function(b,d){return a(b)||c(b,d)},g.setLevel=function(a,b){if("string"==typeof a&&void 0!==g.levels[a.toUpperCase()]&&(a=g.levels[a.toUpperCase()]),!("number"==typeof a&&a>=0&&a<=g.levels.SILENT))throw"log.setLevel() called with invalid level: "+a;return b!==!1&&e(a),d(a),typeof console===i&&a<g.levels.SILENT?"No console available for logging":void 0},g.enableAll=function(a){g.setLevel(g.levels.TRACE,a)},g.disableAll=function(a){g.setLevel(g.levels.SILENT,a)};var k=typeof window!==i?window.log:void 0;return g.noConflict=function(){return typeof window!==i&&window.log===g&&(window.log=k),g},f(),g});

	hpmmd.log = log.noConflict();
	/* Update log with Analytics prefix statements */
	hpmmd.setLogPrefix = function(label) {
	    var originalFactory = hpmmd.log.methodFactory;
	    hpmmd.log.methodFactory = function(methodName, logLevel) {
	        var rawMethod = originalFactory(methodName, logLevel);
	        return function(message) {
	            rawMethod(label + ": " + message);
	        };
	    };
	    hpmmd.log.setLevel("trace");
	};
	hpmmd.setLogPrefix("ANALYTICS: metrics.js");

	/* 
	curlRequireD: Q - a promise framework used to ensure
	proper data dependency relationships during async processing.
	*/
	/** Q - promise framework 1.4.1 - see https://github.com/kriskowal/q
	*/
	(function(n){if("function"===typeof bootstrap)bootstrap("promise",n);else if("object"===typeof exports&&"object"===typeof module)module.exports=n();else if("function"===typeof define&&define.amd)define(n);else if("undefined"!==typeof ses)ses.ok()&&(ses.makeQ=n);else if("undefined"!==typeof window||"undefined"!==typeof self){var p="undefined"!==typeof window?window:self,B=p.Q;p.Q=n();p.Q.noConflict=function(){p.Q=B;return this}}else throw Error("This environment was not anticipated by Q. Please file a bug.");
	})(function(){function n(a){return function(){return W.apply(a,arguments)}}function p(a,b){if(C&&b.stack&&"object"===typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf("From previous event:")){for(var g=[],c=b;c;c=c.source)c.stack&&g.unshift(c.stack);g.unshift(a.stack);for(var g=g.join("\nFrom previous event:\n").split("\n"),c=[],d=0;d<g.length;++d){var h=g[d],k;if(k=B(h)){var t=k[1];k=k[0]===M&&t>=X&&t<=Y}else k=!1;k||(k=h,k=-1!==k.indexOf("(module.js:")||-1!==k.indexOf("(node.js:"));k||!h||c.push(h)}g=
	c.join("\n");a.stack=g}}function B(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b||(b=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a)))return[b[1],Number(b[2])];if(a=/.*@(.+):(\d+)$/.exec(a))return[a[1],Number(a[2])]}function N(){if(C)try{throw Error();}catch(a){var b=a.stack.split("\n"),b=0<b[0].indexOf("@")?b[1]:b[2];if(b=B(b))return M=b[0],b[1]}}function c(a){return a instanceof d?a:O(a)?Z(a):E(a)}function l(){function a(a){e=a;h.source=a;y(b,function(b,g){c.nextTick(function(){a.promiseDispatch.apply(a,
	g)})},void 0);g=b=void 0}var b=[],g=[],e,m=G(l.prototype),h=G(d.prototype);h.promiseDispatch=function(a,d,h){var k=f(arguments);b?(b.push(k),"when"===d&&h[1]&&g.push(h[1])):c.nextTick(function(){e.promiseDispatch.apply(e,k)})};h.valueOf=function(){if(b)return h;var a=P(e);u(a)&&(e=a);return a};h.inspect=function(){return e?e.inspect():{state:"pending"}};if(c.longStackSupport&&C)try{throw Error();}catch(k){h.stack=k.stack.substring(k.stack.indexOf("\n")+1)}m.promise=h;m.resolve=function(b){e||a(c(b))};
	m.fulfill=function(b){e||a(E(b))};m.reject=function(b){e||a(q(b))};m.notify=function(a){e||y(g,function(b,g){c.nextTick(function(){g(a)})},void 0)};return m}function v(a){if("function"!==typeof a)throw new TypeError("resolver must be a function.");var b=l();try{a(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}return b.promise}function Q(a){return v(function(b,g){for(var e=0,d=a.length;e<d;e++)c(a[e]).then(b,g)})}function d(a,b,c){void 0===b&&(b=function(a){return q(Error("Promise does not support operation: "+
	a))});void 0===c&&(c=function(){return{state:"unknown"}});var e=G(d.prototype);e.promiseDispatch=function(c,g,d){var m;try{m=a[g]?a[g].apply(e,d):b.call(e,g,d)}catch(f){m=q(f)}c&&c(m)};if(e.inspect=c){var m=c();"rejected"===m.state&&(e.exception=m.reason);e.valueOf=function(){var a=c();return"pending"===a.state||"rejected"===a.state?e:a.value}}return e}function r(a,b,g,e){return c(a).then(b,g,e)}function P(a){if(u(a)){var b=a.inspect();if("fulfilled"===b.state)return b.value}return a}function u(a){return a instanceof
	d}function O(a){return a===Object(a)&&"function"===typeof a.then}function H(){w.length=0;z.length=0;A||(A=!0)}function aa(a,b){A&&("object"===typeof process&&"function"===typeof process.emit&&c.nextTick.runAfter(function(){-1!==I(z,a)&&(process.emit("unhandledRejection",b,a),J.push(a))}),z.push(a),b&&"undefined"!==typeof b.stack?w.push(b.stack):w.push("(no stack) "+b))}function ba(a){if(A){var b=I(z,a);-1!==b&&("object"===typeof process&&"function"===typeof process.emit&&c.nextTick.runAfter(function(){var c=
	I(J,a);-1!==c&&(process.emit("rejectionHandled",w[b],a),J.splice(c,1))}),z.splice(b,1),w.splice(b,1))}}function q(a){var b=d({when:function(b){b&&ba(this);return b?b(a):this}},function(){return this},function(){return{state:"rejected",reason:a}});aa(b,a);return b}function E(a){return d({when:function(){return a},get:function(b){return a[b]},set:function(b,c){a[b]=c},"delete":function(b){delete a[b]},post:function(b,c){return null===b||void 0===b?a.apply(void 0,c):a[b].apply(a,c)},apply:function(b,
	c){return a.apply(b,c)},keys:function(){return ca(a)}},void 0,function(){return{state:"fulfilled",value:a}})}function Z(a){var b=l();c.nextTick(function(){try{a.then(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}});return b.promise}function R(a,b,g){return c(a).spread(b,g)}function S(a,b,g){return c(a).dispatch(b,g)}function x(a){return r(a,function(a){var c=0,e=l();y(a,function(d,h,k){var f;u(h)&&"fulfilled"===(f=h.inspect()).state?a[k]=f.value:(++c,r(h,function(d){a[k]=d;0===--c&&e.resolve(a)},
	e.reject,function(a){e.notify({index:k,value:a})}))},void 0);0===c&&e.resolve(a);return e.promise})}function T(a){if(0===a.length)return c.resolve();var b=c.defer(),g=0;y(a,function(c,d,h){c=a[h];g++;r(c,function(a){b.resolve(a)},function(){g--;0===g&&b.reject(Error("Can't get fulfillment value from any promise, all promises were rejected."))},function(a){b.notify({index:h,value:a})})},void 0);return b.promise}function U(a){return r(a,function(a){a=K(a,c);return r(x(K(a,function(a){return r(a,V,V)})),
	function(){return a})})}var C=!1;try{throw Error();}catch(da){C=!!da.stack}var X=N(),M,V=function(){},D=function(){function a(){for(var a,e;c.next;){c=c.next;a=c.task;c.task=void 0;if(e=c.domain)c.domain=void 0,e.enter();b(a,e)}for(;f.length;)a=f.pop(),b(a);d=!1}function b(b,c){try{b()}catch(g){if(k)throw c&&c.exit(),setTimeout(a,0),c&&c.enter(),g;setTimeout(function(){throw g;},0)}c&&c.exit()}var c={task:void 0,next:null},e=c,d=!1,h=void 0,k=!1,f=[];D=function(a){e=e.next={task:a,domain:k&&process.domain,
	next:null};d||(d=!0,h())};if("object"===typeof process&&"[object process]"===process.toString()&&process.nextTick)k=!0,h=function(){process.nextTick(a)};else if("function"===typeof setImmediate)h="undefined"!==typeof window?setImmediate.bind(window,a):function(){setImmediate(a)};else if("undefined"!==typeof MessageChannel){var F=new MessageChannel;F.port1.onmessage=function(){h=l;F.port1.onmessage=a;a()};var l=function(){F.port2.postMessage(0)},h=function(){setTimeout(a,0);l()}}else h=function(){setTimeout(a,
	0)};D.runAfter=function(a){f.push(a);d||(d=!0,h())};return D}(),W=Function.call,f=n(Array.prototype.slice),y=n(Array.prototype.reduce||function(a,b){var c=0,d=this.length;if(1===arguments.length){do{if(c in this){b=this[c++];break}if(++c>=d)throw new TypeError;}while(1)}for(;c<d;c++)c in this&&(b=a(b,this[c],c));return b}),I=n(Array.prototype.indexOf||function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),K=n(Array.prototype.map||function(a,b){var c=this,d=[];y(c,function(f,
	h,k){d.push(a.call(b,h,k,c))},void 0);return d}),G=Object.create||function(a){function b(){}b.prototype=a;return new b},ea=n(Object.prototype.hasOwnProperty),ca=Object.keys||function(a){var b=[],c;for(c in a)ea(a,c)&&b.push(c);return b},fa=n(Object.prototype.toString),L;L="undefined"!==typeof ReturnValue?ReturnValue:function(a){this.value=a};c.resolve=c;c.nextTick=D;c.longStackSupport=!1;"object"===typeof process&&process&&process.env&&process.env.Q_DEBUG&&(c.longStackSupport=!0);c.defer=l;l.prototype.makeNodeResolver=
	function(){var a=this;return function(b,c){b?a.reject(b):2<arguments.length?a.resolve(f(arguments,1)):a.resolve(c)}};c.Promise=v;c.promise=v;v.race=Q;v.all=x;v.reject=q;v.resolve=c;c.passByCopy=function(a){return a};d.prototype.passByCopy=function(){return this};c.join=function(a,b){return c(a).join(b)};d.prototype.join=function(a){return c([this,a]).spread(function(a,c){if(a===c)return a;throw Error("Can't join: not the same: "+a+" "+c);})};c.race=Q;d.prototype.race=function(){return this.then(c.race)};
	c.makePromise=d;d.prototype.toString=function(){return"[object Promise]"};d.prototype.then=function(a,b,g){function d(b){try{return"function"===typeof a?a(b):b}catch(c){return q(c)}}function f(a){if("function"===typeof b){p(a,h);try{return b(a)}catch(c){return q(c)}}return q(a)}var h=this,k=l(),t=!1;c.nextTick(function(){h.promiseDispatch(function(a){t||(t=!0,k.resolve(d(a)))},"when",[function(a){t||(t=!0,k.resolve(f(a)))}])});h.promiseDispatch(void 0,"when",[void 0,function(a){var b,d=!1;try{b="function"===
	typeof g?g(a):a}catch(e){if(d=!0,c.onerror)c.onerror(e);else throw e;}d||k.notify(b)}]);return k.promise};c.tap=function(a,b){return c(a).tap(b)};d.prototype.tap=function(a){a=c(a);return this.then(function(b){return a.fcall(b).thenResolve(b)})};c.when=r;d.prototype.thenResolve=function(a){return this.then(function(){return a})};c.thenResolve=function(a,b){return c(a).thenResolve(b)};d.prototype.thenReject=function(a){return this.then(function(){throw a;})};c.thenReject=function(a,b){return c(a).thenReject(b)};
	c.nearer=P;c.isPromise=u;c.isPromiseAlike=O;c.isPending=function(a){return u(a)&&"pending"===a.inspect().state};d.prototype.isPending=function(){return"pending"===this.inspect().state};c.isFulfilled=function(a){return!u(a)||"fulfilled"===a.inspect().state};d.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state};c.isRejected=function(a){return u(a)&&"rejected"===a.inspect().state};d.prototype.isRejected=function(){return"rejected"===this.inspect().state};var w=[],z=[],J=[],A=!0;
	c.resetUnhandledRejections=H;c.getUnhandledReasons=function(){return w.slice()};c.stopUnhandledRejectionTracking=function(){H();A=!1};H();c.reject=q;c.fulfill=E;c.master=function(a){return d({isDef:function(){}},function(b,c){return S(a,b,c)},function(){return c(a).inspect()})};c.spread=R;d.prototype.spread=function(a,b){return this.all().then(function(b){return a.apply(void 0,b)},b)};c.async=function(a){return function(){function b(a,b){var l;if("undefined"===typeof StopIteration){try{l=d[a](b)}catch(n){return q(n)}return l.done?
	c(l.value):r(l.value,e,f)}try{l=d[a](b)}catch(p){return"[object StopIteration]"===fa(p)||p instanceof L?c(p.value):q(p)}return r(l,e,f)}var d=a.apply(this,arguments),e=b.bind(b,"next"),f=b.bind(b,"throw");return e()}};c.spawn=function(a){c.done(c.async(a)())};c["return"]=function(a){throw new L(a);};c.promised=function(a){return function(){return R([this,x(arguments)],function(b,c){return a.apply(b,c)})}};c.dispatch=S;d.prototype.dispatch=function(a,b){var d=this,e=l();c.nextTick(function(){d.promiseDispatch(e.resolve,
	a,b)});return e.promise};c.get=function(a,b){return c(a).dispatch("get",[b])};d.prototype.get=function(a){return this.dispatch("get",[a])};c.set=function(a,b,d){return c(a).dispatch("set",[b,d])};d.prototype.set=function(a,b){return this.dispatch("set",[a,b])};c.del=c["delete"]=function(a,b){return c(a).dispatch("delete",[b])};d.prototype.del=d.prototype["delete"]=function(a){return this.dispatch("delete",[a])};c.mapply=c.post=function(a,b,d){return c(a).dispatch("post",[b,d])};d.prototype.mapply=
	d.prototype.post=function(a,b){return this.dispatch("post",[a,b])};c.send=c.mcall=c.invoke=function(a,b){return c(a).dispatch("post",[b,f(arguments,2)])};d.prototype.send=d.prototype.mcall=d.prototype.invoke=function(a){return this.dispatch("post",[a,f(arguments,1)])};c.fapply=function(a,b){return c(a).dispatch("apply",[void 0,b])};d.prototype.fapply=function(a){return this.dispatch("apply",[void 0,a])};c["try"]=c.fcall=function(a){return c(a).dispatch("apply",[void 0,f(arguments,1)])};d.prototype.fcall=
	function(){return this.dispatch("apply",[void 0,f(arguments)])};c.fbind=function(a){var b=c(a),d=f(arguments,1);return function(){return b.dispatch("apply",[this,d.concat(f(arguments))])}};d.prototype.fbind=function(){var a=this,b=f(arguments);return function(){return a.dispatch("apply",[this,b.concat(f(arguments))])}};c.keys=function(a){return c(a).dispatch("keys",[])};d.prototype.keys=function(){return this.dispatch("keys",[])};c.all=x;d.prototype.all=function(){return x(this)};c.any=T;d.prototype.any=
	function(){return T(this)};c.allResolved=function(a,b,c){return function(){"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(b+" is deprecated, use "+c+" instead.",Error("").stack);return a.apply(a,arguments)}}(U,"allResolved","allSettled");d.prototype.allResolved=function(){return U(this)};c.allSettled=function(a){return c(a).allSettled()};d.prototype.allSettled=function(){return this.then(function(a){return x(K(a,function(a){function d(){return a.inspect()}a=c(a);return a.then(d,
	d)}))})};c.fail=c["catch"]=function(a,b){return c(a).then(void 0,b)};d.prototype.fail=d.prototype["catch"]=function(a){return this.then(void 0,a)};c.progress=function(a,b){return c(a).then(void 0,void 0,b)};d.prototype.progress=function(a){return this.then(void 0,void 0,a)};c.fin=c["finally"]=function(a,b){return c(a)["finally"](b)};d.prototype.fin=d.prototype["finally"]=function(a){a=c(a);return this.then(function(b){return a.fcall().then(function(){return b})},function(b){return a.fcall().then(function(){throw b;
	})})};c.done=function(a,b,d,e){return c(a).done(b,d,e)};d.prototype.done=function(a,b,d){var e=function(a){c.nextTick(function(){p(a,f);if(c.onerror)c.onerror(a);else throw a;})},f=a||b||d?this.then(a,b,d):this;"object"===typeof process&&process&&process.domain&&(e=process.domain.bind(e));f.then(void 0,e)};c.timeout=function(a,b,d){return c(a).timeout(b,d)};d.prototype.timeout=function(a,b){var c=l(),d=setTimeout(function(){b&&"string"!==typeof b||(b=Error(b||"Timed out after "+a+" ms"),b.code="ETIMEDOUT");
	c.reject(b)},a);this.then(function(a){clearTimeout(d);c.resolve(a)},function(a){clearTimeout(d);c.reject(a)},c.notify);return c.promise};c.delay=function(a,b){void 0===b&&(b=a,a=void 0);return c(a).delay(b)};d.prototype.delay=function(a){return this.then(function(b){var c=l();setTimeout(function(){c.resolve(b)},a);return c.promise})};c.nfapply=function(a,b){return c(a).nfapply(b)};d.prototype.nfapply=function(a){var b=l();a=f(a);a.push(b.makeNodeResolver());this.fapply(a).fail(b.reject);return b.promise};
	c.nfcall=function(a){var b=f(arguments,1);return c(a).nfapply(b)};d.prototype.nfcall=function(){var a=f(arguments),b=l();a.push(b.makeNodeResolver());this.fapply(a).fail(b.reject);return b.promise};c.nfbind=c.denodeify=function(a){var b=f(arguments,1);return function(){var d=b.concat(f(arguments)),e=l();d.push(e.makeNodeResolver());c(a).fapply(d).fail(e.reject);return e.promise}};d.prototype.nfbind=d.prototype.denodeify=function(){var a=f(arguments);a.unshift(this);return c.denodeify.apply(void 0,
	a)};c.nbind=function(a,b){var d=f(arguments,2);return function(){var e=d.concat(f(arguments)),m=l();e.push(m.makeNodeResolver());c(function(){return a.apply(b,arguments)}).fapply(e).fail(m.reject);return m.promise}};d.prototype.nbind=function(){var a=f(arguments,0);a.unshift(this);return c.nbind.apply(void 0,a)};c.nmapply=c.npost=function(a,b,d){return c(a).npost(b,d)};d.prototype.nmapply=d.prototype.npost=function(a,b){var c=f(b||[]),d=l();c.push(d.makeNodeResolver());this.dispatch("post",[a,c]).fail(d.reject);
	return d.promise};c.nsend=c.nmcall=c.ninvoke=function(a,b){var d=f(arguments,2),e=l();d.push(e.makeNodeResolver());c(a).dispatch("post",[b,d]).fail(e.reject);return e.promise};d.prototype.nsend=d.prototype.nmcall=d.prototype.ninvoke=function(a){var b=f(arguments,1),c=l();b.push(c.makeNodeResolver());this.dispatch("post",[a,b]).fail(c.reject);return c.promise};c.nodeify=function(a,b){return c(a).nodeify(b)};d.prototype.nodeify=function(a){if(a)this.then(function(b){c.nextTick(function(){a(null,b)})},
	function(b){c.nextTick(function(){a(b)})});else return this};c.noConflict=function(){throw Error("Q.noConflict only works when Q is used as a global");};var Y=N();return c});

    /* Implement document.write of code */
    (function(_, log) {

        // Setup a cookie if we're using a valid test parameter
        if (location.href.indexOf("#testensighten") !== -1 || location.search.indexOf("testensighten=true") !== -1) {
            document.cookie = "testensighten=true";
        }
        if (location.href.indexOf("#testtealium") !== -1 || location.search.indexOf("testtealium=true") !== -1) {
            document.cookie = "testtealium=true";
        }
        // Setup a cookie if we're using a valid test parameter
        if (location.href.indexOf("#analyticslog") !== -1 || location.search.indexOf("analyticslog=true") !== -1) {
            document.cookie = "analyticslog=true";
        }

        // Setup the default file to load, which is our production file
        var fileToInsert = "//nexus.ensighten.com/hp/hpcom_prod/Bootstrap.js";
        log.disableAll(); // Disable all logging by default

        // Enable logging if required
        if (document.cookie.indexOf("analyticslog=true") !== -1) {
            log.enableAll();
        }
        // If we're in a valid test condition, then switch to the staging file instead
        if (document.cookie.indexOf("testtealium=true") !== -1) {
            fileToInsert = "//tags.tiqcdn.com/utag/hp/main/prod/utag.js";
            log.info("DEV Condition: Enabling Tealium code");
        } else if (document.cookie.indexOf("testensighten=true") !== -1) {
            fileToInsert = fileToInsert.replace("hpcom_prod", "hpcom_dev");
            log.info("DEV Condition: Enabling Ensighten code");
        } else {
            log.info("PRODUCTION Condition: Enabling Ensighten code");
        }
        // Check for HPE Company Metatag
        var isHPE = (function() {
            log.info("Assume: HPI-company metatag");
            return _.reduce(document.getElementsByTagName("meta"), function(finalValue, element) {
                if (!finalValue && element.name.toLowerCase() == "company_code") {
                    if (element.content.toLowerCase() == "hpe") {
                        finalValue = true;
                        log.info("Identified HPE-company metatag:" + element.name + "," + element.content)
                    }
                }
                return finalValue;
            }, false);
        })();
        // If HPE & Ensighten, then use the HPE Ensighten Bootstrap for now
        if (isHPE === true && fileToInsert.indexOf("ensighten.com/hp/") !== -1) {
            log.info("Switched to HPE Ensighten code");
            fileToInsert = fileToInsert.replace("/hp/", "/hpe/");
        }

        // Instantiate the Promise using Q - it's resolved within TMS signaling that 
        // Any dependencies can proceed forward
        window.waitForAnalyticsData = (function() {
            log.info("Setting up promise: check if data is ready");
            window._analyticsReadyPromise = Q.defer();
            return _analyticsReadyPromise.promise;
        })();


        if (!useAsyncAnalytics) {
            log.info("Sync load of Analytics Script:" + fileToInsert);
            // Synchronously write the DTM script
            hpmmd.setLogPrefix("ANALYTICS: TMS:");
            document.write('\x3Cscript type="text/javascript" src="' + fileToInsert + '">\x3C/script>');
        } else {
            log.info("Async load of Analytics Script:" + fileToInsert);
            // Async write the DTM script
            hpmmd.setLogPrefix("ANALYTICS: TMS:");
            (function(m, d, u, v) {
                m = fileToInsert;
                d = document;
                u = "script";
                v = d.createElement(u);
                v.src = m;
                v.type = "text/java" + u;
                m = d.getElementsByTagName(u)[0];
                m.parentNode.insertBefore(v, m)
            })();
        }
    })(__lodash, hpmmd.log);
}

if (window.useOldAnalyticsScript) {
    window._mbootstrap = {
        version: "20150219A",
        checkCaas: (function() {
            var _isCaasMetaReady = function() { //Caas ready check
                if (document.getElementsByName('hp_inav_version').length > 0 &&
                    document.getElementsByName('hp_inav_version')[0].getAttribute('content').indexOf('hfcaas') != -1) {
                    return true;
                } else {
                    return false;
                }
            };
            var _timer = 100,
                _timeLimit = 700;

            return {
                timer: _timer,
                timeLimit: _timeLimit,
                ready: function(callback) {
                    var timeout;
                    var me = this;
                    if (_isCaasMetaReady()) {
                        if (typeof(callback) == "function") {
                            callback();
                        }
                        clearTimeout(timeout);
                        this.timer = _timer; //reset timer
                    } else {
                        if (this.timer <= this.timeLimit) {
                            timeout = setTimeout(function() {
                                me.ready(callback);

                            }, this.timer);
                            if (this.timer < this.timeLimit) {
                                this.timer *= 2;

                                if (this.timer > this.timeLimit) {
                                    this.timer = this.timeLimit;
                                }
                            } else {
                                this.timer++;
                            }

                        } else if (this.timer > this.timeLimit) {
                            if (typeof(callback) == "function") {
                                callback();
                            }
                            clearTimeout(timeout);
                            this.timer = _timer; //reset timer
                        }
                    }

                }

            };
        })()
    };
    window.curl = {
        apiName: "curlRequire",
        apiContext: window,
        defineName: "curlDefine",
        defineContext: window
    };
    window.curlConfig = curl;
    window.hpmmd = window.hpmmd || {
        type: "HP Default Cleansheet Implementation",
        page: {},
        product: {},
        user: {},
        promo: {},
        legacy: {}
    };

    (function() {
        (function(r) {
            function l() {}
            function w(a, b) {
                return 0 == S.call(a).indexOf("[object " + b);
            }
            function x(a) {
                return a && "/" == a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a;
            }
            function E(a, b) {
                var d, c, f, g;
                d = 1;
                c = a;
                "." == c.charAt(0) && (f = !0, c = c.replace(T, function(a, b, c, f) {
                    c && d++;
                    return f || "";
                }));
                if (f) {
                    f = b.split("/");
                    g = f.length - d;
                    if (0 > g) return a;
                    f.splice(g, d);
                    return f.concat(c || []).join("/");
                }
                return c;
            }
            function C(a) {
                var b = a.indexOf("!");
                return {
                    h: a.substr(b + 1),
                    d: 0 <= b && a.substr(0, b)
                };
            }
            function A() {}
            function y(a, b) {
                A.prototype = a || N;
                var d = new A();
                A.prototype = N;
                for (var c in b) d[c] = b[c];
                return d;
            }
            function D() {
                function a(a, b, d) {
                    c.push([ a, b, d ]);
                }
                function b(a, b) {
                    for (var d, f = 0; d = c[f++]; ) (d = d[a]) && d(b);
                }
                var d, c, f;
                d = this;
                c = [];
                f = function(d, n) {
                    a = d ? function(a) {
                        a && a(n);
                    } : function(a, b) {
                        b && b(n);
                    };
                    f = l;
                    b(d ? 0 : 1, n);
                    b = l;
                    c = s;
                };
                this.k = function(b, c, f) {
                    a(b, c, f);
                    return d;
                };
                this.g = function(a) {
                    d.B = a;
                    f(!0, a);
                };
                this.e = function(a) {
                    d.pa = a;
                    f(!1, a);
                };
                this.v = function(a) {
                    b(2, a);
                };
            }
            function z(a) {
                return a instanceof D || a instanceof h;
            }
            function u(a, b, d, c) {
                z(a) ? a.k(b, d, c) : b(a);
            }
            function B(a, b, d) {
                var c;
                return function() {
                    0 <= --a && b && (c = b.apply(s, arguments));
                    0 == a && d && d(c);
                    return c;
                };
            }
            function e() {
                var a, b;
                a = [].slice.call(arguments);
                w(a[0], "Object") && (b = a.shift(), b = p(b));
                return new h(a[0], a[1], a[2], b);
            }
            function p(a, b, d) {
                var c, f, g;
                if (a && (k.R(a), m = k.b(a), "preloads" in a && (c = new h(a.preloads, s, d, H, !0), 
                k.N(function() {
                    H = c;
                })), g = (g = a.main) && String(g).split(U))) return f = new D(), f.k(b, d), a = g[1] ? function() {
                    new h([ g[1] ], f.g, f.e);
                } : f.e, new h([ g[0] ], f.g, a), f;
            }
            function h(a, b, d, c, f) {
                var g;
                g = k.l(m, s, [].concat(a), f);
                this.then = this.k = a = function(a, b) {
                    u(g, function(b) {
                        a && a.apply(s, b);
                    }, function(a) {
                        if (b) b(a); else throw a;
                    });
                    return this;
                };
                this.next = function(a, b, c) {
                    return new h(a, b, c, g);
                };
                this.config = p;
                (b || d) && a(b, d);
                k.N(function() {
                    u(f || H, function() {
                        u(c, function() {
                            k.r(g);
                        }, d);
                    });
                });
            }
            function K(a) {
                var b, d;
                b = a.id;
                b == s && (I !== s ? I = {
                    H: "Multiple anonymous defines encountered"
                } : (b = k.ca()) || (I = a));
                if (b != s) {
                    d = v[b];
                    b in v || (d = k.j(b, m), d = k.D(d.b, b), v[b] = d);
                    if (!z(d)) throw Error("duplicate define: " + b);
                    d.ga = !1;
                    k.F(d, a);
                }
            }
            function F() {
                var a = k.$(arguments);
                K(a);
            }
            var m, q, J, G = r.document, t = G && (G.head || G.getElementsByTagName("head")[0]), V = t && t.getElementsByTagName("base")[0] || null, P = {}, Q = {}, L = {}, W = "addEventListener" in r ? {} : {
                loaded: 1,
                complete: 1
            }, N = {}, S = N.toString, s, v = {}, M = {}, H = !1, I, R = /^\/|^[^:]+:\/\//, T = /(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g, X = /\/\*[\s\S]*?\*\/|\/\/.*?[\n\r]/g, Y = /require\s*\(\s*(["'])(.*?[^\\])\1\s*\)|[^\\]?(["'])/g, U = /\s*,\s*/, O, k;
            k = {
                n: function(a, b, d) {
                    var c;
                    a = E(a, b);
                    if ("." == a.charAt(0)) return a;
                    c = C(a);
                    a = (b = c.d) || c.h;
                    a in d.c && (a = d.c[a].m || a);
                    b && (0 > b.indexOf("/") && !(b in d.c) && (a = x(d.P) + "/" + b), a = a + "!" + c.h);
                    return a;
                },
                l: function(a, b, d, c) {
                    function f(b, c) {
                        var d, g;
                        d = k.n(b, n.id, a);
                        if (!c) return d;
                        g = C(d);
                        if (!g.d) return d;
                        d = v[g.d];
                        g.h = "normalize" in d ? d.normalize(g.h, f, n.b) || "" : f(g.h);
                        return g.d + "!" + g.h;
                    }
                    function g(b, d, g) {
                        var e;
                        e = d && function(a) {
                            d.apply(s, a);
                        };
                        if (w(b, "String")) {
                            if (e) throw Error("require(id, callback) not allowed");
                            g = f(b, !0);
                            b = v[g];
                            if (!(g in v)) throw Error("Module not resolved: " + g);
                            return (g = z(b) && b.a) || b;
                        }
                        u(k.r(k.l(a, n.id, b, c)), e, g);
                    }
                    var n;
                    n = new D();
                    n.id = b || "";
                    n.da = c;
                    n.G = d;
                    n.b = a;
                    n.w = g;
                    g.toUrl = function(b) {
                        return k.j(f(b, !0), a).url;
                    };
                    n.n = f;
                    return n;
                },
                D: function(a, b, d) {
                    var c, f, g;
                    c = k.l(a, b, s, d);
                    f = c.g;
                    g = B(1, function(a) {
                        c.q = a;
                        try {
                            return k.U(c);
                        } catch (b) {
                            c.e(b);
                        }
                    });
                    c.g = function(a) {
                        u(d || H, function() {
                            f(v[c.id] = M[c.url] = g(a));
                        });
                    };
                    c.I = function(a) {
                        u(d || H, function() {
                            c.a && (g(a), c.v(Q));
                        });
                    };
                    return c;
                },
                T: function(a, b, d, c) {
                    return k.l(a, d, s, c);
                },
                ba: function(a) {
                    return a.w;
                },
                J: function(a) {
                    return a.a || (a.a = {});
                },
                aa: function(a) {
                    var b = a.s;
                    b || (b = a.s = {
                        id: a.id,
                        uri: k.K(a),
                        exports: k.J(a),
                        config: function() {
                            return a.b;
                        }
                    }, b.a = b.exports);
                    return b;
                },
                K: function(a) {
                    return a.url || (a.url = k.C(a.w.toUrl(a.id), a.b));
                },
                R: function(a) {
                    var b, d, c, f, g;
                    b = "curl";
                    d = "define";
                    c = f = r;
                    if (a && (g = a.overwriteApi || a.na, b = a.apiName || a.ia || b, c = a.apiContext || a.ha || c, 
                    d = a.defineName || a.ka || d, f = a.defineContext || a.ja || f, q && w(q, "Function") && (r.curl = q), 
                    q = null, J && w(J, "Function") && (r.define = J), J = null, !g)) {
                        if (c[b] && c[b] != e) throw Error(b + " already exists");
                        if (f[d] && f[d] != F) throw Error(d + " already exists");
                    }
                    c[b] = e;
                    f[d] = F;
                },
                b: function(a) {
                    function b(a, b) {
                        var d, c, n, e, m;
                        for (m in a) {
                            n = a[m];
                            w(n, "String") && (n = {
                                path: a[m]
                            });
                            n.name = n.name || m;
                            e = f;
                            c = C(x(n.name));
                            d = c.h;
                            if (c = c.d) e = g[c], e || (e = g[c] = y(f), e.c = y(f.c), e.f = []), delete a[m];
                            c = n;
                            var q = b, h = void 0;
                            c.path = x(c.path || c.location || "");
                            q && (h = c.main || "./main", "." == h.charAt(0) || (h = "./" + h), c.m = E(h, c.name + "/"));
                            c.b = c.config;
                            c.b && (c.b = y(f, c.b));
                            c.S = d.split("/").length;
                            d ? (e.c[d] = c, e.f.push(d)) : e.o = k.Q(n.path, f);
                        }
                    }
                    function d(a) {
                        var b = a.c;
                        a.O = RegExp("^(" + a.f.sort(function(a, c) {
                            return b[c].S - b[a].S;
                        }).join("|").replace(/\/|\./g, "\\$&") + ")(?=\\/|$)");
                        delete a.f;
                    }
                    var c, f, g, n;
                    "baseUrl" in a && (a.o = a.baseUrl);
                    "main" in a && (a.m = a.main);
                    "preloads" in a && (a.oa = a.preloads);
                    "pluginPath" in a && (a.P = a.pluginPath);
                    if ("dontAddFileExt" in a || a.i) a.i = RegExp(a.dontAddFileExt || a.i);
                    c = m;
                    f = y(c, a);
                    f.c = y(c.c);
                    g = a.plugins || {};
                    f.plugins = y(c.plugins);
                    f.u = y(c.u, a.u);
                    f.t = y(c.t, a.t);
                    f.f = [];
                    b(a.packages, !0);
                    b(a.paths, !1);
                    for (n in g) a = k.n(n + "!", "", f), f.plugins[a.substr(0, a.length - 1)] = g[n];
                    g = f.plugins;
                    for (n in g) if (g[n] = y(f, g[n]), a = g[n].f) g[n].f = a.concat(f.f), d(g[n]);
                    for (n in c.c) f.c.hasOwnProperty(n) || f.f.push(n);
                    d(f);
                    return f;
                },
                j: function(a, b) {
                    var d, c, f, g;
                    d = b.c;
                    f = R.test(a) ? a : a.replace(b.O, function(a) {
                        c = d[a] || {};
                        g = c.b;
                        return c.path || "";
                    });
                    return {
                        b: g || m,
                        url: k.Q(f, b)
                    };
                },
                Q: function(a, b) {
                    var d = b.o;
                    return d && !R.test(a) ? x(d) + "/" + a : a;
                },
                C: function(a, b) {
                    return a + ((b || m).i.test(a) ? "" : ".js");
                },
                L: function(a, b, d) {
                    var c = G.createElement("script");
                    c.onload = c.onreadystatechange = function(d) {
                        d = d || r.event;
                        if ("load" == d.type || W[c.readyState]) delete L[a.id], c.onload = c.onreadystatechange = c.onerror = "", 
                        b();
                    };
                    c.onerror = function() {
                        d(Error("Syntax or http error: " + a.url));
                    };
                    c.type = a.M || "text/javascript";
                    c.charset = "utf-8";
                    c.async = !a.ea;
                    c.src = a.url;
                    L[a.id] = c;
                    t.insertBefore(c, V);
                    return c;
                },
                V: function(a) {
                    var b = [], d;
                    ("string" == typeof a ? a : a.toSource ? a.toSource() : a.toString()).replace(X, "").replace(Y, function(a, f, g, e) {
                        e ? d = d == e ? s : d : d || b.push(g);
                        return "";
                    });
                    return b;
                },
                $: function(a) {
                    var b, d, c, f, g, e;
                    g = a.length;
                    c = a[g - 1];
                    f = w(c, "Function") ? c.length : -1;
                    2 == g ? w(a[0], "Array") ? d = a[0] : b = a[0] : 3 == g && (b = a[0], d = a[1]);
                    !d && 0 < f && (e = !0, d = [ "require", "exports", "module" ].slice(0, f).concat(k.V(c)));
                    return {
                        id: b,
                        q: d || [],
                        A: 0 <= f ? c : function() {
                            return c;
                        },
                        p: e
                    };
                },
                U: function(a) {
                    var b;
                    b = a.A.apply(a.p ? a.a : s, a.q);
                    b === s && a.a && (b = a.s ? a.a = a.s.a : a.a);
                    return b;
                },
                F: function(a, b) {
                    a.A = b.A;
                    a.p = b.p;
                    a.G = b.q;
                    k.r(a);
                },
                r: function(a) {
                    function b(a, b, c) {
                        e[b] = a;
                        c && q(a, b);
                    }
                    function d(b, c) {
                        var d, f, g, e;
                        d = B(1, function(a) {
                            f(a);
                            p(a, c);
                        });
                        f = B(1, function(a) {
                            q(a, c);
                        });
                        g = k.X(b, a);
                        (e = z(g) && g.a) && f(e);
                        u(g, d, a.e, a.a && function(a) {
                            g.a && (a == P ? f(g.a) : a == Q && d(g.a));
                        });
                    }
                    function c() {
                        a.g(e);
                    }
                    var f, g, e, m, h, q, p;
                    e = [];
                    g = a.G;
                    m = g.length;
                    0 == g.length && c();
                    q = B(m, b, function() {
                        a.I && a.I(e);
                    });
                    p = B(m, b, c);
                    for (f = 0; f < m; f++) h = g[f], h in O ? (p(O[h](a), f, !0), a.a && a.v(P)) : h ? d(h, f) : p(s, f, !0);
                    return a;
                },
                Y: function(a) {
                    k.K(a);
                    k.L(a, function() {
                        var b = I;
                        I = s;
                        !1 !== a.ga && (!b || b.H ? a.e(Error(b && b.H || "define() missing or duplicated: " + a.url)) : k.F(a, b));
                    }, a.e);
                    return a;
                },
                X: function(a, b) {
                    var d, c, f, g, e, h, q, p, r, l, t, s;
                    d = b.n;
                    c = b.da;
                    f = b.b || m;
                    e = d(a);
                    e in v ? h = e : (g = C(e), p = g.h, h = g.d || p, r = k.j(h, f));
                    if (!(e in v)) if (s = k.j(p, f).b, g.d) q = h; else if (q = s.moduleLoader || s.ma || s.loader || s.la) p = h, 
                    h = q, r = k.j(q, f);
                    h in v ? l = v[h] : r.url in M ? l = v[h] = M[r.url] : (l = k.D(s, h, c), l.url = k.C(r.url, r.b), 
                    v[h] = M[r.url] = l, k.Y(l));
                    h == q && (g.d && f.plugins[g.d] && (s = f.plugins[g.d]), t = new D(), u(l, function(a) {
                        var b, f, g;
                        g = a.dynamic;
                        p = "normalize" in a ? a.normalize(p, d, l.b) || "" : d(p);
                        f = q + "!" + p;
                        b = v[f];
                        if (!(f in v)) {
                            b = k.T(s, f, p, c);
                            g || (v[f] = b);
                            var e = function(a) {
                                g || (v[f] = a);
                                b.g(a);
                            };
                            e.resolve = e;
                            e.reject = e.error = b.e;
                            a.load(p, b.w, e, s);
                        }
                        t != b && u(b, t.g, t.e, t.v);
                    }, t.e));
                    return t || l;
                },
                ca: function() {
                    var a;
                    if (!w(r.opera, "Opera")) for (var b in L) if ("interactive" == L[b].readyState) {
                        a = b;
                        break;
                    }
                    return a;
                },
                Z: function(a) {
                    var b = 0, d, c;
                    for (d = G && (G.scripts || G.getElementsByTagName("script")); d && (c = d[b++]); ) if (a(c)) return c;
                },
                W: function(a) {
                    var b;
                    (b = k.Z(function(b) {
                        if (b = b.getAttribute("data-curl-run")) a.m = b;
                        return b;
                    })) && b.setAttribute("data-curl-run", "");
                    return a;
                },
                N: function(a) {
                    setTimeout(a, 0);
                }
            };
            O = {
                require: k.ba,
                exports: k.J,
                module: k.aa
            };
            e.version = "0.8.1";
            e.config = p;
            F.amd = {
                plugins: !0,
                jQuery: !0,
                curl: "0.8.1"
            };
            m = {
                o: "",
                P: "curl/plugin",
                i: /\?|\.js\b/,
                u: {},
                t: {},
                plugins: {},
                c: {},
                O: /$^/
            };
            m = k.W(m);
            q = r.curl;
            J = r.define;
            q && w(q, "Object") || m.m ? (r.curl = s, p(q || m)) : k.R();
            v.curl = e;
            v["curl/_privileged"] = {
                core: k,
                cache: v,
                config: function() {
                    return m;
                },
                _define: K,
                _curl: e,
                Promise: D
            };
        })(this.window || "undefined" != typeof global && global || this);
        (function(r, l) {
            function w() {
                if (!l.body) return !1;
                F || (F = l.createTextNode(""));
                try {
                    return l.body.removeChild(l.body.appendChild(F)), F = K, !0;
                } catch (e) {
                    return !1;
                }
            }
            function x() {
                var m;
                m = A[l[C]] && w();
                if (!z && m) {
                    z = !0;
                    for (clearTimeout(h); e = p.pop(); ) e();
                    D && (l[C] = "complete");
                    for (var q; q = y.shift(); ) q();
                }
                return m;
            }
            function E() {
                x();
                z || (h = setTimeout(E, u));
            }
            var C = "readyState", A = {
                loaded: 1,
                interactive: 1,
                complete: 1
            }, y = [], D = l && "string" != typeof l[C], z = !1, u = 10, B, e, p = [], h, K, F;
            B = "addEventListener" in r ? function(e, h) {
                e.addEventListener(h, x, !1);
                return function() {
                    e.removeEventListener(h, x, !1);
                };
            } : function(e, h) {
                e.attachEvent("on" + h, x);
                return function() {
                    e.detachEvent(h, x);
                };
            };
            l && !x() && (p = [ B(r, "load"), B(l, "readystatechange"), B(r, "DOMContentLoaded") ], 
            h = setTimeout(E, u));
            curlDefine("curl/domReady", function() {
                function e(h) {
                    z ? h() : y.push(h);
                }
                e.then = e;
                e.amd = !0;
                return e;
            });
        })(this, this.document);
        (function(r, l, w) {
            curlDefine("curl/plugin/js", [ "curl/_privileged" ], function(r) {
                function E(e, p, h) {
                    function l() {
                        m || (u < new Date() ? h() : setTimeout(l, 10));
                    }
                    var u, m, q;
                    u = new Date().valueOf() + (e.fa || 3e5);
                    h && e.a && setTimeout(l, 10);
                    q = r.core.L(e, function() {
                        m = !0;
                        e.a && (e.B = w(e.a));
                        !e.a || e.B ? p(q) : h();
                    }, function(e) {
                        m = !0;
                        h(e);
                    });
                }
                function C(e, p) {
                    E(e, function() {
                        var h = y.shift();
                        u = 0 < y.length;
                        h && C.apply(null, h);
                        p.g(e.B || !0);
                    }, function(e) {
                        p.e(e);
                    });
                }
                var A = {}, y = [], D = l && !0 == l.createElement("script").async, z, u, B = /\?|\.js\b/;
                z = r.Promise;
                return {
                    dynamic: !0,
                    normalize: function(e, p) {
                        var h = e.indexOf("!");
                        return 0 <= h ? p(e.substr(0, h)) + e.substr(h) : p(e);
                    },
                    load: function(e, p, h, l) {
                        function r(e) {
                            (h.error || function(e) {
                                throw e;
                            })(e);
                        }
                        var m, q, w, x, t;
                        m = 0 < e.indexOf("!order");
                        q = e.indexOf("!exports=");
                        w = 0 < q ? e.substr(q + 9) : l.a;
                        x = "prefetch" in l ? l.prefetch : !0;
                        e = m || 0 < q ? e.substr(0, e.indexOf("!")) : e;
                        q = (q = l.dontAddFileExt || l.i) ? RegExp(q) : B;
                        t = p.toUrl(e);
                        q.test(t) || (t = t.lastIndexOf(".") <= t.lastIndexOf("/") ? t + ".js" : t);
                        t in A ? A[t] instanceof z ? A[t].k(h, r) : h(A[t]) : (e = {
                            name: e,
                            url: t,
                            ea: m,
                            a: w,
                            fa: l.timeout
                        }, A[t] = p = new z(), p.k(function(e) {
                            A[t] = e;
                            h(e);
                        }, r), m && !D && u ? (y.push([ e, p ]), x && (e.M = "text/cache", E(e, function(e) {
                            e && e.parentNode.removeChild(e);
                        }, function() {}), e.M = "")) : (u = u || m, C(e, p)));
                    },
                    cramPlugin: "../cram/js"
                };
            });
        })(this, this.document, function(r) {
            try {
                return eval(r);
            } catch (l) {}
        });
        curlDefine("curl/plugin/domReady", [ "../domReady" ], function(r) {
            return {
                load: function(l, w, x) {
                    r(x);
                }
            };
        });
    }).call(this);


    if (typeof(_) == "undefined" || /(sharepoint|intranet)\.hp\.com/gi.test(window.location.href)) {
        window._mbootstrap._ = doLodash();
    }
    curlDefine("Lodash", function() {
        return _mbootstrap._ || _;
    });
    (function() {
        var _ = window._mbootstrap._;
        function getMetadata(cc) {
            function _prv_defRegion(cc) {
                var rval = {};
                // Classify the region based on country code / lookup
                var cc1 = cc||"us"; 
                cc1=cc1.toLowerCase() + ":";
                var ap = "au:cn:hk:hk:in:id:jp:kr:my:nz:ph:sg:tw:th:vn:", emea = "emea_africa:at:be:be:by:bg:hr:cz:dk:ee:fi:fr:de:gr:hu:ie:il:it:kz:lv:lt:emea_middle_east:nl:no:pl:pt:ro:ru:rs:sa:sk:si:za:es:se:ch:ch:tr:ua:uk:", na = "us:ca:", la = "ar:bo:br:jm:lamerica_nsc_carib:lamerica_nsc_cnt_amer:cl:co:ec:mx:py:pe:pr:uy:ve:", caemea = "al:am:az:ba:dz:ge:is:ke:ks:ma:md:mk:mt:ng:tn:pk:bd:lk:";
                /*  Assume US / NA If not already defined */
                rval.major_region = "ams";
                if (na.indexOf(cc1) != -1) {
                }
                if ((caemea + emea).indexOf(cc1) != -1) {/* Assume EMEA if country is defined */
                    rval.major_region = "emea";
                }
                if (ap.indexOf(cc1) != -1) {/* Assume APJ if country is defined and matches lookup */
                    rval.major_region = "apj";
                }
                if (la.indexOf(cc1) != -1) {/* Assume Americas if country is defined */
                    rval.major_region = "ams";
                }
                return rval.major_region;
            }
        
            var d = document, wl = window.location, mt = d.getElementsByTagName("meta"), tmp = {};
            var hostname=wl.hostname;
            
            for ( var i = mt.length - 1; i >= 0; i--) {
                if (mt[i].name.length > 0) {
                    tmp[mt[i].name.toLowerCase()] = (mt[i].content ? mt[i].content.toLowerCase() : "");
                }
            }
            if((/shopping.hp.com/).test(hostname)) {
                tmp.web_section_id="r329"; /* Override Shopping.hp.com web section ID */
            }
            if(!!cc) {tmp.target_country=cc;}
            tmp.language = d.getElementsByTagName("html")[0].lang;
            tmp.url = wl.href;
            tmp.hostname = tmp.hn = wl.hostname;
            tmp.country=tmp.target_country;
            tmp.qs = wl.search;
            tmp.all = true;
            tmp.region = _prv_defRegion(tmp.target_country);
            return tmp;
        }
        
        var preproductionDomains = [
                "extweb.hp.com",
                "b2bsiteitg.hp.com",
                "itg.b2b.hp.com",
                "eprime20.houston.hp.com",
                "eprime21.houston.hp.com",
                "hpswlabs.adapps.hp.com",
                "54.243.202.120",
                "h20352.www2.hp.com",
                "23.23.85.154",
                "hp-webplatform.com",
                /* Temporary: Remove at request of team */
                "hpwsn.com/staging",
                "digby.com",
                "itg-live.www8.hp.com",
                "toran.hpconnected.com",
                "stg.www8.hp.com",
                "webauth-dev2.hpconnecteddev.com",
                "webauth-stage1.hpconnectedstage.com",
                "webauth-pie1.hpconnectedpie.com",
                "webauth-test1.hpconnectedtest.com",
                "webauth-ref2.hpconnectedref.com",
                "local.hpconnecteddev.com:8080",
                "ui-cs-dev.ads.corp.hp.com",
                "itghpn-app.austin.hp.com" /*unknown code set*/
            ],
            explicitDevDomains = [
                "localhost",
                "itcs.hp.com",
                "h30434.sdc.hp.com"
            ],
            explicitProDomains = [
                "qrc.itcs.hp.com",
                "qrc.glb.itcs.hp.com",
                "qrc4.itcs.hp.com",
                "wwclass-ext-prod.itcs.hp.com",
                "printsuppliespro.glb.itcs.hp.com"
            ],
            w = window.location, url = w.href;
        if(w.hostname.indexOf("eprime")==-1) {
            preproductionDomains.push("atlanta.hp.com");
            preproductionDomains.push("houston.hp.com");
            preproductionDomains.push("austin.hp.com");
        }
        if(/g\d+t\d+g\.(houston|austin|atlanta)\.hp\.com/.test(w.hostname)) {
            explicitDevDomains.push("atlanta.hp.com");
            explicitDevDomains.push("houston.hp.com");
            explicitDevDomains.push("austin.hp.com");
        }
        var userAgent = navigator.userAgent.toLowerCase(),
            isWebkit = userAgent.indexOf("webkit") !== -1 || userAgent.indexOf("chrome") !== -1,
            isdev = !isdev && (_.reduce(explicitDevDomains, function (others, i) {
                return others || (!!i.exec ? i.test(url) : url.indexOf(i) != -1);
            }, false) || w.search.indexOf("hpanalyticsdev=") != -1 || document.cookie.indexOf("hpanalyticsdev=true") !== -1),
            isitg = !isdev && (_.reduce(preproductionDomains, function (others, i) {
                return others || (!!i.exec ? i.test(url) : url.indexOf(i) != -1);
            }, false) || w.search.indexOf("hpanalyticsitg=") != -1 || document.cookie.indexOf("hpanalyticsitg=true") !== -1),
            ispro = !(isdev || isitg)|| (_.reduce(explicitProDomains, function (others, i) {
                return others || (!!i.exec ? i.test(url) : url.indexOf(i) != -1);
            }, false)),
            isssl = w.protocol.indexOf("https") != -1,
            nocache = w.search.indexOf("nocache=") !== -1 || document.cookie.indexOf("nocache=true")!==-1;
        if (w.search.indexOf("hpanalyticspro=") != -1 || document.cookie.indexOf("hpanalyticspro=") != -1 || ispro==true) {
            ispro = true;
            isdev = false;
            isitg = false;
        }
        window._mbootstrap.stage = {ispro:ispro, isitg:isitg, isdev:isdev};
        
        
        if (!(isdev || isitg)) {
            curlDefine("debug/HPLog", function () {
                /* Window logging function */
                var log = function () {
                };
                return {
                    log:log,
                    warn:log,
                    error:log
                };
            });
            
        }
        var mybaseUrl = w.protocol + "//" + (!nocache && (ispro || isitg) ? (isssl ? "ssl." : "") + "www8.hp.com/h10000" : "www.hp.com") + "/cma/ng/lib";
        function updateURL(url, welcomeCacheFlag) {
            if (!!nocache) {
                url = url.replace("www8.hp.com/h10000", "www.hp.com").replace("ssl.www8.hp.com/h10000", "www.hp.com");
                document.cookie="nocache=true";
            }
            else if (!!welcomeCacheFlag && ispro) {
                url = url.replace("www8.hp.com/h10000", "welcome.hp-ww.com").replace("ssl.www8.hp.com/h10000", "secure.hp-ww.com");
            }
            if(isdev) {
                url = url.replace("www.hp.com", "www.hp.com").replace(".js", "_dev.js");
                document.cookie="hpanalyticsdev=true";
            }
            if(isitg) {
                url = url.replace("www.hp.com", "www.hp.com").replace(".js", "_itg.js");
                document.cookie="hpanalyticsitg=true";
            }
            return url;
        }
        mybaseUrl = updateURL(mybaseUrl);
        /* The first matching criteria is used, otherwise, the default case is used if no other criteria match */
        var map = [
            [
                {type: "ePC Deployment"},
                {url:(/hpanalyticsdev\=epc/)},
                {url:(/hp-webplatform.com/)},
                {url:(/hpconnected.*\.com/)},
                {url:(/54.243.202.120/)},
                {url:(/23.23.85.154/)},
                {url:(/cloudpublish.com/)},
                [ updateURL("js!abmvt/abmvt2.js"), updateURL("js!exceptions/hpanalytics_common.js")]
            ],
            /* Expire in 6 months */
            [
                {url:(/www.digitalimmersion.fr/)},
                {url:(/www8\.hp\.com\/h20158\/barcelona\/discover\/d\/index.html/)},
                updateURL("js!static/expires-20140630/staticAdobe.js")
            ],
        
            [
                {url:(/h30471\.[^\.]+\.hp\.com/)},
                {url:(/h30467\.[^\.]+\.hp\.com/)},
                {url:(/h30478\.[^\.]+\.hp\.com/)},
                {url:(/h30487\.[^\.]+\.hp\.com/)},
                {url:(/h30491\.[^\.]+\.hp\.com/)},
                {url:(/h30492\.[^\.]+\.hp\.com/)},
                {url:(/h30434\.[^\.]+\.hp\.com/)},
                updateURL("js!unity_cleansheet.js")
            ],
        
            [
                {url:(/hpanalyticsdev\=unity/)},
                updateURL("js!unity/hpanalytics_common.js")
            ],
            [
                {url:(/one.hp.com/)},
                updateURL("js!hpanalytics_onehp.js")
            ],
            [
                {url:(/intranet.hp.com/)},
                {url:(/sharepoint.hp.com/)},
                updateURL("js!hpanalytics_intranet.js")
            ],
            [
                {url:(/shopping\d?.hp.com/)},
                [updateURL("js!atlas_jsmd.js"), updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {url:(/m.hpdirect.com/)},
                {url:(/digby.com/)},
                [updateURL("js!atlas_mobile.js")]
            ],
            [
                {url:(/developer.hpgivingcards.com/)},
                updateURL("js!exceptions/hpanalytics_common_dev.js")
            ],
            [
                {url:(/twosmiles.com/)},
                {url:(/hpgivingcards.com/)},
                updateURL("js!exceptions/hpanalytics_common.js")
            ],
            /* [{region: "emea"},
             [updateURL("js!exceptions/hpanalytics_common.js"),updateURL("js!bluekai/hpbluekai.js")]], */
            [
                {url:(/us\/en\/software\/enterprise\-software/)},
                [updateURL("js!hpanalytics_common.js"), updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {type: "Unity eCommerce"},
                {url:(/(eprime|epdev|elite)\d+\.(atlanta|houston|austin)\.hp\.com\/is\-bin\/INTERSHOP\.enfinity\/WFS/i)},
                {url:(/(b2b|b2bsite)\.hp\.com/i)},
                {url:(/(h20143\.www2\.hp\.com|b2bsiteitg\.hp\.com)\/cgi\-bin\/ccg.dll\/JavaContentGateway/)},
                [updateURL("js!unity_store.js"),updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {url:(/h41145.www4.hp.com\/qr\/hpe\/m\/ipg\/printers\.php/)},
                [updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurveyNoncore.js")]
            ],
            [
                {type: "HP Mobile Marketing"},
                {url:(/qrc\.itcs\.hp\.com\/[^\/]+\/[^\/]+\/m\//)},
                {url:(/qrc\.itcs\.hp\.com\/m\//)},
                [updateURL("js!bluekai/hpbluekai.js"), updateURL("js!unity_mobile.js"), updateURL("js!survey/qualtricsSurveyNoncore.js")]
            ],
            [
                {target_country:"jp"},
                // {url:(/directplus\/personal/)},{url:(/is-bin\/INTERSHOP\.enfinity/i)},
                [updateURL("js!hpanalytics_apj.js"), updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {target_country:"jp"},
                {url:(/(h20547\.www2\.hp\.com|h50146\.www5\.hp\.com\/directplus\/)/i)},
                [updateURL("js!//ct.eco-tag.jp/44597248?dk=20130430")]
            ],
            [
                {region:"emea"},
                [updateURL("js!hpanalytics_emea.js"), updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {region:"ams"},
                [updateURL("js!hpanalytics_ams.js"), (function() {if(!!!window.isBluekaiLoaded){return updateURL("js!bluekai/hpbluekai.js")} else{ return updateURL("js!hpanalytics_ams.js")}})(), updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {region:"apj"},
                [updateURL("js!hpanalytics_apj.js"), updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {url:(/h30507.www3.hp.com/)},
                [updateURL("js!hpanalytics_common.js"), updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurvey.js")]
            ],
            [
                {defaultcase:true},
                [updateURL("js!hpanalytics_ams.js"), updateURL("js!bluekai/hpbluekai.js"), updateURL("js!survey/qualtricsSurvey.js")]
            ]
            /* The default case is only used if nothing else matches  - always make this 'last' */
        ];
        
        var metatags = hpmmd.metatags = getMetadata();
        
        function doMapping(map, url, metatags) {
            return _.reduce(map, function (current, entry) {
                var tail = entry[entry.length - 1], head = entry.slice(0, entry.length - 1),
                    doesMatch = _.reduce(head, function (result, value) {
                        if (!!value.url) {
                            result = result || (!!value.url.test ? value.url.test(url) : url.indexOf(value.url) != -1);
                        }
                        if (!!value.target_country) {
                            result = result || (metatags.target_country == value.target_country);
                        }
                        if (!!value["type"]) {
                            result = result || (hpmmd["type"] == value["type"]);
                        }
                        return result || metatags.region == value.region;
                    }, false);
                var rval = current;
                /* Assume we use already matched entries if they exist U */
                /* If there's not an already matched entry and the doesMatch result for the current entry is true, OR
                 if there's not an already matched entry and wehave a default-case = true condition, then use the current entry (tail) */
                if ((current.length === 0 && doesMatch) || (current.length === 0 && head[0].defaultcase)) {
                    rval = [tail];
                }
                return rval;
            }, []);
        }
        
        

        function injectScripts() {
            var DATE_KEY_OFFSET = 1,
                x = (new Date()),
                dtKey = Math.floor(x.getTime() / (1000 * 60 * 60 * 24)) + DATE_KEY_OFFSET,
                preliminaryMap = doMapping(map, w.href, metatags),
                finalMap = _.map(_.flatten(preliminaryMap), function(jsFile) {
                    return jsFile.replace(".js", ".js?dtkey=" + dtKey);
                });
            if (isdev || isitg) {
                finalMap.push("debug/HPLog");
            }
            /*Enable IE support shim for JSON on old browsers*/
            if (typeof(JSON) === "undefined" || typeof(JSON.stringify) === "undefined") {
                finalMap.push("ie/legacy_ie_support");
            }


            curlConfig.baseUrl = mybaseUrl;
            curlRequire(curlConfig, finalMap).then(function() {
                window._mbootstrap.done = true;
            }, function(exception) {});
        }

        /*TO DO: Race condition happening on webkit, added a delay as a hot patch, in the future investigate if this could be fixed using other approach*/
        if (isWebkit) {
            setTimeout(injectScripts, 1000);
        } else {
            injectScripts();
        }
        // injectScripts();
    })();
}