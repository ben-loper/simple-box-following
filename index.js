document.addEventListener('DOMContentLoaded', () => {
	setBoxFollowCursor();
});

function setBoxFollowCursor() {
	let myBox = document.getElementById('myBox');
	document.addEventListener('mousemove', (event) => {
		myBox.style.left = event.clientX - myBox.clientWidth / 2 + 'px';
		myBox.style.top = event.clientY - myBox.clientHeight / 2 + 'px';
	});
}
