# Poementor
a “M.E.A.N.-stack” (Mongo, Express, Angular, Node) application for aspiring poets and lyricists that streamlines composing, editing, annotating, storing, and sharing all sorts of verse — as well as providing dynamic templating, modeling, and tutorial functionalities that conveniently aid writers in more easily conforming to various traditional poetical forms, metrical prosody structures, rhyme-schemes, etc.

---
### Prerequisites:
* install [NodeJs](https://nodejs.org/)
* install Bower `npm install -g bower`
* `npm i -g bower yo` — [Yeoman](http://yeoman.io)
* `npm install -g generator-angular-blueprint`
* `yo angular-blueprint`

---
## developer commands:

#### run development server:
* `npm start`

#### run unit tests:
* `npm test`

#### build a release version for deployment
* `npm run build`
* `npm run build-full` (with tests and docs)

#### build documentation:
* `npm run docs`
* Using the [JSDoc](http://usejsdoc.org/) style of comments, one can generate documentation with the above command. Documentation can be found under `docs/client/`

---
## command-line customizations:
```
yo angular-blueprint:blueprint
[?] Which blueprint would you like to create?
1)  controller
2)  controller-spec
3)  view
4)  style
5)  service
6)  service-spec
7)  factory
8)  factory-spec
9)  directive
10) directive-html
11) directive-html-spec
12) directive-spec
13) route
```

produces:

```
blueprints/templates/controller/template.js
```

The following template values are passed to each template:

```
<%= appName %> // myApp
<%= classedName %> // ClassedName
<%= cameledName %> // cameledName,
<%= dashedName %> // dashed-name
<%= humanName %> // human name
<%= type %> // {controller|factory|service|directive}
```

### ROUTE:
* generates a new route and all of its components

example:

```
yo angular-blueprint:route home
[?] Where should I generate "home"? (./client/app/views/home)
```

produces:

```
client/app/views/home/home.controller.js
client/app/views/home/home.controller.spec.js
client/app/views/home/home.route.js
client/app/views/home/home.view.html
client/app/views/home/home.view.scss
```

### CONTROLLER:
* generates a new controller

example:

```
yo angular-blueprint:controller home
[?] Where should I generate "home"? (./client/app/views/home)
```

produces:

```
client/app/views/home/home.controller.js
client/app/views/home/home.controller.spec.js
```

### FACTORY:
* generates a new Angular Factory

example:

```
yo angular-blueprint:factory user
[?] Where should I generate "user"? (./client/app/services/user)
```

produces:

```
client/app/services/user/user.factory.js
client/app/services/user/user.factory.spec.js
```

### DIRECTIVE:
* generates a new Angular Directive

example:

```
yo angular-blueprint:directive nav
[?] Where should I generate "nav"? (./client/app/components/nav)
```

produces:

```
client/app/components/nav/nav.directive.js
client/app/components/nav/nav.directive.spec.js
```

### DIRECTIVE-html:
* generates a new Angular Directive with an external template

example:

```
yo angular-blueprint:directive-html nav
[?] Where should I generate "nav"? (./client/app/components/nav)
```

produces:

```
client/app/components/nav/nav.directive.js
client/app/components/nav/nav.directive.html
client/app/components/nav/nav.directive.scss
client/app/components/nav/nav.directive.spec.js
```

### SERVICE:
* generates a new Angular Service

example:

```
yo angular-blueprint:service user
[?] Where should I generate "user"? (./client/app/services/user)
```

produces:

```
client/app/services/user/user.service.js
client/app/services/user/user.service.spec.js
```

### FILTER:
* generates a new Angular Filter

example:

```
yo angular-blueprint:filter reverse
[?] Where should I generate "reverse"? (./client/app/filters/reverse)
```

produces:

```
client/app/filters/reverse/user.filter.js
client/app/filters/reverse/user.filter.spec.js
```

### VIEW:
* generates a new Angular View

example:

```
yo angular-blueprint:view about
[?] Where should I generate "about"? (./client/app/views/about)
```

produces:

```
client/app/views/about/user.view.html
client/app/views/about/user.view.scss
```

---
## API proxying:
* [`grunt-connect-proxy`](https://github.com/drewzboto/grunt-connect-proxy) to hit outside APIs for development

switch for proxying APIs
* to turn it on set `appConfig.proxy = true`

example:

```JS
var appConfig = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist',
  proxy: false, // <-- HERE
  proxyConfig: [{
    context: '/api',
    host: 'api.github.com',
    port: 443,
    https: true,
    changeOrigin: true,
    rewrite: {
      '^/api': ''
    }
  }]
};
```
