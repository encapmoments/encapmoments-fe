import useMock from './useMock';
import axios from 'axios';

// mock data
const mockAlbums = [
    {
      album_image: 'https://example.com/album1.png',
      album_tag: '가족 시간',
      album_title: '놀이공원에서의 하루',
      location: '에버랜드',
    },
    {
      album_image: 'https://example.com/album2.png',
      album_tag: '일상',
      album_title: '물 마시기 미션 성공!',
      location: '우리 집',
    },
    {
      album_image: 'https://example.com/album3.png',
      album_tag: '주말 미션',
      album_title: '산책하며 대화하기',
      location: '한강공원',
    },
];

// 모든 앨범 조회
export const getAlbumsAPI = async (accessToken) => {
if (useMock) {
    return mockAlbums;
}

const res = await axios.get('https://api.encapmoments.com/album', {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
});

return res.data;
};

// 앨범 추가 API
export const newAlbumAPI = async ({ album_title, album_tag, album_image, location }, accessToken) => {
if (useMock) {
    const newAlbum = { album_title, album_tag, album_image, location };
    mockAlbums.push(newAlbum);

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
