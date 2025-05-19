import { useState, useEffect } from 'react';
import { getAlbums, searchAlbums } from '../models/album';

// 모든 앨범 조회
export const useGetAlbum = (accessToken) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // accessToken 없으면 요청 보내지 않음
        if (!accessToken) {
            setLoading(false);
            return;
        }

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

// 앨범 검색
export const useSearchAlbum = (keyword, accessToken) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!accessToken || keyword === '') {
      setLoading(false);
      return;
    }

    const fetchSearchedAlbums = async () => {
      try {
        const results = await searchAlbums(keyword, accessToken);
        setAlbums(results);
      } catch (error) {
        console.error('앨범 검색 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchedAlbums();
  }, [keyword, accessToken]);

  return { albums, loading };
};
