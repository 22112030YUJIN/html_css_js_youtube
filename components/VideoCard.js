export function VideoCard(video) {
    return `
        <div class="video-card" data-video-id="${video.id}">
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="video-info-container">
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-channel-name">${video.channel.name}</p>
                    <p class="video-meta">${video.views} 조회수 • ${video.uploadDate}</p>
                </div>
            </div>
        </div>
    `;
}