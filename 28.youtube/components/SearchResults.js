
export function SearchResults(query, results) {
    let resultItems = '';
    if (results.length > 0) {
        resultItems = results.map(video => `
            <div class="flex space-x-4 bg-yt-dark rounded-lg p-4 cursor-pointer">
                <img src="${video.thumbnail}" alt="${video.title}" class="w-48 h-28 object-cover rounded-md">
                <div class="flex-1">
                    <h3 class="text-white text-lg font-semibold">${video.title}</h3>
                    <p class="text-yt-light-gray text-sm">${video.channel}</p>
                    <p class="text-yt-light-gray text-xs">${video.views} 조회수 • ${video.uploadDate}</p>
                    <p class="text-yt-light-gray text-sm mt-1">${video.description.substring(0, 100)}...</p>
                </div>
            </div>
        `).join('');
    } else {
        resultItems = `<p class="text-yt-light-gray text-center py-10">관련 영상이 없습니다.</p>`;
    }

    return `
        <div class="p-4">
            <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">검색 결과</h2>
                <p class="text-yt-light-gray">"${query}"에 대한 검색 결과:</p>
            </div>
            <div class="space-y-4">
                ${resultItems}
            </div>
        </div>
    `;
}