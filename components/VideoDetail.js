// components/VideoDetail.js
import { videos, channels } from '../data/videos.js';

/**
 * 비디오 상세 페이지 컴포넌트
 * @param {string} videoId - 렌더링할 비디오의 ID
 * @returns {string} HTML 문자열
 */
export function VideoDetail(videoId) {
    const video = videos.find(v => v.id === videoId);

    if (!video) {
        return `<p class="text-yt-light-gray text-center py-10">영상을 찾을 수 없습니다.</p>`;
    }

    const channel = channels.find(c => c.id === video.channel.id);
    const channelName = channel ? channel.name : '알 수 없는 채널';
    const channelThumbnail = channel ? channel.thumbnail : '';

    return `
        <div class="video-detail-page p-4">
            <div class="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                    src="https://www.youtube.com/embed/${video.id}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="w-full h-full rounded-xl"
                ></iframe>
            </div>

            <h1 class="text-xl md:text-2xl font-bold mb-2">${video.title}</h1>
            <div class="flex items-center space-x-3 text-sm text-yt-light-gray mb-4">
                <span>조회수 ${video.views}회</span>
                <span>•</span>
                <span>${video.uploadDate}</span>
            </div>

            <div class="flex items-center space-x-4 mb-6">
                ${channelThumbnail ? `<img src="${channelThumbnail}" alt="${channelName}" class="w-10 h-10 rounded-full">` : ''}
                <div>
                    <h2 class="font-semibold text-lg">${channelName}</h2>
                    <p class="text-sm text-yt-light-gray">구독자 ${channel.subscribers}명</p>
                </div>
                <button class="bg-white text-black font-semibold py-2 px-4 rounded-full ml-auto hover:bg-gray-300 transition-colors">구독</button>
            </div>

            <div class="bg-yt-gray p-4 rounded-lg text-sm whitespace-pre-wrap">
                <p>${video.description}</p>
            </div>
        </div>
    `;
}