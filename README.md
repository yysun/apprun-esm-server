## AppRun and esm-server

Recently, the Snowpack team introduced the concept of [Unbundled Development](https://www.snowpack.dev/concepts/how-snowpack-works), which is to leverage modules for speeding up the development process. I then came up with an idea to build a static web server to help unbundled development, called [_esm-server_](https://github.com/yysun/esm-server).

This is an example [AppRun](https://github.com/yysun/apprun) app to show case [esm-server](https://github.com/yysun/esm-server), a static web server for developing JavaScript/TypeScript applications using ES modules.

* Use _npm run start_ to start typescript in watch mode
* Use _npx esm-server_ to start the esm-server

![](https://github.com/yysun/esm-server/blob/master/esm-server.gif)


You can fork this app to give it a try to feel how fast the unbundled development can be.

Have fun!
