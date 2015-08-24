var callerID = null;
var currentModal = null;

function ShowDropDowns() {
    var allDropDowns = document.getElementsByTagName('select');
    for (var cnt=0; cnt < allDropDowns.length; cnt++) {
        allDropDowns[cnt].disabled = false;
	}
}

function HideDropDowns() {
	// hide dropdowns
    var allDropDowns = document.getElementsByTagName('select');
    for (var cnt=0; cnt < allDropDowns.length; cnt++) {
        allDropDowns[cnt].disabled = true;
	}
}

function HideModal(contentId) {
	var opaqueDiv = document.getElementById('opaqueLayer');
	var modalDiv = document.getElementById(contentId);
	
	opaqueDiv.style.visibility = 'hidden';
	opaqueDiv.innerHTML = '';
	modalDiv.style.display = 'none';
	
	if(currentModal) currentModal = null;
	
    ShowDropDowns();
	document.getElementById(callerID).focus();
}

function ShowModal(overlayStyle,contentId,callerId,closeID) {
	callerID = callerId;
	HideDropDowns();
	var opaqueDiv = document.getElementById('opaqueLayer');
	var modalDiv = document.getElementById(contentId);
	
	if(currentModal) currentModal.style.display = 'none'; 
	currentModal = modalDiv;
	
	var overlayColor = '';
	var overlayBorder = '';
	if(overlayStyle == 'black'){ overlayColor = "#000000"; overlayBorder = "#000000"; }
	else if(overlayStyle == 'white'){ overlayColor = "#FFFFFF"; overlayBorder = "#999999"; }
	
	opaqueDiv.style.backgroundColor = overlayColor;
	modalDiv.style.border = '3px solid '+overlayBorder;
	
	opaqueDiv.style.visibility = 'visible';
	modalDiv.style.display = 'inline';
	opaqueDiv.style.height = document.getElementById("copyright").offsetTop+20+'px';
	
	document.getElementById(closeID).focus();
	
}
//20080828
