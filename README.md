이 프로젝트는 `npx create-react-app 프로젝트명 --template typescript` 명령어로 생성된 **`React.js`** 프로젝트입니다.

## 시작하기

First, run the development server:

```bash
npm start
```

## 프로젝트 세팅

ESLint, Prettier 설치

```bash
# eslint plug-in 과 parser 설치(eslint 가 이미 설치된 상태라면, eslint 제외)
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Airbnb eslint 설치목록 확인
npm info "eslint-config-airbnb@latest" peerDependencies
# peerDependencies 목록
{
  eslint: '^7.32.0 || ^8.2.0',
  'eslint-plugin-import': '^2.25.3',
  'eslint-plugin-jsx-a11y': '^6.5.1',
  'eslint-plugin-react': '^7.28.0',
  'eslint-plugin-react-hooks': '^4.3.0'
}
# 위 목록 전부 설치
npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

# airbnb-config 설치 
npm install -D eslint-config-airbnb --legacy-peer-deps

# airbnb-config-typescript 설치
npm install -D eslint-config-airbnb-typescript

# Prettier 설치 및 eslint 규칙 충돌 해결
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

eslintrc 설정

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "no-nested-ternary": 0,
    "array-callback-return": 1,
    "react/function-component-definition": 0,
    "func-style": ["error", "expression"],
    "react/no-array-index-key": 1,
    "react/no-unstable-nested-components": 1,
    "react-hooks/exhaustive-deps": 1,
    "jsx-a11y/label-has-associated-control": 1
  }
}
```

prettierrc 설정

```json
{
  "parser": "typescript",
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "printWidth": 80,
  "useTabs": false,
  "tabWidth": 2,
  "bracketSpacing": true
}
```

## 프로젝트 수정 및 개발 진행 요령

개발 위치 및 사용 파일 생성 요령 

- 작업 폴더: `components, pages, router, const`
- `pages` 폴더 내부에 작업할 폴더 및 `index.tsx` 생성 (폴더 이름 소문자)
- `router` - `Router.tsx` 와 `const` - `ROUTES.ts` 파일에 경로 추가
- `components` 폴더에 컴포넌트 개발 (폴더 생성 - 파일 생성)
- 최초 생성한 `index.tsx` 에 연결

개발 참고사항

- 개발 시 component 파일과 style 파일을 분리
- style 작성 시 `컴포넌트.Style.ts` 로 명명
- 스타일 초기화는 `style - GlobalStyle`, 공통 스타일 컴포넌트는 `style - style`, 스타일 테마는 `style - theme` 을 수정
- `index.tsx` 작성 시 Wrapper 는 `BodyStyle` 혹은 `SingUpLayout` 사용 (기존 작성된 파일 참고)
- layout 컴포넌트 작성 시 파일은 `컴포넌트.layout.tsx` 로 명명
- 컴포넌트 개발 시 `props`의 `Type`은 `Props`라는 이름으로 해당 파일 내부 `import 문`과 `함수 선언문` 사이에 작성, 타입 확장이 필요한 경우 `interface` 사용 (기존 작성된 파일 참고)
- 추가적인 예외 `Type` 혹은 공통 `Type`은 `type`폴더에 작성 
