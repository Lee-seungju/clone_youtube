function getTitle(param) {
	var url = window.location.search.substring(1);
	var urlVariables = url.split('&');
	for (var i = 0; i< urlVariables.length; i++) {
		var paramName = urlVariables[i].split('=');
		if (paramName[0] == param) {
			return paramName[1];
		}
	}
}

window.onload=function() {
	document.getElementById("title").value = "제목 : " + decodeURI(decodeURIComponent(getTitle("title")))
									 + "\n" + "내용 : " + decodeURI(decodeURIComponent(getTitle("content")));
}