 
$(document).ready(function() {

  $('#pnameId2, #qryId2').keyup(function(e){
    if(e.which == 13) {
      $(this).closest('form').submit();
    }
  });

   $('input[type="text"]').addClass('placeholder').focus(function() {
    var initialValue = $(this).val();
    var startVal = $(this).attr( 'startVal' );
    var placeholderText = $(this).attr('title');
    
    //if current text field value = placeholder text (title value, in this case)
    //make blank else, 
    //remove placeholder class & do not clear text field  upon click
    if(($.trim($(this).val()) == placeholderText) || ($.trim($(this).val()) == startVal)){
        $(this).val('');        
    }else{
        $(this).removeClass('placeholder');
    };
    
  }).blur(function() {
    //if the field is empty or value equals placeholder text, add placeholder class
    var val = $.trim($(this).val());
    var startVal = $(this).attr( 'startVal' );
    var title = $(this).attr('title');
    
    if (val.length == 0 || val == title || val == startVal) {
      if(startVal == null || startVal == '') {
        $(this).addClass('placeholder').val($(this).attr('title'));
      } else {
        $(this).addClass('placeholder').val($(this).attr('startVal'));  
      }
    };
  });
  
  //on change, if placeholder class is assigned, remove it
  //add .blackText to alter text color
  $('input[type="text"]').change(function(){
      if($(this).hasClass('placeholder')){
          $(this).removeClass('placeholder');
      }
          $(this).addClass('blackText');
  });
  
  //business rule: qryId should not be submitted with placeholder text or empty string  
  $("#twoBoxSearch").submit(function() {        
      if ($("#qryId").val()== $("#qryId").attr('title')) {
        $("#qryId").val('');      
        var the_result=checkQuestionMandatory(true);
        return the_result;          
      }else if($("#qryId").val()== ""){
          var the_result=checkQuestionMandatory(true);
          return the_result;
      }else{
        if($("#pnameId").val() == $("#pnameId").attr('title')){         
          $("#pnameId").val('');      
        }
          return true;
      }      
    }); 

  $("#twoBoxSearch2").submit(function() {   
    if ($("#qryId2").val()== $("#qryId2").attr('title')) {
        $("#qryId2").val('');      
        var the_result=checkQuestionMandatory2(true);
        return the_result;          
      }else if($("#qryId2").val()== ""){
        var the_result=checkQuestionMandatory2(true);
        return the_result;
      }else{
      if($("#pnameId2").val() == $("#pnameId2").attr('title')){      
        $("#pnameId2").val('');   
      }
        return true;
      }   
    });

  if($('#searchProduct').val() === '') {
    $('#pnameId').val('');
  }

  $('a[rel]#videoButton').overlay({
    top: 50,
    mask: { 
      color: '#000000',
      loadSpeed: 0,
      opacity: 0.5
    },
    closeOnClick: false,
    onLoad: function() {
      var overlay = this.getOverlay();
      var maskWidth = $('#exposeMask').width();
      var overlayWidth = overlay.width();
      var left = (maskWidth / 2 - overlayWidth / 2);
      overlay.css({left : left});
      
      //$('#exposeMask').height($(document).height());
      if ($.browser.msie && $.browser.version == "7.0") {
        this.getOverlay().insertAfter('#exposeMask');
      }
    }
  });
  
  // overlay setup for Search Tips | searchResults page
 $('#body .contentBlock a[rel]').overlay({
      top: 50,
      mask: { color: '#000000', loadSpeed: 200, opacity: 0.5 },
      closeOnClick: false, 
      onLoad: function() { 
          this.getOverlay().insertAfter('#exposeMask');
      }
  });
 
   // overlay setup for Search Tips | search page
 $('#prodfinder a[rel]').overlay({
    top: 50,
    mask: { color: '#000000', loadSpeed: 200, opacity: 0.5 },
    closeOnClick: false, 
    onLoad: function() { 
      this.getOverlay().insertAfter('#exposeMask');
    }
  });
  
  $('div[rel]').overlay({
      top: 50,            
      mask: { color: '#000000', loadSpeed: 200, opacity: 0.5 },
      closeOnClick: false, 
      onLoad: function() { this.getOverlay().insertAfter('#exposeMask'); }
  });
  
  $('span[rel]').overlay();
  $('img[rel]').overlay();  
  
  //tooltip setup
  $(".hoverOverlayButton").tooltip({      
      position: 'top center',      
      relative:'true',    
      effect: 'slide'          
  });
  
  //special case: needed to prevent tooltip from covering 'next' button on softwareCat page CR2732
  $(".hoverOverlayButtonBelow").tooltip({          
    position: 'bottom center',          
    relative:'true',
    effect: 'slide'              
  });
 
  //geoLocator
  $("#clcHdrContent").overlay({
    top: 200,
    mask: {
      color: '#000000',
      loadSpeed: 200,
      opacity: 0.5
    },
    closeOnClick: false,
    onLoad:  function() { this.getOverlay().insertAfter('#exposeMask'); setTimeout(function(){$.mask.fit();}, 800); },
    load: true
  });

//generic non-autoload overlay 
  $(".jqOverlayTreatment").overlay({            
      top: 25,            
      mask: {        
          color: '#000000',
          loadSpeed: 200,
          opacity: 0.5
      },
      closeOnClick: false,
      //fixes IE7 z-index bug
      onLoad:  function() {
            this.getOverlay().insertAfter('#exposeMask');}
  
  });
    
  //This is added for email form overlay. In order to display message on click of accept radio button
  $("#survey_0[rel]").overlay({            
          top: 25,            
          mask: {        
              color: '#000000',
              loadSpeed: 200,
              opacity: 0.5
          },
          closeOnClick: false,
          //fixes IE7 z-index bug
          onLoad:  function() {
                this.getOverlay().insertAfter('#exposeMask');},
          onClose: function() {
              $('#survey_0').prop('checked','checked');
          }
      
 });
    
  //media order error overlay  non-autoload and NOT modal. User needs access to text fields on the page.
  $(".businessError").overlay({
    top: 25,
    api: true,
    mask: {        
      color: '#000000',
      loadSpeed: 200,
      opacity: 0.5
     },
     closeOnClick: true,
     onLoad:  function() {
          this.getOverlay().focus();
          this.getOverlay().insertAfter('#exposeMask');
      }, 
      onClose: function(){          
          moApp.errorList.reset();
      }
  });

  $('.jqOverlay .close').click( function(button) {
      button.preventDefault();
  });
  
  //controls sequence of events on weDispute form submit. Fixes IE issue.
  $("#disputeForm").submit(function() {
  
        var rd1Chk = $("#disputeReason1").attr('checked');
        var rd2Chk = $("#disputeReason2").attr('checked');  
        var rd3Chk = $("#disputeReason3").attr('checked');
        var rd4Chk = $("#disputeReason4").attr('checked');
        var rd5Chk = $("#disputeReason5").attr('checked');
        
        $('#hideAtch').show();
        var the_result = weDisputeWfv(this);
        if(rd2Chk == true || rd5Chk == true || rd2Chk == 'checked' || rd5Chk == 'checked'){
          $('#hideAtch').hide();
        }else if(rd1Chk == true || rd3Chk == true || rd4Chk == true || rd1Chk == 'checked' || rd3Chk == 'checked' || rd4Chk == 'checked'){
          $('#hideAtch').show();
        }else{
          $('#hideAtch').hide();
        }
        
        if(the_result){
          $("#disputeContentId").overlay({
            load:true
          });
        }
        return the_result;
    });

  //BrightCove IE and Firefox Video Bug Fix
  $('#videoContent #videoClose').bind("click", function(){
      window.location.reload();
  });

  $('.hidden').hide(); 

  $('.limited').each( function() {
    var limitedLimit = $(this).attr('limit') - 1;
    $(this).children('.wcLink:gt('+ limitedLimit +')').hide();
    $(this).children(':not(.wcLink):gt('+ limitedLimit +')').hide();
    // hide see more link if there are less links than the limit.
    var limitedLength = $(this).children().length;
    var limitedName = $(this).attr('name');
    if ( limitedLength <= limitedLimit ) {
       $('[linkFor='+limitedName+']').hide();
    }
  });

  // find the show more element for a limited and make it handle clicks.
  $('[linkFor='+$('.limited').attr('name')+']').click( function() {
    var linkForName = $(this).attr('linkFor');
    $('.limited[name='+linkForName+']').children().slideDown( 'slow', function(){} );
    // hide show more link
    $(this).hide();
  });

  if ($('input').is('.privacy_validate_tw')) {
    $('#continue').click( function(e) {
      if ($('#privacy_1_tw')[0].checked) {
        return wfv(document.email);
      } else {
        $('#privacyDocPopup').overlay().load();
        return false;
      }
    });
  } else if ($('input').is('.privacy_validate')) {
    $('#privacyDocPopup').hide();
    $('#continue').click( function(e) {
      var p1 = $('input[name="privacy_1_opt"]:radio:checked').addClass('checked').val();
      var p2 = $('input[name="privacy_2_opt"]:radio:checked').addClass('checked').val();
      var p3 = $('input[name="privacy_3_opt"]:radio:checked').addClass('checked').val();
      var result = false;
  
      if (p1 == "yes" && p2 == "yes" && p3 != undefined) {
         result = true;
      } else {
         $('#privacyDocPopup').slideDown('slow', function(){});
      }
      result=wfv(document.email) && result;
      return result;
  });
  
  } else {
    $('#continue').click( function() {
      return wfv(document.email); 
    });
  }
  
  // clickPost event
  $("a.clickPost").click( function() { $('#disputeEmailForm').submit(); return false; });
  $("a.clickPhonePost").click( function() { $('#callForm').submit(); return false; });
  
});

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20')) || null;
}


function displaySoftwareDownloadOverlayText(BrowserDetection){
    if (BrowserDetection){
        //show hide overlay

        
        if( $("#Chrome").length===1 &&
            $("#Firefox").length===1  &&
            $("#Opera").length===1  &&
            $("#IE8").length===1  &&
            $("#IE9").length===1  &&
            $("#Other_Browser").length===1 &&
            $("#Known_BrowserInstructions").length===1 &&
            $("#Other_BrowserInstructions").length===1 ) {
        
        //$("#browserTabs").tabs(); Known_BrowserInstructions
        
        $("#Chrome").hide();
        $("#Firefox").hide();
        $("#Opera").hide();
        $("#IE8").hide();
        $("#IE9").hide();
        $("#Other_Browser").hide();
        $("#Other_BrowserInstructions").hide();

        //Detect browser version to show or hide divs for software category overlay2-
        if (BrowserDetection.browser==="Chrome"){
            $("#Chrome").show();
        }else if (BrowserDetection.browser==="Firefox"){
            $("#Firefox").show();
        }else if (BrowserDetection.browser==="Opera" || (BrowserDetection.browser==="Mozilla" && BrowserDetection.browserVersion==="an unknown version") ) {
            $("#Opera").show();
        }else if ( BrowserDetection.browser==="MSIE" || BrowserDetection.browser==="Explorer" ) {
            
            if (BrowserDetection.browserVersion >= 9){
                $("#IE9").show();
            }else if ( BrowserDetection.browserVersion === 8) {
                $("#IE8").show();
            }else{
              $("#Known_BrowserInstructions").hide();
              $("#Other_BrowserInstructions").show();
              $("#Other_Browser").show();
            }
        }else if (BrowserDetection.browser==="Mozilla" && BrowserDetection.browserVersion >= 11){//Incredibly IE11 is detected as Mozilla ver 11.
            $("#IE9").show();
        }else{
          $("#Known_BrowserInstructions").hide();
          $("#Other_BrowserInstructions").show();
          $("#Other_Browser").show();
        }
      }
    }
    
    if($.contains($('body'), $('#Hpdia_OptInDialog')) === false) {
           $('body').prepend($('#Hpdia_OptInDialog'));
           $('body').prepend($('#Hpdia_InstallDialog'));
           
        }

} // end of function displaySoftwareDownloadOverlayText