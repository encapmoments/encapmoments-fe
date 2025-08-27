import { create } from "zustand";
import {
  mockAlbums,
  mockUser,
  mockDailyMissions,
  mockWeeklyMissions,
  mockProfileDailyMissions,
  mockProfileWeeklyMissions,
  mockFamilyMembers,
} from "./mock";

// 앨범 mock data
export const useAlbumStore = create(set => ({
  albums: [...mockAlbums],
  addAlbum: album =>
    set(state => ({
      albums: [...state.albums, album],
    })),
}));

// 미션 mock data
export const useMissionStore = create(set => ({
  dailyMissions: [...mockDailyMissions],
  weeklyMissions: [...mockWeeklyMissions],

  addWeeklyMission: newMission => {
    set(state => ({
      weeklyMissions: [newMission, ...state.weeklyMissions],
    }));
  },

  getDailyDetail: id => mockDailyMissions.find(m => m.daily_id === id),
  getWeeklyDetail: id => mockWeeklyMissions.find(m => m.weekly_id === id),
}));

// 프로필 mock data
export const useProfileStore = create(set => ({
  profileUser: mockUser,

  profileDailyMissions: [...mockProfileDailyMissions],
  profileWeeklyMissions: [...mockProfileWeeklyMissions],

  getProfileDaily: id => mockProfileDailyMissions.find(m => m.daily_id === id),
  getProfileWeekly: id =>
    mockProfileWeeklyMissions.find(m => m.weekly_id === id),
}));

// 가족 구성원 mock data
export const useFamilyStore = create((set, get) => ({
  familyMembers: [...mockFamilyMembers],

  // 구성원 추가
  addFamilyMember: memberData => {
    const currentMembers = get().familyMembers;
    const newId = Math.max(...currentMembers.map(m => m.id), 0) + 1;
    const newMemberId = Math.max(...currentMembers.map(m => m.member_id), 0) + 1;

    const newMember = {
      id: newId,
      member_id: newMemberId,
      member_name: memberData.member_name,
      member_image: memberData.member_image || require("../assets/mock/album/album6.jpg"),
      member_gender: memberData.member_gender || null,
      member_age: memberData.member_age || null,
    };

    set(state => ({
      familyMembers: [...state.familyMembers, newMember],
    }));

    return {
      message: "구성원 등록 완료",
      member_image_url: newMember.member_image,
    };
  },

  // 구성원 수정
  updateFamilyMember: (member_id, memberData) => {
    const currentMembers = get().familyMembers;
    const index = currentMembers.findIndex(m => m.member_id === parseInt(member_id));

    if (index === -1) {
      throw new Error("구성원을 찾을 수 없습니다.");
    }

    const updatedMember = {
      ...currentMembers[index],
      member_name: memberData.member_name || currentMembers[index].member_name,
      member_image: memberData.member_image || currentMembers[index].member_image,
      member_gender: memberData.member_gender || currentMembers[index].member_gender,
      member_age: memberData.member_age || currentMembers[index].member_age,
    };

    set(state => ({
      familyMembers: state.familyMembers.map(member =>
        member.member_id === parseInt(member_id) ? updatedMember : member
      ),
    }));

    return {
      message: "구성원 정보 수정 완료",
      member_image_url: updatedMember.member_image,
    };
  },

  // 구성원 삭제
  deleteFamilyMember: member_id => {
    const currentMembers = get().familyMembers;
    const exists = currentMembers.some(m => m.member_id === parseInt(member_id));
    
    if (!exists) {
      throw new Error("구성원을 찾을 수 없습니다.");
    }

    set(state => ({
      familyMembers: state.familyMembers.filter(member => member.member_id !== parseInt(member_id))
    }));

    return { message: "구성원 삭제 완료" };
  },

  // 특정 구성원 조회
  getFamilyMember: member_id => {
    const currentMembers = get().familyMembers;
    return currentMembers.find(m => m.member_id === parseInt(member_id));
  },
}));

// accessToken 발급
export const useAuthStore = create(set => ({
  accessToken: null,
  setAccessToken: token => set({ accessToken: token }),
  resetAccessToken: () => set({ accessToken: null }),
}));

// 로그인 관련 store
export const useAuthTempStore = create(set => ({
  profileImageUrl: "",
  setProfileImageUrl: url => set({ profileImageUrl: url }),

  tempEmail: "",
  setTempEmail: email => set({ tempEmail: email }),

  tempPassword: "",
  setTempPassword: pw => set({ tempPassword: pw }),

  tempNickname: "",
  setTempNickname: name => set({ tempNickname: name }),
}));

export const useUserStore = create(set => ({
  user: null,
  setUser: user => set({ user }),
  resetUser: () => set({ user: null }),
}));
