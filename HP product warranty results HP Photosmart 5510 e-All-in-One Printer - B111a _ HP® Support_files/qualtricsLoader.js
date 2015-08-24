// Qualtrics loader script
// AMD compatible
// Avoiding dependencies (i.e. jQuery) for simple <script> tag compatibility

var qualtricsLoader = function() {
  // Note: the 'ZN_eXx818Wz4MzXpE8' value is also used for the <div> ID after the try/catch block below
  var ZN_eXx818Wz4MzXpE8_ed = '';
  var locProtocol = location.protocol;
  if (locProtocol == null || locProtocol == undefined) { locProtocol = 'https:'; }
  var ZN_eXx818Wz4MzXpE8_url = locProtocol + '//siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_eXx818Wz4MzXpE8' + ZN_eXx818Wz4MzXpE8_ed;
  //console.log('qualtrics url: ' + ZN_eXx818Wz4MzXpE8_url);
  var ZN_eXx818Wz4MzXpE8_sampleRate = 100;
  var q_si_f = function () {
    if (Math.random() >= ZN_eXx818Wz4MzXpE8_sampleRate / 100) return;

    var qualtricsScript = document.createElement('script');
    qualtricsScript.type = 'text/javascript';
    qualtricsScript.src = ZN_eXx818Wz4MzXpE8_url + '&Q_LOC=' + escape(window.location.href);

    if (document.body) {
      document.body.appendChild(qualtricsScript);
    }
  };

  try {
    if (window.addEventListener) {
      window.addEventListener('load', q_si_f, false);
    }
    else if (window.attachEvent) {
      r = window.attachEvent('onload', q_si_f);
    }
    else {
    }
  }
  catch (e) {

  };

/*  var qualtricsDiv = document.createElement('div');
  qualtricsDiv.id = 'ZN_eXx818Wz4MzXpE8';
  if (document.body) {
    document.body.appendChild(qualtricsDiv);
  }*/
};

if (typeof define === 'function' && define.amd) {
  define(function() {
    return qualtricsLoader;
  });
}
else {
  qualtricsLoader();
}