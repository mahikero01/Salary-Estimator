var 
	dateStatus,
	XMLHttpRequestObject = false;

	if ( window.XMLHttpRequest ) {
		//IE7+, Firefox, Chrome, Opera, Safari
		XMLHttpRequestObject = new XMLHttpRequest();
	} else {
		//IE 6 below
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	function getData ( dataSource, divID ) {
		if ( XMLHttpRequestObject ) {
			XMLHttpRequestObject.open( "GET", dataSource );
			var obj = document.getElementById( divID );
			
			XMLHttpRequestObject.onreadystatechange = function() {
				if ( XMLHttpRequestObject.readyState == 4 &&
						XMLHttpRequestObject.status == 200 ) {
					var xmlDocument = XMLHttpRequestObject.responseXML;
					colors = xmlDocument.getElementsByTagName("color");
					obj.innerHTML = "Here:<ul>";
					for () {
					
					}
				}
			};
			
			
		}
	}
