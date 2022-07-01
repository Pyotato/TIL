# 자바 Unable To launch 오류 🤖‼️

리포지터리를 클론한 후 이클립스를 실핼하려는 도중

![자바 오류 이미지](C:\TIL\How-to\How_to_solve_UnableToLaunch_Java.assets\image-20220611003844481.png)

`The selection cannot be launched, and there are no recent launches.`

오류 발생.

[해결방안 링크 1](https://mozi.tistory.com/554)

발생 원인: 실행모드가 저장 되지 않아서라고 함

해결 방안: Windows ▶️ Preferences ▶️ Run/Debug ▶️ Launching
▶️ Launch Operation ▶️ Launch the aselected resource or active editor if not launchable

✅ Launch the associated project
🟩 Lanch the previouly launched application

▶️ Apply and Close

`🟩 Launch the previouly launched application`
: 이전 프로그램 실행하겠다

끝! Run 해보니 해결된 거 확인 가능!

---

IF encounter similar issues..

AND 경로 설정 문제 의심

[해결방안 링크 2](https://it-learn.tistory.com/16)

참고해보기

---

🥕 tmi..처음 만나 보는 오류야 반갑다

🥑 클론한 프로젝트 저장 경로 유의하자

🥔 .classpath & .project 있는 하위 폴더 열어야 실행가능
