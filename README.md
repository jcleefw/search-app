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
- [x] reset form
- [x] make page responsive
- [x] create store, actions and reducers to handle states better
- [ ] write test for all components

## Trade Off

Due to time limitation time, below are a few things that have been trade off or partially implemented.

- the only accepted input for the search is `sydney`. The results is hard coded to only return results with the input.
- most cases it this app handles happy cases assuming that data has been serialized.
- Didn't have enough time to do the `Star ratings` function.
- Better handling for lazy loading of image
- Writing test SearchContainer, the sorting of list by for Price sort when comes to dealing with the hooks and state change
- Setup PropTypes for the React component
- SearchItem can be refactored to smaller components.
- Proper error handling with status code if server is not connected.
