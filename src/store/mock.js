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

// 댓글 mock data - 새로 추가
const mockComments = [
  {
    comment_id: 1,
    album_id: 1,
    member_name: "엄마",
    member_image: require("../assets/mock/album/album1.jpg"),
    comment_text: "정말 즐거운 하루였어요! 다음에도 함께 가고 싶어요.",
  },
  {
    comment_id: 2,
    album_id: 1,
    member_name: "아빠",
    member_image: require("../assets/mock/album/album2.jpg"),
    comment_text: "아이들이 정말 좋아하네요. 좋은 추억이 되었습니다.",
  },
  {
    comment_id: 3,
    album_id: 2,
    member_name: "딸",
    member_image: require("../assets/mock/album/album3.png"),
    comment_text: "물 마시기 힘들었지만 성공해서 뿌듯해요!",
  },
  {
    comment_id: 4,
    album_id: 3,
    member_name: "아들",
    member_image: require("../assets/mock/album/album4.jpg"),
    comment_text: "한강에서 산책하면서 많은 이야기를 나눴어요.",
  },
  {
    comment_id: 5,
    album_id: 1,
    member_name: "할머니",
    member_image: require("../assets/mock/album/album5.jpg"),
    comment_text: "손자들과 함께 하니까 더 재미있었어요.",
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
  points: 2000,
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
    daily_id: 5,
    daily_title: "일일미션3",
    reward: 100,
  },
  {
    daily_id: 7,
    daily_title: "일일미션4",
    reward: 100,
  },
  {
    daily_id: 9,
    daily_title: "일일미션5",
    reward: 100,
  },
  {
    daily_id: 11,
    daily_title: "일일미션6",
    reward: 100,
  },
];

// 가족 구성원 mock data
const mockFamilyMembers = [
  {
    id: 1,
    member_id: 1,
    member_name: "엄마",
    member_image: require("../assets/mock/album/album1.jpg"),
    member_gender: "여성",
    member_age: 45,
  },
  {
    id: 2,
    member_id: 2,
    member_name: "아빠",
    member_image: require("../assets/mock/album/album2.jpg"),
    member_gender: "남성",
    member_age: 48,
  },
  {
    id: 3,
    member_id: 3,
    member_name: "딸",
    member_image: require("../assets/mock/album/album3.png"),
    member_gender: "여성",
    member_age: 16,
  },
  {
    id: 4,
    member_id: 4,
    member_name: "아들",
    member_image: require("../assets/mock/album/album4.jpg"),
    member_gender: "남성",
    member_age: 12,
  },
  {
    id: 5,
    member_id: 5,
    member_name: "할머니",
    member_image: require("../assets/mock/album/album5.jpg"),
    member_gender: "여성",
    member_age: 72,
  },
];

// 마켓 mock data
const mockMarketItems = [
  {
    item_id: 1,
    name: "스타벅스 아메리카노",
    description: "따뜻한 아메리카노",
    image_url: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    category: "음료",
    cost: 500,
    stock: 10,
    created_at: "2025-08-22T09:00:00Z",
  },
  {
    item_id: 2,
    name: "팔도비빔면",
    description: "괄도네넴띤",
    image_url: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    category: "라면",
    cost: 3000,
    stock: 2,
    created_at: "2025-08-22T09:00:00Z",
  },
  {
    item_id: 3,
    name: "스윙칩 볶음고추장맛",
    description: "스윙스",
    image_url: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    category: "과자",
    cost: 2500,
    stock: 5,
    created_at: "2025-08-22T09:00:00Z",
  },
  {
    item_id: 4,
    name: "CGV 영화관람권",
    description: "CGV 일반 영화관람권",
    image_url: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    category: "기타",
    cost: 1200,
    stock: 8,
    created_at: "2025-08-22T09:00:00Z",
  },
  {
    item_id: 5,
    name: "CGV 영화관람권",
    description: "CGV 일반 영화관람권",
    image_url: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    category: "기타",
    cost: 1200,
    stock: 8,
    created_at: "2025-08-22T09:00:00Z",
  },
];

// 마이 아이템 mock data
const mockMyItems = [
  {
    user_reward_id: 12,
    item_name: "스타벅스 아메리카노",
    item_image: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    barcode: "1234-5678-9999",
    expires_at: "2025-12-31T23:59:59Z",
    is_used: false,
    purchased_at: "2025-08-22T10:00:00Z",
  },
  {
    user_reward_id: 15,
    item_name: "CGV 영화관람권",
    item_image: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    barcode: "9876-5432-1111",
    expires_at: "2026-01-31T23:59:59Z",
    is_used: true,
    purchased_at: "2025-08-20T14:30:00Z",
  },
  {
    user_reward_id: 15,
    item_name: "CGV 영화관람권",
    item_image: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    barcode: "9876-5432-1111",
    expires_at: "2026-01-31T23:59:59Z",
    is_used: true,
    purchased_at: "2025-08-20T14:30:00Z",
  },
  {
    user_reward_id: 15,
    item_name: "CGV 영화관람권",
    item_image: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Grandpa",
    barcode: "9876-5432-1111",
    expires_at: "2026-01-31T23:59:59Z",
    is_used: true,
    purchased_at: "2025-08-20T14:30:00Z",
  },
];

export {
  mockAlbums,
  mockComments, // 새로 추가
  mockDailyMissions,
  mockWeeklyMissions,
  mockUser,
  mockProfileDailyMissions,
  mockProfileWeeklyMissions,
  mockFamilyMembers,
  mockMarketItems,
  mockMyItems,
};
