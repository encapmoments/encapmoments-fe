import axios from "axios";
import useMock from "./useMock";
import { useProfileStore } from "../store/store";
import baseUrl from "./baseUrl";

// 프로필 조회
export const getProfileUser = async accessToken => {
  if (useMock) {
    return useProfileStore.getState().profileUser;
  }

  const res = await axios.get(`${baseUrl}/profile/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 프로필 수정
export const updateProfile = async (accessToken, data) => {
  if (useMock) {
    return;
  }

  const res = await axios.put(`${baseUrl}/profile`, data, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 내 미션 확인
export const getProfileMissions = async accessToken => {
  if (useMock) {
    const { profileDailyMissions, profileWeeklyMissions } =
      useProfileStore.getState();
    return {
      daily: profileDailyMissions,
      weekly: profileWeeklyMissions,
    };
  }

  const res = await axios.get(`${baseUrl}/mypage/missions`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 구성원 조회
export const getMembers = async accessToken => {
  if (useMock) {
  }

  const res = await axios.get(`${baseUrl}/family/members`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
  /*
    RESPONSE
    /*
    [
      {
      "id":1,
      "member_id":4,
      "member_name":"아들",
      "member_image":"xxx.jpg",
      "member_gender":"남",
      "member_age":10
      },
      ...
    ]
    */
};

// 구성원 생성
export const createMembers = async accessToken => {
  if (useMock) {
  }

  const res = await axios.post(`${baseUrl}/family/members`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;


  /*
    REQUEST
    multipart/form-data - member_name, member_image, member_gender?, member_age?
  */

  /*
    RESPONSE
    { "message": "구성원 등록 완료", member_image_url  : “….” }
  */
};

// 구성원 삭제
export const deleteMembers = async (member_id, accessToken) => {
  if (useMock) {
  }

  const res = await axios.delete(`${baseUrl}/family/members/${member_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
  /*
    RESPONSE
    { "message": "구성원 삭제 완료" }
  */
};

// 구성원 수정
export const updateMembers = async (member_id, accessToken) => {
  if (useMock) {
  }

  const res = await axios.put(`${baseUrl}/family/members/${member_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
  /*
    REQUEST
    multipart/form-data - member_name, member_image, member_gender?, member_age?

    RESPONSE
    { "message": "구성원 정보 수정 완료", member_image_url  : “….” }
  */
};

