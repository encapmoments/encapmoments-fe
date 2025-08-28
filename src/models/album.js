import useMock from "./useMock";
import axios from "axios";
import { useAlbumStore } from "../store/store";
import baseUrl from "./baseUrl";

// 모든 앨범 조회
export const getAlbums = async accessToken => {
  if (useMock) {
    return useAlbumStore.getState().albums;
  }

  const res = await axios.get(`${baseUrl}/album`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 앨범 추가 (=미션 수행)
export const postAlbum = async (
  { album_title, album_tag, album_image, location, mission_type, mission_id },
  accessToken,
) => {
  // TODO : mission_type 제공
  if (useMock) {
    const newAlbum = { album_title, album_tag, album_image, location };
    useAlbumStore.getState().addAlbum(newAlbum);

    return {
      success: true,
      album: newAlbum,
    };
  }

  const res = await axios.post(
    `${baseUrl}/album/generate`,
    {
      album_title,
      album_tag,
      album_image,
      location,
      mission_type,
      mission_id,
    },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    },
  );

  return { success: true, ...res.data };
};

// 앨범 검색
export const searchAlbums = async (keyword, accessToken) => {
  const res = await axios.get(`${baseUrl}/album/search`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: { keyword },
    withCredentials: true,
  });

  return res.data;
};

// 앨범 수정
export const updateAlbum = async (
  { album_id, album_title, album_tag, album_image, location },
  accessToken,
) => {
  try {
    const res = await axios.patch(
      `${baseUrl}/album/${album_id}`,
      {
        album_title,
        album_tag,
        album_image,
        location,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      },
    );

    return { success: true, ...res.data };
  } catch (err) {
    console.error("앨범 생성 실패:", err.response?.data || err.message);
    return {
      success: false,
      message: err.response?.data?.message || "서버 오류",
    };
  }
};

// 앨범 삭제
export const deleteAlbum = async ({ album_id }, accessToken) => {
  const res = await axios.delete(`${baseUrl}/album/${album_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
};

// 댓글 조회
export const getComments = async ({ album_id }, accessToken) => {
  const res = await axios.get(`${baseUrl}/album-comment/${album_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
  /*
    RESPONSE
    [
      {
      "comment_id":1,
      "member_name":"여자",
      "member_image":”xxx.jpg",
      "comment_text":"좋았어요!"
      },
      {
      "comment_id":2,
      "member_name":"여자",
      "member_image":”xxx.jpg",
      "comment_text":"좋았어요!"
      },
      ...
    ] ,
  */
};

// 댓글 작성
export const createComment = async ({ album_id }, accessToken) => {
  const res = await axios.post(`${baseUrl}/album-comment/${album_id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  });

  return res.data;
  /*
    REQUEST
    {
      "album_id": 1,
      "member_name": "아들",
      "comment_text": "재미있어요!"
    }

    RESPONSE
    { "message": "댓글 등록 성공" }
  */
};

// 댓글 수정, 삭제 => 일단 X


