import { channels } from '../data/videos.js';

export function Sidebar() {
    const subscriptionChannelsHtml = channels.map(channel => `
        <a href="#" class="sidebar-subscription-item" data-page="subscriptions" data-channel-id="${channel.id}">
            <img src="${channel.thumbnail}" alt="${channel.name}" class="sidebar-channel-thumbnail">
            <span class="sidebar-channel-name">${channel.name}</span>
        </a>
    `).join('');

    return `
        <aside id="sidebar" class="sidebar">
            <div class="sidebar-nav-container">
                <nav class="sidebar-nav">
                    <a href="#" class="sidebar-item active" data-page="home">
                        <svg class="sidebar-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
                        <span>홈</span>
                    </a>
                    <a href="#" class="sidebar-item" data-page="shorts">
                        <svg class="sidebar-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 8v8l6-4-6-4zm11-5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
                        </svg>
                        <span>Shorts</span>
                    </a>
                    <a href="#" class="sidebar-item" data-page="subscriptions">
                        <svg class="sidebar-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"/>
                        </svg>
                        <span>구독</span>
                    </a>
                    <a href="#" class="sidebar-item" data-page="library">
                        <svg class="sidebar-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                        </svg>
                        <span>내 페이지</span>
                    </a>
                </nav>
            </div>
        </aside>
    `;
}