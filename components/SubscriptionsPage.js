// components/SubscriptionsPage.js
import { channels, videos } from '../data/videos.js';
import { VideoCard } from './VideoCard.js'; // VideoCard 컴포넌트 import

/**
 * 구독 페이지를 렌더링합니다.
 */
export function SubscriptionsPage() {
    let contentHtml = '';

    // 모든 구독 채널 목록과 대표 영상 보여주기
    const subscribedChannelsHtml = channels.map(channel => {
        // 각 채널의 대표 영상 (여기서는 첫 번째 영상)을 찾습니다.
        const representativeVideo = videos.find(video => video.channel.id === channel.id);
        const videoHtml = representativeVideo ? `
            <div class="bg-yt-dark rounded-lg overflow-hidden">
                <img src="${representativeVideo.thumbnail}" alt="${representativeVideo.title}" class="w-full h-36 object-cover">
                <div class="p-2">
                    <h4 class="text-white text-sm font-semibold truncate">${representativeVideo.title}</h4>
                    <p class="text-yt-light-gray text-xs">${representativeVideo.views} 조회수 • ${representativeVideo.uploadDate}</p>
                </div>
            </div>
        ` : `<p class="text-yt-light-gray text-xs text-center py-4">영상이 없습니다.</p>`;

        return `
            <div class="bg-yt-dark rounded-lg p-4 flex flex-col items-center text-center">
                <img src="${channel.thumbnail}" alt="${channel.name}" class="w-20 h-20 rounded-full mb-3">
                <h3 class="text-white text-lg font-semibold mb-1">${channel.name}</h3>
                <p class="text-yt-light-gray text-sm mb-4">구독자 ${channel.subscribers}</p>
                <div class="w-full">
                    ${videoHtml}
                </div>
            </div>
        `;
    }).join('');

    contentHtml = `
        <div class="p-4">
            <h2 class="text-2xl font-bold mb-6">구독 중인 채널</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                ${subscribedChannelsHtml}
            </div>
        </div>
    `;

    return contentHtml;
}