import { videos, channels } from '../data/videos.js';

export function VideoDetail(videoId) {
    const video = videos.find(v => v.id === videoId);

    if (!video) {
        return `<p class="video-not-found">영상을 찾을 수 없습니다.</p>`;
    }

    const channel = channels.find(c => c.id === video.channel.id);
    const channelName = channel ? channel.name : '알 수 없는 채널';
    const channelThumbnail = channel ? channel.thumbnail : '';

    return `
        <div class="video-detail-page">
            <div class="video-player-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/$${video.id}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="video-player"
                ></iframe>
            </div>

            <h1 class="video-detail-title">${video.title}</h1>
            <div class="video-meta-container">
                <span class="video-meta-item">조회수 ${video.views}회</span>
                <span class="video-meta-divider">•</span>
                <span class="video-meta-item">${video.uploadDate}</span>
            </div>

            <div class="channel-info-container">
                ${channelThumbnail ? `<img src="${channelThumbnail}" alt="${channelName}" class="channel-thumbnail">` : ''}
                <div class="channel-info">
                    <h2 class="channel-name">${channelName}</h2>
                    <p class="channel-subscribers">구독자 ${channel.subscribers}명</p>
                </div>
                <button class="subscribe-btn">구독</button>
            </div>

            <div class="video-description">
                <p>${video.description}</p>
            </div>
        </div>
    `;
}