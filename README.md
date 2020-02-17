## How to run app

1. Install all needed packages
   `yarn add` or `npm install`

1. Run Server pp
   `yarn express` or `npm express`

Server app will be running at http:localhost:5000

1. Run client app
   `yarn start` or `npm start`

Client app will be running at http:localhost:3000

1. Type `sydney` in the input and see the search results show.

## How to run test

`yarn test`

## TODO Stories

- [x] create express server
- [x] split fetch into a utils/api and write test for it
- [x] create basic container with conditional render of pages(Form, search result & Error Page)
- [x] display all details required in search item
- [x] sorting function
- [ ] Star ratings
- [x] proper styling
- [ ] reset form


## Trade Off
Due to time limitation time, below are a few things that have been trade off or partially implemented.

- star ratings 
- lazy loading of image
- ways to reset form without having to refresh
- responsive page
- Writing test SearchContainer, the sorting of list by or Price sort
- some refactoring on SearchItem 
- proper error handling with status code if server is not connected.
