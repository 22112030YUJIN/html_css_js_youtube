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
        <button class="category-pill ${cat === category ? 'active' : ''}" data-category="${cat}">
            ${cat}
        </button>
    `).join('');

    return `
        <div class="video-grid-container">
            <div id="category-pills" class="category-pills-list">
                ${categoryPillsHtml}
            </div>
            <div class="video-grid-main">
                ${videoListHtml}
            </div>
        </div>
    `;
}