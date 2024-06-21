// 图片链接复制
document.querySelectorAll('.gallery .card').forEach(card => {
    card.addEventListener('click', () => {
        const imageUrl = card.querySelector('img').src;
        navigator.clipboard.writeText(imageUrl).then(() => {
            alert('图片链接已复制: ' + imageUrl);
        });
    });
});

// 音乐和音效播放及链接复制
document.querySelectorAll('.music-gallery .card, .sound-gallery .card').forEach(card => {
    const audio = card.querySelector('audio');

    card.addEventListener('mouseenter', () => {
        audio.play();
    });

    card.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
    });

    card.addEventListener('click', () => {
        const audioUrl = audio.src;
        navigator.clipboard.writeText(audioUrl).then(() => {
            alert('音频链接已复制: ' + audioUrl);
        });
    });
});
