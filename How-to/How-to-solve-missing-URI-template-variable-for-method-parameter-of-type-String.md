# ๐How-to-solve-missing-URI-template-variable-for-method-parameter-of-type-String

* RestAPI ๊ณต๋ถ์ค ์ด๋ธํ์ด์์ผ๋ก  GET/POST/PUT/DELETE ๊ณต๋ถ์ค
* postman์์ ์ด๋ฐ ์๋ฌ๊ฐ ๋ฐ์ํ๋ค

![image-20220711202224995](How-to-solve-missing-URI-template-variable-for-method-parameter-of-type-String.assets/image-20220711202224995.png)

* ๊ตฌ๊ธ๋ง ๊ฒฐ๊ณผ โก๏ธ ์ปจํธ๋กค๋ฌ์์ URI ํํ๋ฆฟ์ ํด๋นํ๋ ๋ณ์๋ช์ด๋ ํ์์ด ์๋ง์
  * [์ฐธ๊ณ 1](https://eugene-kim.tistory.com/98)

![image-20220711202600123](How-to-solve-missing-URI-template-variable-for-method-parameter-of-type-String.assets/image-20220711202600123.png)

* ํด๊ฒฐ๋ฐฉ์ โก๏ธ URI ํฌํ๋ฆฟ `"{๋ณ์}"`์ `@PathVariable ๋ณ์๋ช` ๋์ผํ๊ฒ ๋ง์ถฐ์ฃผ๊ธฐ
  * `"/{userid}"` โก๏ธ`"/{userId}"`๋ก ๋ณ๊ฒฝํด์คฌ๋๋ ๊ฐ๋จํ ํด๊ฒฐ!

