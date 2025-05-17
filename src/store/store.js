import { create } from 'zustand';
import { mockAlbums, mockUsers, mockDailyMissions, mockDailyDetails, mockWeeklyMissions, mockWeeklyDetails, mockProfileUser, mockProfileDailyMissions, mockProfileWeeklyMissions } from './mock';

// accessToken 발급
const useAuthStore = create((set) => ({
    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
  }
));

export default useAuthStore;

// 앨범 mock data
export const useAlbumStore = create((set) => ({
  albums: [...mockAlbums],
  addAlbum: (album) =>
    set((state) => ({
      albums: [...state.albums, album],
    })),
  resetAlbums: () => set({ albums: [...mockAlbums] }),
}));

// 미션 mock data
export const useMissionStore = create((set) => ({
  dailyMissions: [...mockDailyMissions],
  dailyMissionDetails: [...mockDailyDetails],

  weeklyMissions: [...mockWeeklyMissions],
  weeklyMissionDetails: [...mockWeeklyDetails],

  getDailyDetail: (id) => mockDailyDetails.find((m) => m.daily_id === id),
  getWeeklyDetail: (id) => mockWeeklyDetails.find((m) => m.weekly_id === id),
}));

// // 유저 mock data
// export const useUserStore = create((set) => ({
//   users: [...mockUsers],

// }));

// 프로필 mock data
export const useProfileStore = create((set) => ({
  // TODO: 개인 정보
  profileUser: mockProfileUser,

  profileDailyMissions: [...mockProfileDailyMissions],
  profileWeeklyMissions: [...mockProfileWeeklyMissions],

  getProfileDaily: (id) => mockProfileDailyMissions.find((m) => m.daily_id === id),
  getProfileWeekly: (id) => mockProfileWeeklyMissions.find((m) => m.weekly_id === id),
}));
