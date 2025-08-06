/*import { channels, videos } from '../data/videos.js';
import { VideoCard } from './VideoCard.js';

export function SubscriptionsPage() {
    let contentHtml = '';
    const subscribedChannelsHtml = channels.map(channel => {
        const representativeVideo = videos.find(video => video.channel.id === channel.id);
        const videoHtml = representativeVideo ? `
            <div class="subscription-video-card">
                <img src="${representativeVideo.thumbnail}" alt="${representativeVideo.title}" class="subscription-video-thumbnail">
                <div class="subscription-video-info">
                    <h4 class="subscription-video-title">${representativeVideo.title}</h4>
                    <p class="subscription-video-meta">${representativeVideo.views} 조회수 • ${representativeVideo.uploadDate}</p>
                </div>
            </div>
        ` : `<p class="subscription-no-video">영상이 없습니다.</p>`;

        return `
            <div class="subscription-channel-card">
                <img src="${channel.thumbnail}" alt="${channel.name}" class="subscription-channel-thumbnail">
                <h3 class="subscription-channel-name">${channel.name}</h3>
                <p class="subscription-channel-subscribers">구독자 ${channel.subscribers}</p>
                <div class="subscription-video-container">
                    ${videoHtml}
                </div>
            </div>
        `;
    }).join('');

    contentHtml = `
        <div class="subscriptions-page">
            <h2 class="subscriptions-page-title">구독 중인 채널</h2>
            <div class="subscription-grid">
                ${subscribedChannelsHtml}
            </div>
        </div>
    `;

    return contentHtml;
}*/
import { channels, videos } from '../data/videos.js';
// import { VideoCard } from './VideoCard.js'; // SubscriptionsPage 에서는 필요 없으니 제거

export function SubscriptionsPage() {
    let contentHtml = '';
    const subscribedChannelsHtml = channels.map(channel => {
        // 기존 코드 유지 (대표 영상만 보여줌)
        const representativeVideo = videos.find(video => video.channelId === channel.id);
        const videoHtml = representativeVideo ? `
            <div class="subscription-video-card">
                <img src="${representativeVideo.thumbnail}" alt="${representativeVideo.title}" class="subscription-video-thumbnail">
                <div class="subscription-video-info">
                    <h4 class="subscription-video-title">${representativeVideo.title}</h4>
                    <p class="subscription-video-meta">${representativeVideo.views} 조회수 • ${representativeVideo.uploadDate}</p>
                </div>
            </div>
        ` : `<p class="subscription-no-video">영상이 없습니다.</p>`;

        // 수정된 부분: 채널 카드를 클릭하면 'channel' 페이지로 이동하도록 data-page와 data-channel-id 추가
        return `
            <a href="#" class="subscription-channel-card" data-page="channel" data-channel-id="${channel.id}">
                <img src="${channel.thumbnail}" alt="${channel.name}" class="subscription-channel-thumbnail">
                <h3 class="subscription-channel-name">${channel.name}</h3>
                <p class="subscription-channel-subscribers">구독자 ${channel.subscribers || '0명'}</p>
                <div class="subscription-video-container">
                    ${videoHtml}
                </div>
            </a>
        `;
    }).join('');

    contentHtml = `
        <div class="subscriptions-page">
            <h2 class="subscriptions-page-title">구독 중인 채널</h2>
            <div class="subscription-grid">
                ${subscribedChannelsHtml}
            </div>
        </div>
    `;

    return contentHtml;
}