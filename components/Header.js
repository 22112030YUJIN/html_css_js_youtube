
export function Header() {
    return `
        <header class="fixed top-0 left-0 right-0 bg-yt-black text-white p-3 flex items-center justify-between z-50 border-b border-yt-gray">
            <div class="flex items-center space-x-4">
                <button id="hamburger" class="p-2 hover:bg-yt-gray rounded-full">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </button>
                <a href="#" class="flex items-center space-x-1 cursor-pointer sidebar-item" data-page="home">
                    <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.72 8.08c-.28-.7-.95-1.21-1.74-1.29C18.66 6.51 12 6.5 12 6.5s-6.66 0-7.98.28c-.79.08-1.46.59-1.74 1.29C2 9.07 2 12 2 12s0 2.93.28 3.92c.28.7.95 1.21 1.74 1.29C5.34 17.49 12 17.5 12 17.5s6.66 0 7.98-.28c.79-.08 1.46-.59 1.74-1.29.28-.99.28-3.92.28-3.92s0-2.93-.28-3.92zM9.75 14.5l5.02-2.5-5.02-2.5v5z"/>
                    </svg>
                    <span class="text-xl font-bold">YouTube</span>
                </a>
            </div>

            <div class="flex-1 max-w-xl mx-4">
                <div class="flex rounded-lg overflow-hidden bg-yt-dark-gray border border-yt-gray">
                    <input type="text" id="searchInput" placeholder="검색" class="flex-1 p-2 bg-transparent text-white focus:outline-none">
                    <button id="searchBtn" class="bg-yt-light-gray p-2 px-4 hover:bg-gray-600 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 16 5.91 14 9.5 14c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="flex items-center space-x-4 mr-4">
                <button class="p-2 hover:bg-yt-gray rounded-full hidden md:block">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                    </svg>
                </button>

                <div class="relative group">
                    <button class="p-2 hover:bg-yt-gray rounded-full">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z"/>
                        </svg>
                    </button>
                    <div class="absolute right-0 top-[calc(100%+8px)] w-72 bg-yt-dark border border-yt-gray rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 pointer-events-auto">
                        <div class="p-3 border-b border-yt-gray text-white font-semibold">알림</div>
                        <ul class="text-sm text-yt-light-gray">
                            <li class="p-3 hover:bg-yt-gray cursor-pointer">새 영상 업로드: 요리하는 남자 - 신메뉴 공개!</li>
                            <li class="p-3 hover:bg-yt-gray cursor-pointer">댓글 알림: '제주도 여행' 영상에 새로운 댓글이 달렸습니다.</li>
                            <li class="p-3 hover:bg-yt-gray cursor-pointer">실시간 스트림 시작: IT 테크 리뷰 - 신제품 라이브</li>
                            <li class="p-3 hover:bg-yt-gray cursor-pointer text-center text-blue-400">모든 알림 보기</li>
                        </ul>
                    </div>
                </div>

                <div class="relative group">
                    <button class="w-8 h-8 rounded-full bg-yt-gray-light flex items-center justify-center text-white">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                    </button>
                    <div class="absolute right-0 top-[calc(100%+8px)] w-60 bg-yt-dark border border-yt-gray rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50 pointer-events-auto">
                        <div class="p-3 border-b border-yt-gray flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-full bg-yt-gray-light flex items-center justify-center text-white">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                            </div>
                            <div>
                                <p class="text-white font-semibold">사용자 이름</p>
                                <p class="text-yt-light-gray text-sm">user@example.com</p>
                            </div>
                        </div>
                        <ul class="text-sm text-yt-light-gray">
                            <li class="p-3 hover:bg-yt-gray cursor-pointer flex items-center space-x-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                                <span>내 채널</span>
                            </li>
                            <li class="p-3 hover:bg-yt-gray cursor-pointer flex items-center space-x-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2zm0 4h2v6h-2z"/></svg>
                                <span>YouTube Studio</span>
                            </li>
                            <li class="p-3 hover:bg-yt-gray cursor-pointer flex items-center space-x-2">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                                <span>로그아웃</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    `;
}