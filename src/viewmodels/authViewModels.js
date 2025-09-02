import { useState } from "react";
import { login, logout, register, uploadImage } from "../models/auth";
import { useAuthStore, useUserStore, useAuthTempStore } from "../store/store";

// export const useLogin = () => {
//   const [loading, setLoading] = useState(false);
//   const setAccessToken = useAuthStore((state) => state.setAccessToken);
//   const setUser = useUserStore((state) => state.setUser);

//   const handleLogin = async (email, password, onSuccess, onError) => {
//     setLoading(true);
//     try {
//       const res = await login(email, password);
//       if (res.success) {
//         setAccessToken(res.accessToken);
//         setUser(res.user);
//         onSuccess?.();
//       } else {
//         onError?.(res.message || '로그인 실패');
//       }
//     } catch (err) {
//       onError?.('서버 오류');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { handleLogin, loading };
// };

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const setUser = useUserStore(state => state.setUser);

  const handleLogin = async (email, password, onSuccess, onError) => {
    setLoading(true);
    try {
      const res = await login(email, password);
      if (res.success) {
        setAccessToken(res.accessToken);
        setUser(res.user);
        onSuccess?.();
      } else {
        onError?.(res.message || "로그인 실패");
      }
    } catch (err) {
      console.error("[로그인 에러]", err?.response?.data || err.message, err); // ✅ 추가
      onError?.("서버 오류");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const profileImageUrl = useAuthTempStore(state => state.profileImageUrl);

  const handleRegister = async (
    nickname,
    email,
    password,
    onSuccess,
    onError,
  ) => {
    setLoading(true);
    try {
      const res = await register(email, password, nickname, profileImageUrl);
      if (res.success) {
        onSuccess?.();
      } else {
        onError?.(res.message || "회원가입 실패");
      }
    } catch (err) {
      onError?.("서버 오류");
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading };
};

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const resetAccessToken = useAuthStore(state => state.resetAccessToken);
  const resetUser = useUserStore(state => state.resetUser);

  const handleLogout = async (onSuccess, onError) => {
    setLoading(true);

    resetAccessToken();
    resetUser();

    setTimeout(() => {
      setLoading(false);
      onSuccess?.();
    }, 300);
  };

  return { handleLogout, loading };
};

export const useUploadProfileImage = () => {
  const [uploading, setUploading] = useState(false);
  const setProfileImageUrl = useAuthTempStore(
    state => state.setProfileImageUrl,
  );

  const handleUpload = async (imageUri, onSuccess, onError) => {
    setUploading(true);
    try {
      const res = await uploadImage(imageUri);
      setProfileImageUrl(res.profile_image_url);
      onSuccess?.();
    } catch (err) {
      onError?.("이미지 업로드 실패");
    } finally {
      setUploading(false);
    }
  };

  return { handleUpload, uploading };
};
