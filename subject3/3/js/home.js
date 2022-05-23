function showTitle(title) {
	alert("제목은 " + title + " 입니다.");
}

function layerPopup(id) {
	var title = document.getElementById(id).value;
	document.getElementById('title').value = '제목은 ' + title + ' 입니다.';
	document.getElementById('pop_info_open').style.display = 'block';
}

function closePopup() {
	document.getElementById('pop_info_open').style.display = 'none';
}