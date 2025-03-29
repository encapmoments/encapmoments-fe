### MVVM 구조

```
- models :  AJAX 요청, 백엔드 API 통신 관리
- viewmodels : 상태 관리(`useState` 등) 및 비즈니스 로직 처리
- screens : 깡통 UI (View)
```

### common 사용법

```
공통 UI 컴포넌트(예: PrimaryButton, InputField 등)를 작성해 재사용
텍스트, 동작 등만 props로 받아서 사용하면 됨
```

### styles 사용법

```
colors, spacing, typography 등 스타일 상수를 변수로 정의
```
