import { videos, channels } from '../data/videos.js';
import { VideoCard } from './VideoCard.js'; // 영상 카드를 재사용

export function ChannelVideosPage(channelId) {
    // 해당 채널의 정보 찾기
    const currentChannel = channels.find(channel => channel.id === channelId);

    if (!currentChannel) {
        return `
            <div class="channel-page-container">
                <h2>채널을 찾을 수 없습니다.</h2>
            </div>
        `;
    }

    // 해당 채널의 모든 영상 필터링
    const channelVideos = videos.filter(video => video.channelId === channelId);

    // 영상 목록 HTML 생성
    const videosHtml = channelVideos.map(video => VideoCard(video)).join('');

    return `
        <div class="channel-page-container">
            <div class="channel-header">
                <img src="${currentChannel.thumbnail}" alt="${currentChannel.name}" class="channel-header-thumbnail">
                <div class="channel-header-info">
                    <h2 class="channel-header-name">${currentChannel.name}</h2>
                    <p class="channel-header-subscribers">구독자 정보 (없어서 임의로 추가)</p>
                </div>
                <button class="subscribe-btn">구독</button>
            </div>
            <div class="channel-videos-grid">
                ${videosHtml}
            </div>
        </div>
    `;
}