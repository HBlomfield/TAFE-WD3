function moveMouse (e) {
	var pX = e.pageX || e.clientX;
	var pY = e.pageY || e.clientY;

	document.getElementById("help-video").style.left = (pX-200) + "px";
	document.getElementById("help-video").style.top = (pY+10-window.scrollY) + "px";
}
function helpVideoEnter () {
	document.getElementById("help-video").currentTime = 0;
	document.getElementById("help-video").play();
}
function helpVideoExit () {
	document.getElementById("help-video").pause();
}
function openPolicy () {
	document.body.className = "privacy-open";
	document.getElementById("privacy-window").style.display = "block";
	console.log("AAA");
	return 0;
}

function closePolicy () {
	if (document.body.className == "privacy-open") {
		document.body.className = "";
		document.getElementById("privacy-window").style.display = "none";

	}
	return 0;

}

function checkValue (i) {
	var p = "";
	switch (i.id) {
		case "first-name":
		case "last-name":
			p = /^([A-Z][A-Za-z'\-,]{1,})$|^([A-Z][A-Za-z'\-,]{1,} ){1,}([A-Z][A-Za-z'\-,]{1,})$/;
			break;
		case "email":
			p = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			break;
		case "phone":
			p = /^(\+[0-9]{1,} [0-9]{1,} |\+[0-9]{1,} |0)[0-9]{3} [0-9]{3} [0-9]{3}$/;
			break;
		case "message":
			p = /[^]{20,}/;
	}
	var reg = new RegExp (p, "g");
	if (!(reg.test(i.value) || i.value == "")) {
		document.getElementById(i.id + "-error").innerHTML = i.title;
	} else {
		document.getElementById(i.id + "-error").innerHTML = "";
	}
}
