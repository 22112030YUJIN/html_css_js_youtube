
export function LibraryPage() {
    return `
        <div class="p-4 sm:p-6 lg:p-8">
            <h2 class="text-2xl sm:text-3xl font-bold mb-6">내 페이지</h2>

            <div class="bg-yt-dark rounded-lg p-6 mb-8 flex items-center space-x-6">
                
              
                <div>
                    <h3 class="text-white text-2xl font-semibold">사용자 이름</h3>
                    <p class="text-yt-light-gray text-base">@내계정 • user@example.com</p>
                    <button class="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm">내 채널 관리</button>
                </div>
            </div>

            <div class="bg-yt-dark rounded-lg p-6 mb-8">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold">시청 기록</h3>
                    <button class="text-blue-400 hover:underline text-sm">모두 보기</button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div class="bg-yt-dark-alt rounded-lg overflow-hidden cursor-pointer">
                        <img src="https://picsum.photos/id/237/280/160" alt="영상 제목" class="w-full h-36 object-cover">
                        <div class="p-3">
                            <h4 class="text-white text-base font-semibold truncate">최근 본 영상 제목 1</h4>
                            <p class="text-yt-light-gray text-sm">채널명</p>
                            <p class="text-yt-light-gray text-xs">10만 조회수 • 2일 전</p>
                        </div>
                    </div>
                     <div class="bg-yt-dark-alt rounded-lg overflow-hidden cursor-pointer">
                        <img src="https://picsum.photos/id/1080/280/160" alt="영상 제목" class="w-full h-36 object-cover">
                        <div class="p-3">
                            <h4 class="text-white text-base font-semibold truncate">최근 본 영상 제목 2</h4>
                            <p class="text-yt-light-gray text-sm">채널명</p>
                            <p class="text-yt-light-gray text-xs">5만 조회수 • 1주 전</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-yt-dark rounded-lg p-6 mb-8">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold">내 동영상</h3>
                    <button class="text-blue-400 hover:underline text-sm">관리</button>
                </div>
                <p class="text-yt-light-gray">아직 업로드한 동영상이 없습니다.</p>
                </div>

            <div class="bg-yt-dark rounded-lg p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold">나중에 볼 동영상</h3>
                    <button class="text-blue-400 hover:underline text-sm">모두 보기</button>
                </div>
                 <p class="text-yt-light-gray">나중에 볼 동영상이 없습니다.</p>
                </div>
        </div>
    `;
}