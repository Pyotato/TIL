# 📋How to solve 'Not Recognized as an Internal or External Command' Error in Windows

- React공부 중 npx create-react-app filename 을 하려는 도중
- `'node'은(는) 내부 또는 외부 명령 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다. ` 에러 발생

- 구글링 결과 ➡️ node.exe의 환경변수 설정이 잘못됨

  - [참고1](https://bbeomgeun.tistory.com/37)

- 해결방안 ➡️ [시스템 환경 변수 편집] ➡️ [시스템 변수 편집(S)]에서 편집클릭 ➡️ `Path`에 node.exe가 설치된 파일의 경로를 복사 붙여놓기 확인하면 끝!

  - 😅TMI😅사소해서 적을까말까 고민하다가 `''은(는) 내부 또는 외부 명령 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다.`를 만나면 환경변수문제일 수 있다는 거를 기록하고자 적음
