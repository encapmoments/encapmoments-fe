import useMock from './useMock';
import axios from 'axios';
import { useAlbumStore } from '../store/store';

// 모든 앨범 조회
export const getAlbums = async (accessToken) => {
if (useMock) {
  return useAlbumStore.getState().albums;
}

const res = await axios.get('https://api.encapmoments.com/album', {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
});

return res.data;
};

// 앨범 추가 (=미션 수행)
export const postAlbum = async ({ album_title, album_tag, album_image, location }, accessToken) => {
if (useMock) {
    const newAlbum = { album_title, album_tag, album_image, location };
    useAlbumStore.getState().addAlbum(newAlbum);

    return {
    success: true,
    album: newAlbum,
    };
}

const res = await axios.post('https://api.encapmoments.com/album',
    { album_title, album_tag, album_image, location },
    {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
    }
);

return res.data;
};

// 앨범 상세 조회
