var debugOmniture = false;


jQuery(document).ready(function() {
  jQuery('.clickTrack').click( function(){
    var href = jQuery(this).attr('href');
    var utilityLabel=jQuery(this).attr('utilityLabel');
    var utilityValue=jQuery(this).attr('utilityValue');
    var sourceData=jQuery(this).attr('sourceData');

    //console.log('clicked on a tracked link' + href);
    //trackcustomlinks('tosn','solve','HP PSC 2355 All-in-One Printer');
    trackcustomlinksOverride(utilityLabel, utilityValue, sourceData);
    if (debugOmniture)
      return false;
  })
    
});

