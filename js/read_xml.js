/*jslint browser : true, continue : true,
devel : true, indent : 2, maxerr : 50,
newcap : true, nomen : true, plusplus : true,
regexp : true, sloppy : true, vars : false,
white : true
*/
function getDocument() {
	var XMLHttpRequestObject = false;

	if ( window.XMLHttpRequest ) {
		//IE7+, Firefox, Chrome, Opera, Safari
		XMLHttpRequestObject = new XMLHttpRequest();
		XMLHttpRequestObject.overrideMimeType("text/xml");
	} else {
		//IE 6 below
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if ( XMLHttpRequestObject ) {
		XMLHttpRequestObject.open( "GET", "e:\party.xml", true );
		XMLHttpRequestObject.onreadystatechange = function() {
			if ( XMLHttpRequestObject.readyState == 4 &&
					XMLHttpRequestObject.status == 200 ) {
				var 
					xmlDocument = XMLHttpRequestObject.responseXML,
					documentElement = xmlDocument.documentElement;
				if ( documentElement ) {
					document.getElementById("targetDiv").innerHTML =
					"Document &lt;" +
					documentElement.nodeName + ">";
				}
			}		
		};
	}
}
