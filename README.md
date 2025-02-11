<h1 align="left">MyPokeDex</h1>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/21375eb6-7f1e-43ef-8565-7e54781bdf2f"  />
</div>

###

<p align="left">나만의 포켓몬 파티를 고르자!!</p>

###

<h2 align="left">About Feature</h2>

###

<h3 align="left">🔍 기본 도감 화면</h3>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/fdaf079e-5c52-489b-98fc-b811049e182c"  />
</div>

###

<p align="left">1세대 포켓몬들을 확인할 수 있는 도감입니다.</p>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/6dcf9d81-21d5-4e24-a1fd-2ddb1d1f27cc"  />
</div>

###

<p align="left">마우스를 올려놨을 때, 타입을 미리 볼 수 있습니다!</p>

###

<h3 align="left">ℹ️ 상세 페이지</h3>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/e745f57a-ebc2-48ef-830a-b1de2d918ebe"  />
</div>

###

<p align="left">포켓몬의 상세 정보를 확인할 수 있는 페이지입니다!</p>

###

<h3 align="left">👯 파티 추가하기</h3>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/78fce38f-c332-49fc-b04f-761ee5a7f2d1"  />
</div>

###

<p align="left">포켓몬을 파티에 추가합니다!</p>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/248d2046-ea73-4da0-b9a8-4df44168a4be"  />
</div>

###

<p align="left">상세 페이지에서도 추가할 수 있습니다!</p>

###

<h3 align="left">🦅 파티 제외하기</h3>

###

<div align="center">
  <img height="300" src="https://github.com/user-attachments/assets/b24b94b1-e991-41cd-9db3-d1b869304037"  />
</div>

###

<p align="left">파티에서 포켓몬을 삭제할 수 있습니다!</p>

###

<p align="left">또한 상세 페이지에서도 파티에서 제외시킬 수 있습니다!</p>

###

<h2 align="left">📁 프로젝트 구조</h2>

###

```markdown
📦 MyPokeDex/
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│   ├── fonts/
│   │   └── pokemon-dppt.ttf
│   └── image/
│       ├── bug.svg
│       ├── dark.svg
│       ├── dragon.svg
│       ├── electric.svg
│       ├── fairy.svg
│       ├── fighting.svg
│       ├── fire.svg
│       ├── flying.svg
│       ├── ghost.svg
│       ├── grass.svg
│       ├── ground.svg
│       ├── ice.svg
│       ├── normal.svg
│       ├── poison.svg
│       ├── psychic.svg
│       ├── rock.svg
│       ├── steel.svg
│       └── water.svg
├── src/
│   ├── .DS_Store
│   ├── App.jsx
│   ├── GlobalStyle.js
│   ├── Router.jsx
│   ├── assets/
│   │   ├── .DS_Store
│   │   └── image/
│   │       ├── .DS_Store
│   │       ├── Dex/
│   │       │   └── PokemonBall.png
│   │       └── Home/
│   │           └── Pokemon.png
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── EmptyPokemon.jsx
│   │   ├── PokemonCard.jsx
│   │   ├── PokemonList.jsx
│   │   └── Type.jsx
│   ├── constants/
│   │   └── MOCK_DATA.js
│   ├── main.jsx
│   ├── pages/
│   │   ├── Details.jsx
│   │   ├── Dex.jsx
│   │   └── Home.jsx
│   └── redux/
│       ├── config/
│       │   └── configStore.jsx
│       └── slices/
│           ├── LineupSlice.jsx
│           └── PositionSlice.jsx
├── vite.config.js
└── yarn.lock

```

<h2 align="left">🚨 트러블 슈팅</h2>

###

#### [이벤트 버블링..?](https://velog.io/@changyon99/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%B2%84%EB%B8%94%EB%A7%81)</h4>

###

#### [오버 헤드..?](https://velog.io/@changyon99/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EC%98%A4%EB%B2%84%ED%97%A4%EB%93%9C)</h4>

###

#### [Vite에서의 이미지 렌더링..?](https://velog.io/@changyon99/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A0%8C%EB%8D%94%EB%A7%81)</h4>

###
