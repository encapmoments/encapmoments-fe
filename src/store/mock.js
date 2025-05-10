// 앨범 mock data
const mockAlbums = [
    {
      album_image: require('../assets/mock/album/album1.jpg'),
      album_tag: '가족 시간',
      album_title: '놀이공원에서의 하루',
      location: '에버랜드',
    },
    {
      album_image: require('../assets/mock/album/album2.jpg'),
      album_tag: '일상',
      album_title: '물 마시기 미션 성공!',
      location: '우리 집',
    },
    {
      album_image: require('../assets/mock/album/album3.png'),
      album_tag: '갱갱',
      album_title: '산책하며 대화하기',
      location: '한강공원',
    },
    {
      album_image: require('../assets/mock/album/album4.jpg'),
      album_tag: '강강',
      album_title: '발발',
      location: '말말',
    },
    {
      album_image: require('../assets/mock/album/album5.jpg'),
      album_tag: '공공',
      album_title: '볼볼',
      location: '몰몰',
    },
    {
      album_image: require('../assets/mock/album/album6.jpg'),
      album_tag: '궁궁',
      album_title: '불불',
      location: '물물',
    },
    {
      album_image: require('../assets/mock/album/album7.jpg'),
      album_tag: '깅깅',
      album_title: '빌빌',
      location: '밀밀',
    },
];

// 유저 mock data
const mockUsers = [
  {
    email: 'a@a.com',
    password: '1234',
    nickname: '이강룡',
    profile_image: 'https://example.com/kang.png',
    points: 100,
  },
  {
    email: 'b@b.com',
    password: 'abcd',
    nickname: '정연웅',
    profile_image: 'https://example.com/yeon.png',
    points: 200,
  },
  {
    email: 'c@c.com',
    password: 'pass123',
    nickname: '민재영',
    profile_image: 'https://example.com/jae.png',
    points: 300,
  },
];

// 미션 mock data
const mockDailyMissions = [
    { daily_id: 1, daily_title: '일일미션1', reward: 100, is_completed: false },
    { daily_id: 2, daily_title: '일일미션2', reward: 100, is_completed: true },
    { daily_id: 3, daily_title: '일일미션3', reward: 100, is_completed: true },
    { daily_id: 4, daily_title: '일일미션4', reward: 100, is_completed: false },
    { daily_id: 5, daily_title: '일일미션5', reward: 100, is_completed: false },
    { daily_id: 6, daily_title: '일일미션6', reward: 100, is_completed: true },
  ];


const mockDailyDetails = {
1: {
    daily_id: 1,
    daily_image: require('../assets/mock/mission/mission1.jpg'),
    daily_title: '일일미션1',
    daily_description: '일일미션설명1',
    reward: 100,
},
2: {
    daily_id: 2,
    daily_image: require('../assets/mock/mission/mission2.jpg'),
    daily_title: '일일미션2',
    daily_description: '일일미션설명2',
    reward: 100,
},
3: {
    daily_id: 3,
    daily_image: require('../assets/mock/mission/mission3.jpg'),
    daily_title: '일일미션3',
    daily_description: '일일미션설명3',
    reward: 100,
},
4: {
    daily_id: 4,
    daily_image: require('../assets/mock/mission/mission4.jpg'),
    daily_title: '일일미션4',
    daily_description: '일일미션설명4',
    reward: 100,
},
5: {
    daily_id: 5,
    daily_image: require('../assets/mock/mission/mission5.jpg'),
    daily_title: '일일미션5',
    daily_description: '일일미션설명5',
    reward: 100,
},
6: {
    daily_id: 6,
    daily_image: require('../assets/mock/mission/mission6.jpg'),
    daily_title: '일일미션6',
    daily_description: '일일미션설명6',
    reward: 100,
},
};

const mockWeeklyMissions = [
{ weekly_id: 1, weekly_image: require('../assets/mock/mission/mission1.jpg'), weekly_title: '주간미션1', reward: 300, is_completed: false },
{ weekly_id: 2, weekly_image: require('../assets/mock/mission/mission2.jpg'), weekly_title: '주간미션2', reward: 300, is_completed: true },
{ weekly_id: 3, weekly_image: require('../assets/mock/mission/mission3.jpg'), weekly_title: '주간미션3', reward: 300, is_completed: false },
];

const mockWeeklyDetails = {
    1: {
        weekly_image: require('../assets/mock/mission/mission1.jpg'),
        weekly_title: '주간미션1',
        weekly_description: '주간미션설명1',
        reward: 300,
    },
    2: {
        weekly_image: require('../assets/mock/mission/mission2.jpg'),
        weekly_title: '주간미션2',
        weekly_description: '주간미션설명2',
        reward: 300,
    },
    3: {
        weekly_image: require('../assets/mock/mission/mission3.jpg'),
        weekly_title: '주간미션3',
        weekly_description: '주간미션설명3',
        reward: 300,
    },
};

export {
mockAlbums,
mockUsers,
mockDailyMissions,
mockDailyDetails,
mockWeeklyMissions,
mockWeeklyDetails,
};
