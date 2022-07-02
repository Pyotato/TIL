# HOW TO SOLVE jakarta.servlet error

### The superclass "jakarta.servlet.http.HttpServlet" was not found on the Java Build Path

- jsp 공부 중..

- 분명 [Classpath] ➡️ [Add External JARs..] ➡️ servlet-api.jar 선택 ➡️ apply 해줬는데도 jsp 파일에 에러 발생
  ![buildpath tomcat apache](How-to-buildpath-jakarta_servlet.assets/image-20220701122833646.png)

- `The superclass "jakarta.servlet.http.HttpServlet" was not found on the Java Build Path`

  ![image-20220701172738925](How-to-buildpath-jakarta_servlet.assets/image-20220701172738925.png)

- 구글링 결과

- [JSP 파일 생성 직후 에러(The superclass "javax.servlet.http.HttpServlet" was not found on the Java Build Path)](https://hongeui.tistory.com/13)

  - JSP 파일 생성 직후 생기는 에러

- [The superclass "jakarta.servlet.http.HttpServlet" was not found on the Java Build Path](https://upself.tistory.com/18)

  - 경로를 찾지 못해서 발생

### 해결

#### 1. 라이브러리 추가해주기

- 에러난 project 우클릭 ➡️ Build Path ➡️ Configure Build Path

![프로젝트_buildpath_configure_BuildPath](How-to-buildpath-jakarta_servlet.assets/image-20220701173817562.png)

- Java Build Path ➡️ Libraries ➡️ Modulepath ➡️ Add library ➡️ ServerRuntime ➡️ Next

![해결방법](How-to-buildpath-jakarta_servlet.assets/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202022-07-01%20173122.png)

- Apache Tomcat v9.0 (자신이 다운 받은 버젼) 클릭 ➡️ Finish ➡️ Apply and Close

![select Apache tomca&click finish](How-to-buildpath-jakarta_servlet.assets/image-20220701174203332.png)

#### 2. Project Facets 런타임에 아파치 추가해주기

- Project Facets ➡️ Runtimes > Apache Tomcat v9.0 (자신의 아파치 버전) ➡️ Apply and Close

![ProjectFacets>Runtimes>ApacheTomcatv9.0](How-to-buildpath-jakarta_servlet.assets/image-20220701174551219.png)

- 이렇게 해줘도 오류가 발생하는 경우가 간혹 있다고 했는데 위의 과정에 추가했던 거를 삭제하고 반복해도 오류가 난다면
- 단순히 이클립스가 인식을 안해줘서 그런거라서 잠깐 스페이스바를 눌러 주고 저장을 하면 해결!

![spacebar_after_<%@](How-to-buildpath-jakarta_servlet.assets/image-20220701175306540.png)
