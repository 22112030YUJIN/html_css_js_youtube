export function SearchResults(query, results) {
    let resultItems = '';
    if (results.length > 0) {
        resultItems = results.map(video => `
            <div class="search-result-item">
                <img src="${video.thumbnail}" alt="${video.title}" class="search-thumbnail">
                <div class="search-details">
                    <h3 class="search-title">${video.title}</h3>
                    <p class="search-channel">${video.channel}</p>
                    <p class="search-metadata">${video.views} 조회수 • ${video.uploadDate}</p>
                    <p class="search-description">${video.description.substring(0, 100)}...</p>
                </div>
            </div>
        `).join('');
    } else {
        resultItems = `<p class="search-empty-text">관련 영상이 없습니다.</p>`;
    }

    return `
        <div class="search-container">
            <div class="search-header">
                <h2 class="search-title-main">검색 결과</h2>
                <p class="search-query-text">"${query}"에 대한 검색 결과:</p>
            </div>
            <div class="search-results-list">
                ${resultItems}
            </div>
        </div>
    `;
}