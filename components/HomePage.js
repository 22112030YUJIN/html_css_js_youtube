
import { videos } from '../data/videos.js';
import { VideoCard } from './VideoCard.js';

export function HomePage() {
    const videoListHtml = videos.map(video => VideoCard(video)).join('');

    return `
        <div class="p-4 sm:p-6 lg:p-8">
            <div class="flex items-center space-x-2 pb-4 overflow-x-auto whitespace-nowrap">
                <button class="px-4 py-2 bg-yt-light-gray rounded-full text-sm hover:bg-yt-gray-hover">전체</button>
                <button class="px-4 py-2 bg-yt-gray rounded-full text-sm hover:bg-yt-gray-hover">음악</button>
                <button class="px-4 py-2 bg-yt-gray rounded-full text-sm hover:bg-yt-gray-hover">게임</button>
                <button class="px-4 py-2 bg-yt-gray rounded-full text-sm hover:bg-yt-gray-hover">뉴스</button>
                <button class="px-4 py-2 bg-yt-gray rounded-full text-sm hover:bg-yt-gray-hover">스포츠</button>
                <button class="px-4 py-2 bg-yt-gray rounded-full text-sm hover:bg-yt-gray-hover">요리</button>
                <button class="px-4 py-2 bg-yt-gray rounded-full text-sm hover:bg-yt-gray-hover">코딩</button>
                <button class="px-4 py-2 bg-yt-gray rounded-full text-sm hover:bg-yt-gray-hover">여행</button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                ${videoListHtml}
            </div>
        </div>
    `;
}