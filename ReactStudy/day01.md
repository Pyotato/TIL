# ๐Getting started with React

- [React](https://reactjs.org/)

## 1. ๋ฆฌ์กํธ๋?

- ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - ๋ผ์ด๋ธ๋ฌ๋ฆฌ? API? ํ๋ ์์ํฌ?
- ๋ฆฌ์กํธ DOM์ element๊ณผ ์์๋ค์ ์ด์ ์ ๊ฒ๊ณผ ๋น๊ตํด์ `ํ์ํ ๋ถ๋ถ๋ง` ์งํฅํ๋ ์ํ๋ก ์๋ฐ์ดํธํจ

---

## 2. ๋ฆฌ์กํธ ๊ด๋ จ ๊ฐ๋

- Components?

โ = ๊ตฌ์ฑ์์ โก๏ธ UI๋ฅผ ๋๋ฆฝ์ ์ด๊ณ  ์ฌ์ฌ์ฉํ ๊ฐ๋ณ์  ๋ถ๋ถ์ผ๋ก ๋๋ ์ฃผ๊ฒ ํจ

- Render?

- ๋ฐ๋ฒจ?

- ์นํฉ?

- JSX๋?

  - JSX = JavaScript XML

    - Extension to Javascript Syntax

    - Creates React "elements"

      - element= ๋ฆฌ์กํธ App์ ๊ฐ์ฅ ์์ ๊ฐ๋ณ์ ์ด์ง ์์ ๋จ์ ([immutable](https://en.wikipedia.org/wiki/Immutable_object))
        - immutable = ํ๋ฒ ์์ฑํ๋ฉด ์์์ด๋ ์์ฑ์ ๋ฐ๊ฟ์ค ์ ์์
        - ์๋ฐ์ดํธ ๋ฐฉ๋ฒ?
          - ์ element ๋ง๋ค๊ณ  `root.render()` ํด์ฃผ๊ธฐ (๋๋ถ๋ถ์ ๋ชจ๋  React app์์๋ ํ๋ฒ๋ง ํธ์ถํจ..)

    - ๋๋๋ง ์ ์ String์ผ๋ก ๋ชจ๋ ๋ฐ๋์ด์ Injection Attack([cross-site-scripting](https://en.wikipedia.org/wiki/Cross-site_scripting))์๋ฐฉ

    - React DOM์ ํต์์ ์ผ๋ก camelCase๋ก

    - How it looks like..๋ณ์์ธ๋ฐ? Html ํ๊ทธ?

    - ```jsx
      const element = <h1>Hello, world!</h1>;
      const food = "Pizza";
      const element2 = <h1>I love {food}!</h1>;
      ```

    - ์ฌ์ค { }์์๋ ์์ ์์์ ๊ฐ์ด ๋ณ์๋ฟ๋ง ์๋๋ผ ๋ค์ํ ๊ฒ(์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ์ ๋ง๋ ๊ฑฐ๋ผ๋ฉด)๋ค์ด ๋ค์ด๊ฐ ์ ์๋ค

      - Json

        ```jsx
        const menu = {
            menuName='Pizza',
            menuType='fastfood'
        };
        ```

      - function

        ```jsx
        function formatFood(menu) {
          return `${menu.MenuName} is my favourite ${menu.menuType}`;
        }
        ```

    - ์ฆ, JSX๋ฅผ ์กฐ๊ฑด๋ฌธ ๋ฐ๋ณต๋ฌธ, ๋ณ์์ ๋ฃ๊ฑฐ๋ ํจ์์ ๋ฆฌํด๊ฐ์ผ๋ก๋ ๋ฐ์ ์ ์๋ค

      ```jsx
      const element =(
      <h1>
          {formatFood(menu)!Yumm!}
      </h1>
      );
      ```

      - ```jsx
        function formatFood(menu) {
          return `${menu.menuName} is my favourite ${menu.menuType}`;
        }

        const menu = {
          menuName: "Pizza",
          menuType: "fastfood",
        };

        const element = <h1>{formatFood(menu)}! Yumm!</h1>;

        const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(formatFood(menu));	//Pizza is my favourite fastfood
        root.render(element); //Pizza is my favourite fastfood! Yumm!
        ```

  - ์์ฑ์ฃผ๊ธฐ
    - `" "` (String ๊ฐ)๋๋ `{ }`(ํํ์)๋ก ๊ฐ์ธ์ฃผ๊ธฐ (๋ฐ๋์ ๋ ์ค ํ๋๋ก๋ง)
      - `const element = <a href="http://example.com">link</a>;`
      - `const element = <img src={user.myImageUrl}/>;`

---

## 3. ๋ฆฌ์กํธ ํ๋ก์ ํธ ์์ฑํ๊ธฐ `CRA`

- `npx create-react-app ํ๋ก์ ํธ๋ช`
- ๋ฐ๋ฒจ, ์นํฉ์ ์ค์ ํ์ง ์์๋ ๊ธฐ๋ณธ ํจํค์ง์ ํฌํจ๋ผ์ ์ด
- ๋ฆฌ์กํธ ๊ณต๋ถ๋ฅผ ์์ํ ์์ฅ์ด๋ฏ๋ก ๊ธฐ๋ณธ setting์ ๊ดํด์ ์ ๋ฆฌํด๋ 

1. ๋ถํ์ํ ๊ฒ๋ค ๋ชจ๋ ์ ๊ฑฐํ๊ธฐ

![](day01.assets/image-20220703153530794-16569459085481.png)

2. public โก๏ธpublicโก๏ธ`favicon.ico` ์ `index.html`๋ง ๋จ๊ธฐ๊ณ  ๋ค ์ง์ฐ๊ธฐ

3. srcโก๏ธ`App.css`, `App.js`, `index.css`, `index.js`๋ง ๋จ๊ธฐ๊ณ  ์ง์๋ฒ๋ฆฌ๊ธฐ
4. App.js์์ ๋จ๊ฒจ๋ ๊ฒ

- `function App(){return":)"};`
- `export default App;`

![image-20220703155242444](day01.assets/image-20220703155242444-16569459085482.png)

![](day01.assets/image-20220703153613945-16569459085484.png)

5. index.js์์ ๋จ๊ฒจ๋ ๊ฒ

- ์ ์ ์ ๊ฑฐํด์ค reportWebVitals๊ด๋ จ๋ ๊ฑฐ ์ ๊ฑฐํ๊ธฐ

![image-20220703160024373](day01.assets/image-20220703160024373-16569459085483.png)

![image-20220703155616388](day01.assets/image-20220703155616388-16569459085485.png)

6. index.css์ App.css์๋ ์์ ๋ด์ฉ์ ๋ค ์ ๊ฑฐํ๊ธฐ

- npm i

  - node_modules๊ฐ ์๋ ์ํ๋ก ์ ๋ฌ ๋  ๊ฒ

  - git์ ์๋ ๊ฒ์ clone ๋ฐ์๋ ๋ง์ฐฌ๊ฐ์ง (๋๋ฌด ์ฉ๋์ด ํฌ๊ธฐ ๋๋ฌธ)

  - package.json
    - dependencies
      - ์ค์น ๋์ด ์ด์ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค์ ํค ๊ฐ
      - nodes_modules ํด๋์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค์ด ์ค์น๋์ด์๋๋ฐ ํด๋น ํด๋๋ ์ฉ๋์ด ์ปค์ ๊ณต์  X
      - `npm i` ๋๋ `npm install` ์ด๋ผ๋ ๋ช๋ น์ด๋ฅผ ์น๊ฒ ๋๋ฉด
        - package.json์ dependencies์ ๋ช์๋์ด ์๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค์ ์์์ ์ค์น
        - node_modules ํด๋๊ฐ ์์ฑ
    - ![image-20220703161618160](day01.assets/image-20220703161618160.png)
    - `"start"` = ์ฌ์ฉ์๊ฐ ๋ณด๋ ํ๋ฉด์ ๊ฐ๋ฐ์๊ฐ ํ์ธํ  ๋
    - `"build"` = ๋ฐฐํฌํด๋ ๋ง๋ค๊ธฐ ์ํด ์ฌ์ฉ
    - `"dev"`: " SET PORT=3001 && react-scripts start"์ถ๊ฐํด์ฃผ๊ธฐ
      - react์ ๊ธฐ๋ณธ ํฌํธ๋ 3000, ํฌํธ ์ถฉ๋์ ํผํ๊ธฐ ์ํด
    - ![image-20220703163917293](day01.assets/image-20220703163917293.png)
      - ๊ฐ๋ฐ์๊ฐ๋ณด๋ ํ๋ฉด์ ๊ฐ๋ฐ์๊ฐ ํ์ธํ๊ธฐ ์ํด dev ์ถ๊ฐ
      - ๋งฅ์ `SET` ๋์  `EXPORT`
      - ํฌํธ๋ฒํธ ๋ณ๊ฒฝ, ๊ฐ๋ฐ์ฉ start ์ถ๊ฐํด์ฃผ๊ธฐ
    - `"test"` = TDD ํ์คํธ ์ฃผ๋ ๊ฐ๋ฐ, ์ ๋ ํ์คํธ "jest"
    - `"eject"` = ์จ๊ฒจ์ง ํด๋ ํ์ธ (์นํฉ, ๋ฐ๋ฒจ ์ปค์คํ)
  - npm run dev
    - ๊ฐ๋ฐ์๊ฐ ๋ณด๋ ํ๋ฉด์ผ๋ก ๋ณด๊ธฐ ์ํ ํฐ๋ฏธ๋ ๋ช๋ น์ด
    - โผ๏ธ ๋ฐ๋์ ํด๋น ๊ฒฝ๋ก(ํ๋ก์ ํธ์ ๊ฒฝ๋ก)๋ก ๋ค์ด๊ฐ์ ํด์ผ ์๋ฌ ์๋จ

---

##
