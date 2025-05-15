import { create } from 'zustand';
import { mockAlbums, mockUsers, mockDailyMissions, mockDailyDetails, mockWeeklyMissions, mockWeeklyDetails, mockProfileWeeklyMissions, mockProfileDailyMissions } from './mock';

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
  dailyMissionDetails: { ...mockDailyDetails },

  weeklyMissions: [...mockWeeklyMissions],
  weeklyMissionDetails: { ...mockWeeklyDetails },

  getDailyDetail: (id) => mockDailyDetails[id],
  getWeeklyDetail: (id) => mockWeeklyDetails[id],
}));

// // 유저 mock data
// export const useUserStore = create((set) => ({
//   users: [...mockUsers],

// }));

// // 프로필 mock data
// export const useProfileMissionsStore = create((set) => ({
//   // TODO: 개인 정보

//   profileWeeklyMissions: [...mockProfileWeeklyMissions],
//   profileDailyMissions: [...mockProfileDailyMissions],
// }));
