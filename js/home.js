function showTitle(title) {
	alert("제목은 " + title + " 입니다.");
}

function moveDetail(id) {
	var title = encodeURI(encodeURIComponent(document.getElementById(id+"title").value));
	var content = encodeURI(encodeURIComponent(document.getElementById(id+"content").value));
	location.href="detail.html?title=" + title + "&content=" + content;
}

function showPopup(id) {
	var title = encodeURI(encodeURIComponent(document.getElementById(id).value));

	console.log("aaa");
	window.open("title.html?title=" + title, "popup", "width=400,height=300,left=100,top=50");
}