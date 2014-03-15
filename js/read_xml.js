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
	
	function getData (  ) {}
