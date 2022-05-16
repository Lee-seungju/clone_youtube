function showTitle(title) {
	alert("제목은 " + title + " 입니다.");
}

function moveDetail(id) {
	var title = encodeURI(encodeURIComponent(document.getElementById(id+"title").value));
	var content = encodeURI(encodeURIComponent(document.getElementById(id+"content").value));
	location.href="detail.html?title=" + title + "&content=" + content;
}