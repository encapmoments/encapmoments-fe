import { useState, useEffect } from 'react';
import { getAlbums, newAlbum } from '../models/album';

// 모든 앨범 조회
export const useGetAlbum = (accessToken) => {
    const [ albums, setAlbums ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const albumList = await getAlbums(accessToken);
                setAlbums(albumList);
            } catch (error) {
                console.error('앨범 가져오기 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();

    }, [accessToken]);

    return { albums, loading };
};

// 앨범 추가
