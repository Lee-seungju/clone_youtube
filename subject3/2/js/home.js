function showTitle(title) {
	alert("제목은 " + title + " 입니다.");
}

function showPopup(id) {
	var title = encodeURI(encodeURIComponent(document.getElementById(id).value));
	window.open("title.html?title=" + title, "popup", "width=400,height=300,left=100,top=50");
}