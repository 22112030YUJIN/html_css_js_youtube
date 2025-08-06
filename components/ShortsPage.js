export function ShortsPage() {
    return `
        <div class="shorts-container">
            <h2 class="shorts-title">Shorts</h2>
            <div class="shorts-grid">
                <div class="shorts-item">
                    <div class="shorts-placeholder bg-shorts-gradient-1">
                        <svg class="shorts-play-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="shorts-info">
                        <p class="shorts-video-title">재미있는 Shorts 영상 1</p>
                        <p class="shorts-views">조회수 1.2M회</p>
                    </div>
                </div>
                <div class="shorts-item">
                    <div class="shorts-placeholder bg-shorts-gradient-2">
                        <svg class="shorts-play-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="shorts-info">
                        <p class="shorts-video-title">데일리 Shorts 영상 2</p>
                        <p class="shorts-views">조회수 80만회</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}