
import { videos } from '../data/videos.js';
import { VideoCard } from './VideoCard.js';

export function VideoGrid(category = '전체') {
    let filteredVideos = videos;
    if (category !== '전체') {
        filteredVideos = videos.filter(video => video.category.includes(category));
    }

    const videoListHtml = filteredVideos.map(video => VideoCard(video)).join('');

    const categories = ['전체', '음악', '게임', '뉴스', '스포츠', '요리', '코딩', '여행'];
    const categoryPillsHtml = categories.map(cat => `
        <button class="category-pill px-4 py-2 rounded-full text-sm transition-colors
                       ${cat === category ? 'bg-white text-black' : 'bg-yt-gray text-white hover:bg-yt-gray-hover'}"
                data-category="${cat}">
            ${cat}
        </button>
    `).join('');

    return `
        <div class="p-4 sm:p-6 lg:p-8">
            <div id="category-pills" class="flex items-center space-x-2 pb-4 overflow-x-auto whitespace-nowrap">
                ${categoryPillsHtml}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                ${videoListHtml}
            </div>
        </div>
    `;
}