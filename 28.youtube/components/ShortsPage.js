// components/ShortsPage.js
export function ShortsPage() {
    // Shorts 영상 데이터가 있다면 여기서 렌더링 로직 추가
    return `
        <div class="p-4">
            <h2 class="text-2xl font-bold mb-6">Shorts</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                <div class="bg-yt-dark rounded-lg overflow-hidden aspect-[9/16] relative group cursor-pointer">
                    <div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="absolute bottom-2 left-2 right-2">
                        <p class="text-white text-sm font-medium">재미있는 Shorts 영상 1</p>
                        <p class="text-yt-light-gray text-xs">조회수 1.2M회</p>
                    </div>
                </div>
                <div class="bg-yt-dark rounded-lg overflow-hidden aspect-[9/16] relative group cursor-pointer">
                    <div class="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                        <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="absolute bottom-2 left-2 right-2">
                        <p class="text-white text-sm font-medium">데일리 Shorts 영상 2</p>
                        <p class="text-yt-light-gray text-xs">조회수 80만회</p>
                    </div>
                </div>
                </div>
        </div>
    `;
}