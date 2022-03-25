// ATRIBUTOS PERSONALIZADOS
// let image = document.getElementById('like');
// image.addEventListener('click', function(){
// 	// Obtendo atributo da imagem
// 	// let lastImage = image.getAttribute('src');
// 	// image.setAttribute('src', 'Images/deslike.jpg')
// 	// console.log(lastImage);
// 	// Criando atributos
// 	// image.setAttribute('cor', 'Vermelho');
// })
// Fazendo mais doideras
// let lista = document.getElementById('lista');
// let num = parseInt(lista.getAttribute('num'));
// let conteudo = '';
// for (let i = 0; i < num; i++){
// 	conteudo += '<li>' + i + '</li>';
// }
// lista.innerHTML = conteudo;


// ATRIBUTOS PERSONALIZADOS PARTE 2
// Pegando atributos com o dataset
// let lista = document.getElementById('lista');
// let num = parseInt(lista.dataset.n);
// console.log(lista.dataset.n)
// let conteudo = '';
// for (let i = 0; i < num; i++){
// 	conteudo += '<li>' + i + '</li>';
// }
// lista.innerHTML = conteudo;


// VIDEO


// VIDEO CONTROLE PARTE1 E PARTE2
let video = document.getElementById('video1');
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
}
function stop(){
	video.pause();
	video.currentTime = 0;
	video.playbackRate = 1;
}