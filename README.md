# Build Setup

> You'll need to run both **frontend** and **websockets** server.

``` bash
# Clone the repository
$ git clone https://github.com/ignaciocasales/WASD-Site

# Go into project folder
$ cd /YOUR_PATH/WASD-Site

```
## How to run the frontend with _Quasar-cli_?

``` bash
# Go to frontend source folder
$ cd src/front/wasd

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev 

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

## How to run the frontend with _NPM_?

``` bash
# Go to frontend source folder
$ cd src/front/wasd

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev 

# build for production with minification
$ npm run build

# lint code
$ npm run lint
```

## How to run the websockets server with _NPM_?

``` bash
# Go to websockets source folder
$ cd src/websockets

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run start
```

## Add an api key to connect to IGDB

> If you do not do this you wont be able to fetch any content.

- Go to `\WASD-Site\src\front\wasd\src\api\igdb.js`

- Add the API Key in the const `API_KEY`
