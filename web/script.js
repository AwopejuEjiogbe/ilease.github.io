
window.addEventListener('load', function() {
    const audios = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3'];
    const audio = new Audio(audios[Math.floor(Math.random() * audios.length)]);
    audio.play();
});
