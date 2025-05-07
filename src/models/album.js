import useMock from './useMock';
import axios from 'axios';

// mock data
const mockAlbums = [
    {
      album_image: require('../assets/mock/album/album1.jpg'),
      album_tag: '가족 시간',
      album_title: '놀이공원에서의 하루',
      location: '에버랜드',
    },
    {
      album_image: require('../assets/mock/album/album2.jpg'),
      album_tag: '일상',
      album_title: '물 마시기 미션 성공!',
      location: '우리 집',
    },
    {
      album_image: require('../assets/mock/album/album3.png'),
      album_tag: '갱갱',
      album_title: '산책하며 대화하기',
      location: '한강공원',
    },
    {
      album_image: require('../assets/mock/album/album4.jpg'),
      album_tag: '강강',
      album_title: '발발',
      location: '말말',
    },
    {
      album_image: require('../assets/mock/album/album5.jpg'),
      album_tag: '공공',
      album_title: '볼볼',
      location: '몰몰',
    },
    {
      album_image: require('../assets/mock/album/album6.jpg'),
      album_tag: '궁궁',
      album_title: '불불',
      location: '물물',
    },
    {
      album_image: require('../assets/mock/album/album7.jpg'),
      album_tag: '깅깅',
      album_title: '빌빌',
      location: '밀밀',
    },
];

// 모든 앨범 조회
export const getAlbums = async (accessToken) => {
if (useMock) {
    return mockAlbums;
}

const res = await axios.get('https://api.encapmoments.com/album', {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
});

return res.data;
};

// 앨범 추가 => 멤버에 대해 이상. 아직 X
export const newAlbum = async ({ album_title, album_tag, album_image, location }, accessToken) => {
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
