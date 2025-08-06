import { videos } from '../data/videos.js';
import { VideoCard } from './VideoCard.js';

export function HomePage() {
    const videoListHtml = videos.map(video => VideoCard(video)).join('');

    return `
        <div class="home-container">
            <div class="category-list">
                <button class="category-btn active">전체</button>
                <button class="category-btn">음악</button>
                <button class="category-btn">게임</button>
                <button class="category-btn">뉴스</button>
                <button class="category-btn">스포츠</button>
                <button class="category-btn">요리</button>
                <button class="category-btn">코딩</button>
                <button class="category-btn">여행</button>
            </div>
            <div class="video-grid">
                ${videoListHtml}
            </div>
        </div>
    `;
}