let video = document.getElementById('video1');
let controls = document.getElementById('controls');
let container = document.getElementById('content');
let box_intro = document.getElementById('box_intro');
function diminuir_vel(){
	video.playbackRate -= 0.1;
}
function aumentar_vel(){
	video.playbackRate += 0.1;
}
function retroceder(){
	video.currentTime -= 10;
}
function avancar(){
	video.currentTime += 10;
}
function play(){
	video.play();
	video.playbackRate = 1.8;
}
function stop(){
	video.pause();
	video.currentTime = 0;
	video.playbackRate = 1.8;
}
function showControls(){
	controls.style.display = 'block';
}
function hiddenControls(){
	controls.style.display = 'none';
}
function showTheVideo(){
	box_intro.style.display = 'none';
	container.style.display = 'flex';
}