# HB Indie Lab · Game Archive

AI로 만든 게임을 모으는 한밭대 게임 아카이브.

## 구조
```
site/   → https://hb-indie-lab.pages.dev       (목록 + iframe 플레이)
games/  → https://hb-indie-lab-play.pages.dev  (게임 샌드박스, 사이트와 다른 출처)
```
게임은 반드시 `games/`에서 다른 출처로 실행한다. 사이트 쿠키·DOM 접근을 막기 위해서다.

## 배포
Cloudflare Pages 프로젝트 2개가 이 저장소에 연결되어 있다. `main`에 push하면 자동 배포된다.

| Pages 프로젝트 | Root directory | Build command |
|---|---|---|
| hb-indie-lab | `site` | (없음) |
| hb-indie-lab-play | `games` | (없음) |

## 게임 추가하기
1. `games/<game-id>/index.html` 폴더 추가 (`game-id`는 영문 소문자, 숫자, 하이픈만)
2. `site/games.json`에 항목 추가
3. push → 사이트에서 플레이 확인

## 계정 정보 (비밀번호·백업 코드는 여기 적지 않는다)
- 동아리 메일: hb.indie.lab@gmail.com
- GitHub: Organization `hb-indie-lab` (Owner: 운영진 개인 계정)
- Cloudflare: 동아리 메일로 가입
- 현재 복구 수단 담당: 운영진 대표 (인수인계 시 다음 담당자로 변경)
