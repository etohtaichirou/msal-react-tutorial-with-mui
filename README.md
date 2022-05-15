# msal-react-tutorial-with-mui

## 概要

チュートリアル: 認証コード フローを使用して、ユーザーをサインインさせて React シングルページ アプリ (SPA) から Microsoft Graph API を呼び出す<https://docs.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react>
を MUI(<https://mui.com/>)を使用して書き換える。

## 環境

- OS: MacOS

## プロジェクトの作成

```sh
npx create-react-app msal-react-tutorial-with-mui
cd msal-react-tutorial-with-mui
npm install fsevents@latest
npm install @azure/msal-browser @azure/msal-react
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm audit fix
```
