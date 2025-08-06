export function LibraryPage() {
    return `
        <div class="library-container">
            <h2 class="library-title">내 페이지</h2>

            <div class="profile-card">
                <div class="profile-avatar-placeholder">
                    </div>
                <div class="profile-info">
                    <h3 class="profile-name">사용자 이름</h3>
                    <p class="profile-email">@내계정 • user@example.com</p>
                    <button class="channel-manage-btn">내 채널 관리</button>
                </div>
            </div>

            <div class="history-section">
                <div class="section-header">
                    <h3 class="section-title">시청 기록</h3>
                    <button class="section-link">모두 보기</button>
                </div>
                <div class="video-grid">
                    <div class="video-item">
                        <img src="https://picsum.photos/id/237/280/160" alt="영상 제목" class="video-thumbnail">
                        <div class="video-details">
                            <h4 class="video-title">최근 본 영상 제목 1</h4>
                            <p class="video-channel">채널명</p>
                            <p class="video-metadata">10만 조회수 • 2일 전</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <img src="https://picsum.photos/id/1080/280/160" alt="영상 제목" class="video-thumbnail">
                        <div class="video-details">
                            <h4 class="video-title">최근 본 영상 제목 2</h4>
                            <p class="video-channel">채널명</p>
                            <p class="video-metadata">5만 조회수 • 1주 전</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-videos-section">
                <div class="section-header">
                    <h3 class="section-title">내 동영상</h3>
                    <button class="section-link">관리</button>
                </div>
                <p class="section-empty-text">아직 업로드한 동영상이 없습니다.</p>
            </div>

            <div class="watch-later-section">
                <div class="section-header">
                    <h3 class="section-title">나중에 볼 동영상</h3>
                    <button class="section-link">모두 보기</button>
                </div>
                <p class="section-empty-text">나중에 볼 동영상이 없습니다.</p>
            </div>
        </div>
    `;
}