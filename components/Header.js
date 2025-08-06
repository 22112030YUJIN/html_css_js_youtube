export function Header() {
    return `
        <header class="header">
            <div class="header-left">
                <button id="hamburger" class="header-btn">
                    <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </button>
                <a href="#" class="logo-link" data-page="home" id="logo">
                    <svg class="logo-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.72 8.08c-.28-.7-.95-1.21-1.74-1.29C18.66 6.51 12 6.5 12 6.5s-6.66 0-7.98.28c-.79.08-1.46.59-1.74 1.29C2 9.07 2 12 2 12s0 2.93.28 3.92c.28.7.95 1.21 1.74 1.29C5.34 17.49 12 17.5 12 17.5s6.66 0 7.98-.28c.79-.08 1.46-.59 1.74-1.29.28-.99.28-3.92.28-3.92s0-2.93-.28-3.92zM9.75 14.5l5.02-2.5-5.02-2.5v5z"/>
                    </svg>
                    <span class="logo-text">YouTube</span>
                </a>
            </div>

            <div class="header-center">
                <div class="search-box">
                    <input type="text" id="searchInput" placeholder="검색" class="search-input">
                    <button id="searchBtn" class="search-btn">
                        <img src="./assets/icons/search.svg" alt="검색">
                    </button>
                </div>
            </div>

            <div class="header-right">
                <button class="header-btn md-hidden">
                    <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                    </svg>
                </button>

                <div class="dropdown notification-dropdown">
                    <button class="header-btn">
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z"/>
                        </svg>
                    </button>
                    <div class="dropdown-menu notification-menu">
                        <div class="dropdown-header">알림</div>
                        <ul class="dropdown-list">
                            <li class="dropdown-item">새 영상 업로드: 요리하는 남자 - 신메뉴 공개!</li>
                            <li class="dropdown-item">댓글 알림: '제주도 여행' 영상에 새로운 댓글이 달렸습니다.</li>
                            <li class="dropdown-item">실시간 스트림 시작: IT 테크 리뷰 - 신제품 라이브</li>
                            <li class="dropdown-item dropdown-link">모든 알림 보기</li>
                        </ul>
                    </div>
                </div>

                <div class="dropdown profile-dropdown">
                    <button class="profile-btn">
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                    </button>
                    <div class="dropdown-menu profile-menu">
                        <div class="dropdown-user-info">
                            <div class="profile-avatar">
                                <svg class="icon-large" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                            </div>
                            <div class="user-details">
                                <p class="user-name">사용자 이름</p>
                                <p class="user-email">user@example.com</p>
                            </div>
                        </div>
                        <ul class="dropdown-list">
                            <li class="dropdown-item">
                                <svg class="icon-small" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                                <span>내 채널</span>
                            </li>
                            <li class="dropdown-item">
                                <svg class="icon-small" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2zm0 4h2v6h-2z"/></svg>
                                <span>YouTube Studio</span>
                            </li>
                            <li class="dropdown-item">
                                <svg class="icon-small" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                                <span>로그아웃</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    `;
}