# ๐ HOW TO SOLVE Java compiler level and Java project facet mismatch

* Dao ์ฝ๋ ์์ฑ์ค 
```java
  public UserVo getUserByUserId(String userId) {
  	return users
  			.stream()
  			.filter(user -> user.getUserId().equals(userId))
  			.findAny()
  			.orElse(new UserVo(-1,"","",""))
  			;
  }
```

* ๋๋ค์์ ์ฐ๋ ค๊ณ  ํ์ง๋ง 1.8์ด์๋ถํฐ ์ฌ์ฉ๊ฐ๋ฅํด์ compiler level์ ๋์๋๋ ํจํค์ง์์๋ ์ค๋ฅ๊ฐ ์์ง๋ง ์ด๋ ํ ์ฝ๋์์๋ ์ค๋ฅ๊ฐ ๋จ์ง ์์์ `Problems`์ ํ์ธํด๋ณด๋

![Java compiler level does not match the version of the installed Java project facet](How-to-change-Java-compiler-version.assets/image-20220711195133012.png)

`Java compiler level does not match the version of the installed Java project facet`

์๋ฌ๊ฐ ๋ฐ์ โก๏ธ ๊ตฌ๊ธ๋งํด๋ณด๋ ์ปดํ์ผ๋ฌ ๋ ๋ฒจ์ ํ์ฌ ์๋ฐ ๋ฒ์ ผ๊ณผ ๋ง์ถฐ์ค์ผํ๋ ๊ฒ ๊ฐ์๋ค

![ํ์ฌ์๋ฐ11๋ฒ์ ](How-to-change-Java-compiler-version.assets/image-20220711200427358.png)

* ํด๊ฒฐ๋ฐฉ๋ฒ

![image-20220711200715838](How-to-change-Java-compiler-version.assets/image-20220711200715838.png)

1. ์์์ค์ธ ํ๋ก์ ํธ ์ฐํด๋ฆญ โก๏ธJava Compilerโก๏ธcompiler compliance levelโก๏ธApply๏ธ

![image-20220711200850943](How-to-change-Java-compiler-version.assets/image-20220711200850943.png)

2. Project Facets โก๏ธJava : 11โก๏ธApply and Close

* ํด๊ฒฐ~
* ๋ง์ฝ JRE์ ํ๊ฒฝ๋ณ์ ๋ฑ์ด 11๊ณผ ๋ง์ง ์์ ์ํฉ์ด๋ผ๋ฉด ์๋๊น์ง ์ฐธ๊ณ ํ  ๊ฒ
  * [์ฐธ๊ณ ](https://www.codejava.net/ides/eclipse/change-java-compiler-version-for-eclipse-project)