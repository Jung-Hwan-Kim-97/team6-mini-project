# TEAM6-MINI-PROJECT

## 기간

2022.08.24 ~ 2022.09.06

## 팀 구성

- 김정환
- 원윤희
- 이주상
- 최준석
- 홍서영

## 🛠 사용기술

<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white"/>
<img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/react-icons-E91E63?style=flat&logo=React&logoColor=white"/>

## Commit Convention

> - `docs` : 문서 작업 (README.md)
> - `feat` : 새로운 기능 구현
>   - 최소 단위
> - `conf` : 설정 파일 관련
>   - 패키지, 라이브러리 추가
> - `asset` : 이미지 소스 추가
> - `design` : css 작업
> - `rename` : 파일 명 | 디렉토리 변경
> - `remove` : 파일 삭제
> - `chore` :  주석 변경/삭제😎
>
>  ---
>
> - `refactor` : 코드 리팩토링 (성능, 가독성)
>   - 의미나 동작에 영향을 주지 않는 상태에서 가독성, 재사용성 또는 구조를 개선하기 위해 현재 코드를 재작성하는 것
> - `fix` : 버그를 고친 경우
> - `hotfix` : 치명적인 버그 수정
>   - 의논 후 담당 1명을 정해서 처리
>   - 의도치 않은 에러 수정
> - `!BreakingChange` : 커다란 API의 변경
> - `test` : 테스트 관련

## 학습 키워드
- 스타일드 컴포넌트
- 리덕스 툴킷
- 라우터
- 파일 분리
- 컴포넌트 나누기
- 조건부 랜더링
- useCallback, useEffect 사용
- 데이터 가공 후 랜더링
- 깃 이슈를 활용한 협업

## 배포

Netlify: [Netlify 배포페이지](https://idyllic-pothos-a052f5.netlify.app)

## 작업 내용

### 로그인
- 정규표현식 및 커스텀이 적용된 유효성 검사
	- 이메일
   	- 비밀번호
   	- 비밀번호 확인
   	- 나이
   	- 전화번호
- 로그인 시 redux-store 및 localStorage에 유저 정보 저장
- 로그아웃 시 redux-store 및 localStorage에 유저 정보 삭제

### 회원가입
- 정규표현식이 적용된 유효성 검사
	- 이메일
   	- 비밀번호

### 메인 페이지(Home)
- swiper.js를 이용해 슬라이드 기능 구현
- 상품 선택 시 상세 페이지로 이동
- Nav바(주요 서비스)에 기능 연결(제품 목록, 구매 목록, 관심상품, 장바구니)
(소비자 보호, 상담/예약 기능은 미구현으로 서비스 준비 알림 출력)
- 상품 목록 랜더링

### 관심 상품
- 관심 상품 버튼 컴포넌트(FavoriteButton component)를 사용해 전역으로 관심 상품 추가/삭제 기능 가능
- 관심 상품에 추가된 상품을 나타내는 정보(버튼 색상) 유지
- 관심 상품 추가 시 redux-store 및 localStorage에 저장
- 관심 상품 삭제 시 redux-store 및 localStorage에 삭제

## 회고 / 간단 정리

### 원윤희
- 깃 이슈, 커밋 내역, 코드 정리, 변수 명 등 협동에 중요한 부분을 중점으로 신경쓰면서 작업 시도
- 스타일드 컴포넌트를 사용해 컴포넌트를 조금 더 세분화하고 효율적으로 사용하는 방법에 대해 고민
- 컴포넌트 관계/구조의 중요성 체감
- 부족한 데이터를 추가로 만들어 사용하면서 작업해야했던 부분이 아쉽다
- css/레이아웃의 중요성

### 최준석
- 협업을 하면서 배우고 느낀점이 많았다.
- api가 완성되지 않아 연결하지 못한 부분이 아쉽다.