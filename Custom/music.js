const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
    audio: [
	{
        name: '',
        artist: '',
        url: '',
        cover: '',
    }, 
	]
});
