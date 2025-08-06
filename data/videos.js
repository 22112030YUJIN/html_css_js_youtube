// data/videos.js

export const channels = [
    {
        id: 'channel1',
        name: '여행 유튜버 채널',
        thumbnail: 'https://picsum.photos/id/66/60/60',
    },
    {
        id: 'channel2',
        name: '요리하는 남자',
        thumbnail: 'https://picsum.photos/id/65/60/60',
    },
    {
        id: 'channel3',
        name: 'IT 테크 리뷰',
        thumbnail: 'https://picsum.photos/id/64/60/60',
    },
    {
        id: 'channel4',
        name: '뮤직 스쿨',
        thumbnail: 'https://picsum.photos/id/63/60/60',
    },
    {
        id: 'channel5',
        name: '카페 홀릭',
        thumbnail: 'https://picsum.photos/id/62/60/60',
    },
    {
        id: 'channel6',
        name: '코딩 덕후',
        thumbnail: 'https://picsum.photos/id/61/60/60',
    },
    {
        id: 'channel7',
        name: 'DIY 마스터',
        thumbnail: 'https://picsum.photos/id/60/60/60',
    },
    {
        id: 'channel8',
        name: '냥이와 집사',
        thumbnail: 'https://picsum.photos/id/59/60/60',
    },
    {
        id: 'channel9',
        name: '글로벌 뉴스',
        thumbnail: 'https://picsum.photos/id/350/60/60',
    },
    {
        id: 'channel10',
        name: '뮤직박스',
        thumbnail: 'https://picsum.photos/id/351/60/60',
    }
];


export const videos = [
    // channel1: 여행 유튜버 채널 (5개)
    {
        id: '1',
        title: '반려동물과 함께 떠나는 제주도 여행',
        channel: '여행 유튜버 채널',
        channelId: 'channel1',
        thumbnail: 'https://picsum.photos/id/237/320/180',
        views: '12만',
        uploadDate: '1일 전',
        description: '제주도의 아름다운 풍경과 귀여운 반려동물의 조합! 잊지 못할 추억을 만들었어요.',
        category: ['여행', '반려동물', '브이로그', '전체']
    },
    {
        id: '1-2',
        title: '유럽 렌터카 여행 브이로그 1편',
        channel: '여행 유튜버 채널',
        channelId: 'channel1',
        thumbnail: 'https://picsum.photos/id/240/320/180',
        views: '20만',
        uploadDate: '3일 전',
        description: '유럽의 아름다운 도시들을 렌터카로 여행하며 찍은 브이로그입니다. 잊지 못할 경험!',
        category: ['여행', '브이로그', '전체']
    },
    {
        id: '1-3',
        title: '숨겨진 동남아 휴양지 탐방',
        channel: '여행 유튜버 채널',
        channelId: 'channel1',
        thumbnail: 'https://picsum.photos/id/241/320/180',
        views: '15만',
        uploadDate: '1주 전',
        description: '아직 잘 알려지지 않은 동남아시아의 보석 같은 휴양지를 소개합니다. 완벽한 힐링!',
        category: ['여행', '전체']
    },
    {
        id: '1-4',
        title: '제주도 한달 살기 도전기',
        channel: '여행 유튜버 채널',
        channelId: 'channel1',
        thumbnail: 'https://picsum.photos/id/242/320/180',
        views: '8만',
        uploadDate: '2주 전',
        description: '제주도에서 한 달 동안 살아보면서 느낀 점과 생활 팁을 공유합니다.',
        category: ['여행', '브이로그', '전체']
    },
    {
        id: '1-5',
        title: '캠핑 초보를 위한 장비 가이드',
        channel: '여행 유튜버 채널',
        channelId: 'channel1',
        thumbnail: 'https://picsum.photos/id/243/320/180',
        views: '6만',
        uploadDate: '3주 전',
        description: '캠핑을 처음 시작하는 분들을 위한 필수 장비 리스트와 사용법입니다.',
        category: ['여행', '전체']
    },

    // channel2: 요리하는 남자 (3개)
    {
        id: '2',
        title: '집에서 만드는 고급스러운 파스타 레시피',
        channel: '요리하는 남자',
        channelId: 'channel2',
        thumbnail: 'https://picsum.photos/id/1080/320/180',
        views: '5.8만',
        uploadDate: '3일 전',
        description: '집에서도 미슐랭 레스토랑 분위기를 낼 수 있는 간단한 파스타 레시피입니다.',
        category: ['요리', '음식', '레시피', '전체']
    },
    {
        id: '2-2',
        title: '초간단 자취생 요리 팁 (10분 완성)',
        channel: '요리하는 남자',
        channelId: 'channel2',
        thumbnail: 'https://picsum.photos/id/1081/320/180',
        views: '7만',
        uploadDate: '5일 전',
        description: '바쁜 자취생들을 위한 빠르고 맛있는 10분 완성 요리 레시피!',
        category: ['요리', '음식', '레시피', '전체']
    },
    {
        id: '2-3',
        title: '달콤한 디저트 만들기 - 마카롱 편',
        channel: '요리하는 남자',
        channelId: 'channel2',
        thumbnail: 'https://picsum.photos/id/1082/320/180',
        views: '4만',
        uploadDate: '1주 전',
        description: '집에서 직접 만드는 실패 없는 마카롱 레시피를 공개합니다.',
        category: ['요리', '음식', '레시피', '전체']
    },

    // channel3: IT 테크 리뷰 (2개)
    {
        id: '3',
        title: '2025년 최신 스마트폰 언박싱 및 리뷰',
        channel: 'IT 테크 리뷰',
        channelId: 'channel3',
        thumbnail: 'https://picsum.photos/id/0/320/180',
        views: '30만',
        uploadDate: '1주 전',
        description: '새롭게 출시된 2025년 최신 스마트폰의 모든 것을 파헤쳐봅니다. 과연 성능은?',
        category: ['IT', '테크', '리뷰', '전체']
    },
    {
        id: '3-2',
        title: '가성비 최고의 게이밍 노트북 추천',
        channel: 'IT 테크 리뷰',
        channelId: 'channel3',
        thumbnail: 'https://picsum.photos/id/1/320/180',
        views: '18만',
        uploadDate: '2주 전',
        description: '고사양 게임도 문제없는 가성비 갑 게이밍 노트북을 소개합니다.',
        category: ['IT', '테크', '리뷰', '게임', '전체']
    },

    // channel4: 뮤직 스쿨 (1개)
    {
        id: '4',
        title: '초보자를 위한 기타 강좌 - 코드 배우기',
        channel: '뮤직 스쿨',
        channelId: 'channel4',
        thumbnail: 'https://picsum.photos/id/1040/320/180',
        views: '8만',
        uploadDate: '2주 전',
        description: '기타를 처음 시작하는 분들을 위한 쉬운 코드 배우기 강좌입니다. 함께 연주해봐요!',
        category: ['음악', '강좌', '취미', '전체']
    },

    // channel5: 카페 홀릭 (3개)
    {
        id: '5',
        title: '도심 속 힐링 스팟, 숨겨진 카페 탐방',
        channel: '카페 홀릭',
        channelId: 'channel5',
        thumbnail: 'https://picsum.photos/id/1050/320/180',
        views: '7.5만',
        uploadDate: '4일 전',
        description: '시끄러운 도시 속에서 잠시 쉬어갈 수 있는 조용하고 아름다운 카페들을 소개합니다.',
        category: ['여행', '브이로그', '카페', '전체']
    },
    {
        id: '5-2',
        title: '집에서 즐기는 홈카페 레시피',
        channel: '카페 홀릭',
        channelId: 'channel5',
        thumbnail: 'https://picsum.photos/id/1051/320/180',
        views: '5만',
        uploadDate: '1주 전',
        description: '바리스타 없이도 집에서 만드는 근사한 홈카페 음료 레시피!',
        category: ['음식', '카페', '전체']
    },
    {
        id: '5-3',
        title: '해외 유명 카페 투어 (런던 편)',
        channel: '카페 홀릭',
        channelId: 'channel5',
        thumbnail: 'https://picsum.photos/id/1052/320/180',
        views: '9만',
        uploadDate: '2주 전',
        description: '런던의 빈티지하고 멋진 카페들을 방문하여 커피와 분위기를 즐겨봤습니다.',
        category: ['여행', '카페', '전체']
    },

    // channel6: 코딩 덕후 (2개)
    {
        id: '6',
        title: '재미있는 프로그래밍 챌린지 - 파이썬 편',
        channel: '코딩 덕후',
        channelId: 'channel6',
        thumbnail: 'https://picsum.photos/id/1060/320/180',
        views: '15만',
        uploadDate: '5일 전',
        description: '파이썬을 이용한 흥미로운 프로그래밍 챌린지! 문제 해결 능력을 키워보세요.',
        category: ['IT', '교육', '코딩', '게임', '전체']
    },
    {
        id: '6-2',
        title: '자바스크립트 프레임워크 비교 (React vs Vue)',
        channel: '코딩 덕후',
        channelId: 'channel6',
        thumbnail: 'https://picsum.photos/id/1061/320/180',
        views: '10만',
        uploadDate: '1주 전',
        description: '프론트엔드 개발의 양대 산맥, React와 Vue를 전격 비교 분석합니다.',
        category: ['IT', '교육', '코딩', '전체']
    },

    // channel7: DIY 마스터 (1개)
    {
        id: '7',
        title: '오래된 가구 리폼으로 새 생명 불어넣기',
        channel: 'DIY 마스터',
        channelId: 'channel7',
        thumbnail: 'https://picsum.photos/id/1070/320/180',
        views: '9만',
        uploadDate: '3일 전',
        description: '낡고 오래된 가구를 멋진 새 가구로 변신시키는 리폼 팁과 노하우를 공개합니다.',
        category: ['DIY', '인테리어', '전체']
    },

    // channel8: 냥이와 집사 (4개)
    {
        id: '8',
        title: '고양이 훈련: 똑똑한 우리 냥이 만들기',
        channel: '냥이와 집사',
        channelId: 'channel8',
        thumbnail: 'https://picsum.photos/id/1084/320/180',
        views: '6.2만',
        uploadDate: '6일 전',
        description: '고양이와 유대감을 형성하고 기본적인 훈련을 가르치는 방법을 알려드립니다.',
        category: ['반려동물', '교육', '전체']
    },
    {
        id: '8-2',
        title: '길냥이 구조와 입양 후기',
        channel: '냥이와 집사',
        channelId: 'channel8',
        thumbnail: 'https://picsum.photos/id/1085/320/180',
        views: '11만',
        uploadDate: '1주 전',
        description: '추운 길에서 만난 아기 길냥이를 구조하여 가족으로 맞이한 감동적인 이야기.',
        category: ['반려동물', '전체']
    },
    {
        id: '8-3',
        title: '우리 집 고양이 간식 만들기 (수제 간식)',
        channel: '냥이와 집사',
        channelId: 'channel8',
        thumbnail: 'https://picsum.photos/id/1086/320/180',
        views: '7만',
        uploadDate: '2주 전',
        description: '우리 냥이들을 위한 건강하고 맛있는 수제 간식 레시피를 소개합니다.',
        category: ['반려동물', '요리', '전체']
    },
    {
        id: '8-4',
        title: '강아지 행동 교정 팁: 짖음 문제 해결',
        channel: '냥이와 집사', // 채널 이름은 냥이와 집사지만 강아지 영상도 있다고 가정
        channelId: 'channel8',
        thumbnail: 'https://picsum.photos/id/1087/320/180',
        views: '5만',
        uploadDate: '3주 전',
        description: '강아지의 과도한 짖음 문제를 효과적으로 해결하는 행동 교정 팁입니다.',
        category: ['반려동물', '교육', '전체']
    },

    // channel9: 글로벌 뉴스 (1개)
    {
        id: '9',
        title: '세계 뉴스 브리핑: 2025년 8월 4일 주요 소식',
        channel: '글로벌 뉴스',
        channelId: 'channel9',
        thumbnail: 'https://picsum.photos/id/350/320/180',
        views: '20만',
        uploadDate: '1시간 전',
        description: '오늘 전 세계에서 일어난 주요 뉴스들을 빠르고 정확하게 전달해 드립니다.',
        category: ['뉴스', '시사', '전체']
    },

    // channel10: 뮤직박스 (1개)
    {
        id: '10',
        title: '신나는 댄스 음악 플레이리스트',
        channel: '뮤직박스',
        channelId: 'channel10',
        thumbnail: 'https://picsum.photos/id/351/320/180',
        views: '50만',
        uploadDate: '3주 전',
        description: '운동할 때, 공부할 때 신나게 들을 수 있는 최신 댄스 음악 모음!',
        category: ['음악', '플레이리스트', '전체']
    }
];