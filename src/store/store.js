import { create } from 'zustand';
import { mockAlbums, mockUser, mockDailyMissions, mockWeeklyMissions, mockProfileDailyMissions, mockProfileWeeklyMissions } from './mock';

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
}));

// 미션 mock data
export const useMissionStore = create((set) => ({
  dailyMissions: [...mockDailyMissions],
  weeklyMissions: [...mockWeeklyMissions],

  addWeeklyMission: (newMission) => {
    set((state) => ({
      weeklyMissions: [newMission, ...state.weeklyMissions],
    }));
  },

  getDailyDetail: (id) => mockDailyMissions.find((m) => m.daily_id === id),
  getWeeklyDetail: (id) => mockWeeklyMissions.find((m) => m.weekly_id === id),
}));

// 프로필 mock data
export const useProfileStore = create((set) => ({
  profileUser: mockUser,

  profileDailyMissions: [...mockProfileDailyMissions],
  profileWeeklyMissions: [...mockProfileWeeklyMissions],

  getProfileDaily: (id) => mockProfileDailyMissions.find((m) => m.daily_id === id),
  getProfileWeekly: (id) => mockProfileWeeklyMissions.find((m) => m.weekly_id === id),
}));
