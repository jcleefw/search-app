## How to run app

1. Install all needed packages
   `yarn add` or `npm install`

1. Run Server pp
   `yarn express` or `npm express`

Server app will be running at http:localhost:5000

1. Run client app
   `yarn start` or `npm start`

Client app will be running at http:localhost:3000

## How to run test

`yarn test`

## TODO Stories

- [x] create express server
- [x] split fetch into a utils/api and write test for it
- [x] create basic container with conditional render of pages(Form, search result & Error Page)
- [x] display all details required in search item
- [ ] sorting function
- [ ] star ratings
- [x] proper styling

## Trade Off
- lazy loading of image
- ways to reset form without having to refresh
- responsive page
- writing test SearchContainer and the react hooks
