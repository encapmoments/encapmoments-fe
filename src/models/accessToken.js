import useMock from "./useMock";
import { useAuthStore } from "../store/store";

// 커스텀 훅 내부 또는 컴포넌트 내부
const useAccessToken = () => {
  const accessToken = useAuthStore(state => state.accessToken);
  return useMock ? "mock-access-token" : accessToken;
};

export default useAccessToken;
