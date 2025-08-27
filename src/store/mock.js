// 앨범 mock data
const mockAlbums = [
  {
    album_id: 1,
    album_image: require("../assets/mock/album/album1.jpg"),
    album_tag: "가족 시간",
    album_title: "놀이공원에서의 하루",
    location: "에버랜드",
  },
  {
    album_id: 2,
    album_image: require("../assets/mock/album/album2.jpg"),
    album_tag: "일상",
    album_title: "물 마시기 미션 성공!",
    location: "우리 집",
  },
  {
    album_id: 3,
    album_image: require("../assets/mock/album/album3.png"),
    album_tag: "갱갱",
    album_title: "산책하며 대화하기",
    location: "한강공원",
  },
  {
    album_id: 4,
    album_image: require("../assets/mock/album/album4.jpg"),
    album_tag: "강강",
    album_title: "발발",
    location: "말말",
  },
  {
    album_id: 5,
    album_image: require("../assets/mock/album/album5.jpg"),
    album_tag: "공공",
    album_title: "볼볼",
    location: "몰몰",
  },
  {
    album_id: 6,
    album_image: require("../assets/mock/album/album6.jpg"),
    album_tag: "궁궁",
    album_title: "불불",
    location: "물물",
  },
  {
    album_id: 7,
    album_image: require("../assets/mock/album/album7.jpg"),
    album_tag: "깅깅",
    album_title: "빌빌",
    location: "밀밀",
  },
];

// 미션 mock data
const mockDailyMissions = [
  {
    daily_id: 1,
    daily_image: require("../assets/mock/mission/mission1.jpg"),
    daily_title: "일일미션1",
    daily_description: "일일미션설명1",
    reward: 100,
    is_completed: false,
  },
  {
    daily_id: 2,
    daily_image: require("../assets/mock/mission/mission2.jpg"),
    daily_title: "일일미션2",
    daily_description: "일일미션설명2",
    reward: 100,
    is_completed: false,
  },
  {
    daily_id: 3,
    daily_image: require("../assets/mock/mission/mission3.jpg"),
    daily_title: "일일미션3",
    daily_description: "일일미션설명3",
    reward: 100,
    is_completed: true,
  },
  {
    daily_id: 4,
    daily_image: require("../assets/mock/mission/mission4.jpg"),
    daily_title: "일일미션4",
    daily_description: "일일미션설명4",
    reward: 100,
    is_completed: false,
  },
  {
    daily_id: 5,
    daily_image: require("../assets/mock/mission/mission5.jpg"),
    daily_title: "일일미션5",
    daily_description: "일일미션설명5",
    reward: 100,
    is_completed: true,
  },
  {
    daily_id: 6,
    daily_image: require("../assets/mock/mission/mission6.jpg"),
    daily_title: "일일미션6",
    daily_description: "일일미션설명6",
    reward: 100,
    is_completed: false,
  },
];

const mockWeeklyMissions = [
  {
    weekly_id: 1,
    weekly_image: require("../assets/mock/mission/mission1.jpg"),
    weekly_title: "주간미션1",
    weekly_description: "주간미션설명1",
    reward: 300,
    is_completed: false,
  },
  {
    weekly_id: 2,
    weekly_image: require("../assets/mock/mission/mission2.jpg"),
    weekly_title: "주간미션2",
    weekly_description: "주간미션설명2",
    reward: 300,
    is_completed: true,
  },
  {
    weekly_id: 3,
    weekly_image: require("../assets/mock/mission/mission3.jpg"),
    weekly_title: "주간미션3",
    weekly_description: "주간미션설명3",
    reward: 300,
    is_completed: false,
  },
];

// 프로필 mock data
const mockUser = {
  email: "a@a.com",
  password: "1234",
  nickname: "이강룡",
  profile_image: require("../assets/mock/album/album1.jpg"),
  points: 100,
};

const mockProfileWeeklyMissions = [
  // is_completed==true 인 것만
  {
    weekly_id: 1,
    weekly_image: require("../assets/mock/mission/mission1.jpg"),
    weekly_title: "주간미션1",
    reward: 300,
  },
  {
    weekly_id: 5,
    weekly_image: require("../assets/mock/mission/mission2.jpg"),
    weekly_title: "주간미션2",
    reward: 300,
  },
  {
    weekly_id: 7,
    weekly_image: require("../assets/mock/mission/mission3.jpg"),
    weekly_title: "주간미션3",
    reward: 300,
  },
  {
    weekly_id: 8,
    weekly_image: require("../assets/mock/mission/mission4.jpg"),
    weekly_title: "주간미션4",
    reward: 300,
  },
  {
    weekly_id: 10,
    weekly_image: require("../assets/mock/mission/mission5.jpg"),
    weekly_title: "주간미션5",
    reward: 300,
  },
  {
    weekly_id: 11,
    weekly_image: require("../assets/mock/mission/mission6.jpg"),
    weekly_title: "주간미션6",
    reward: 300,
  },
];

const mockProfileDailyMissions = [
  // is_completed==true 인 것만
  {
    daily_id: 1,
    daily_title: "일일미션1",
    reward: 100,
  },
  {
    daily_id: 3,
    daily_title: "일일미션2",
    reward: 100,
  },
  {
    daily_id: 7,
    daily_title: "일일미션3",
    reward: 100,
  },
  {
    daily_id: 11,
    daily_title: "일일미션4",
    reward: 100,
  },
  {
    daily_id: 12,
    daily_title: "일일미션5",
    reward: 100,
  },
  {
    daily_id: 13,
    daily_title: "일일미션6",
    reward: 100,
  },
];

// 가족 구성원 mock data 추가
const mockFamilyMembers = [
  {
    id: 1,
    member_id: 4,
    member_name: "아들",
    member_image: "https://via.placeholder.com/150/FF6B6B/FFFFFF?text=Son",
    member_gender: "남자",
    member_age: 10,
  },
  {
    id: 2,
    member_id: 5,
    member_name: "딸",
    member_image: "https://via.placeholder.com/150/4ECDC4/FFFFFF?text=Daughter",
    member_gender: "여자",
    member_age: 8,
  },
  {
    id: 3,
    member_id: 6,
    member_name: "할머니",
    member_image: "https://via.placeholder.com/150/45B7D1/FFFFFF?text=Grandma",
    member_gender: "여자",
    member_age: 75,
  },
  {
    id: 4,
    member_id: 7,
    member_name: "할아버지",
    member_image: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    member_gender: "남자",
    member_age: 78,
  },
  {
    id: 5,
    member_id: 8,
    member_name: "막내",
    member_image: "https://via.placeholder.com/150/FFEAA7/000000?text=Baby",
    member_gender: "남자",
    member_age: 5,
  },
];

export {
  mockAlbums,
  mockUser,
  mockDailyMissions,
  mockWeeklyMissions,
  mockProfileWeeklyMissions,
  mockProfileDailyMissions,
  mockFamilyMembers,
};
