
import { Header } from '../components/Header.js';
import { Sidebar } from '../components/Sidebar.js';
import { VideoGrid } from '../components/VideoGrid.js';
import { SearchResults } from '../components/SearchResults.js';
import { ShortsPage } from '../components/ShortsPage.js';
import { SubscriptionsPage } from '../components/SubscriptionsPage.js';
import { LibraryPage } from '../components/LibraryPage.js';
import { VideoDetail } from '../components/VideoDetail.js';
import { videos } from '../data/videos.js';
import { ChannelVideosPage } from '../components/ChannelVideosPage.js';


const headerContainer = document.getElementById('header-container');
const sidebarContainer = document.getElementById('sidebar-container');
const mainContentContainer = document.getElementById('main-content-container');
const searchResultsContainer = document.getElementById('search-results-container');
const body = document.body;

let isSidebarOpen = true;

 // 카테고리 필터링 버튼에 이벤트 리스너를 연결합니다. (이벤트 위임)
function attachCategoryPillListeners() {

    const categoryPillsContainer = document.getElementById('category-pills');
    if (categoryPillsContainer) {
        categoryPillsContainer.removeEventListener('click', handleCategoryClick);
        categoryPillsContainer.addEventListener('click', handleCategoryClick);
    }
}



/**

 * 카테고리 버튼 클릭 핸들러

 * @param {Event} e

 */

function handleCategoryClick(e) {
    const target = e.target.closest('.category-pill');
    if (target) {
        e.preventDefault();
        const category = target.dataset.category;
        renderPage('home', { category: category });

        document.querySelectorAll('.category-pill').forEach(pill => {
            pill.classList.remove('active', 'bg-white', 'text-black');
            pill.classList.add('bg-yt-gray', 'text-white');
            if (pill.dataset.category === category) {
                pill.classList.add('active', 'bg-white', 'text-black');
                pill.classList.remove('bg-yt-gray', 'text-white');
            }
        });
    }
}



/**

 * 사이드바 아이템의 활성 상태를 업데이트합니다.

 * @param {string} activePage - 현재 활성 상태로 만들 페이지의 data-page 값
 * @param {string} [channelId=null] - 활성화할 구독 채널 ID (구독 페이지에서만 사용)
 */

function updateSidebarActiveState(activePage, channelId = null) {
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active', 'bg-yt-gray');
        if (item.dataset.page === activePage) {
            // '구독' 페이지이면서 특정 채널을 클릭한 경우
            if (activePage === 'subscriptions' && channelId && item.dataset.channelId === channelId) {
                item.classList.add('active', 'bg-yt-gray');
            }

            // 일반 페이지이거나 구독 페이지의 '전체' 탭인 경우
            else if (!channelId) {
                item.classList.add('active', 'bg-yt-gray');
            }
        }
    });

}




 //구독 페이지 내의 채널 카드에 이벤트 리스너를 연결합니다. (이벤트 위임)
function attachSubscriptionPageChannelCardListeners() {
    const subscriptionPageContainer = document.querySelector('#main-content-container');
    if (subscriptionPageContainer) {
        subscriptionPageContainer.removeEventListener('click', handleSubscriptionPageChannelCardClick);
        subscriptionPageContainer.addEventListener('click', handleSubscriptionPageChannelCardClick);
    }
}



/**
 * 구독 페이지 내 채널 카드 클릭 핸들러
 * @param {Event} e
 */

// index.js (수정 후)
function handleSubscriptionPageChannelCardClick(e) {
    // 기존 '.channel-card'를 '.subscription-channel-card'로 변경
    const targetChannelCard = e.target.closest('.subscription-channel-card');
    if (targetChannelCard) {
        e.preventDefault();
        const channelId = targetChannelCard.dataset.channelId;
        if (channelId) {
            // 'subscriptions' 페이지에서 'specificChannel' 모드로 이동
            renderPage('subscriptions', { viewMode: 'specificChannel', channelId: channelId });
        }
    }
}



/**
 * 주어진 페이지를 렌더링하고 활성 상태로 만듭니다.
 * @param {string} pageName - 렌더링할 페이지의 이름 ('home', 'shorts', 'subscriptions', 'library')
 * @param {Object} [params={}] - 페이지 렌더링에 필요한 추가 매개변수
 */

function renderPage(pageName, params = {}) {
    mainContentContainer.innerHTML = '';
    searchResultsContainer.innerHTML = '';
    mainContentContainer.classList.add('hidden');
    searchResultsContainer.classList.add('hidden');

    switch (pageName) {

        case 'home':
            mainContentContainer.innerHTML = VideoGrid(params.category);
            mainContentContainer.classList.remove('hidden');
            attachCategoryPillListeners();
            break;

        case 'shorts':
            mainContentContainer.innerHTML = ShortsPage();
            mainContentContainer.classList.remove('hidden');
            break;

        /*case 'subscriptions':
            mainContentContainer.innerHTML = SubscriptionsPage({
                viewMode: params.viewMode,
                selectedChannelId: params.channelId

            });
            mainContentContainer.classList.remove('hidden');
            attachSubscriptionPageChannelCardListeners();
            break;*/
            case 'subscriptions':
            // SubscriptionsPage는 `viewMode`와 `selectedChannelId`에 따라
            // 전체 목록을 보여주거나, 개별 채널의 영상 목록을 보여주도록 로직을 추가해야 함
            mainContentContainer.innerHTML = SubscriptionsPage(params);
            mainContentContainer.classList.remove('hidden');
            attachSubscriptionPageChannelCardListeners();
            break;
        case 'channel': // 'channel' 케이스 추가
            // channelId를 받아서 해당 채널의 영상 목록을 렌더링
            mainContentContainer.innerHTML = ChannelVideosPage(params.channelId);
            mainContentContainer.classList.remove('hidden');
            break;

        case 'library':
            mainContentContainer.innerHTML = LibraryPage();
            mainContentContainer.classList.remove('hidden');
            break;

         case 'search':
            searchResultsContainer.innerHTML = SearchResults(params.query, params.results);
            searchResultsContainer.classList.remove('hidden');
            break;

        default:
            mainContentContainer.innerHTML = VideoGrid('전체');
            mainContentContainer.classList.remove('hidden');
            break;
    }
    updateSidebarActiveState(pageName, params.channelId);
}



document.addEventListener('DOMContentLoaded', () => {
    headerContainer.innerHTML = Header();
    sidebarContainer.innerHTML = Sidebar();
    renderPage('home');

    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            renderPage('home');
        });
    }

    renderPage('home');

    const hamburgerBtn = document.getElementById('hamburger');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                if (isSidebarOpen) {
                    sidebar.style.transform = 'translateX(-100%)';
                    body.classList.add('sidebar-closed');
                } else {
                    sidebar.style.transform = 'translateX(0)';
                    body.classList.remove('sidebar-closed');
                }
                isSidebarOpen = !isSidebarOpen;
            }
        });

    }

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if (searchInput) {
        // 검색창 입력 이벤트
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                const filteredVideos = videos.filter(video =>
                    video.title.includes(query) ||
                    (video.description && video.description.includes(query)) || // 수정: description이 있을 때만 includes 호출
                    (video.channel && video.channel.name && video.channel.name.includes(query)) || // 수정: channel.name이 있을 때만
                    (video.category && video.category.includes(query))
                );
                renderPage('search', { query: query, results: filteredVideos });
            } else {
                renderPage('home');
            }
        });

        // 검색 버튼 클릭 이벤트
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const query = searchInput.value.trim();
                const filteredVideos = videos.filter(video =>
                    video.title.includes(query) ||
                    (video.description && video.description.includes(query)) || // 수정
                    (video.channel && video.channel.name && video.channel.name.includes(query)) || // 수정
                    (video.category && video.category.includes(query))
                );
                renderPage('search', { query: query, results: filteredVideos });
            });
        }
    }

    // 사이드바 아이템 클릭 이벤트 

    document.body.addEventListener('click', (e) => {
        const item = e.target.closest('.sidebar-item');
        const channelCard = e.target.closest('.subscription-channel-card');
        if (item) {
            e.preventDefault();
            const page = item.dataset.page;
            const channelId = item.dataset.channelId;

            // 사이드바의 '구독' 버튼을 클릭하면 전체 목록 페이지로 이동
            if (page === 'subscriptions' && !channelId) {
                renderPage('subscriptions');
                //renderPage('subscriptions', { viewMode: 'allChannels' });
            } else {
                renderPage(page, { channelId: channelId });

            }
        }
            if (channelCard) {
        e.preventDefault();
        const channelId = channelCard.dataset.channelId;
        // 'channel' 페이지로 직접 이동
        renderPage('channel', { channelId: channelId }); 
    }


    });

});