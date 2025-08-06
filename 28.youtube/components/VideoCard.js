
export function VideoCard(video) {
    return `
        <div class="video-card cursor-pointer" data-video-id="${video.id}">
            <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-auto rounded-xl">
            <div class="flex mt-3 space-x-3">
               
                <div class="flex-1">
                    <h3 class="text-white font-semibold text-sm line-clamp-2">${video.title}</h3>
                    <p class="text-yt-light-gray text-xs mt-1">${video.channel.name}</p>
                    <p class="text-yt-light-gray text-xs">${video.views} 조회수 • ${video.uploadDate}</p>
                </div>
            </div>
        </div>
    `;
}