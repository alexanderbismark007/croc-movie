var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"master","loadChildren":"./pages/master/master.module#MasterPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/master/master-routing.module.ts","module":"MasterPageRoutingModule","children":[{"path":"","component":"MasterPage"}],"kind":"module"}],"module":"MasterPageModule"}]},{"path":"login","loadChildren":"./pages/login/login.module#LoginPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/login/login-routing.module.ts","module":"LoginPageRoutingModule","children":[{"path":"","component":"LoginPage"}],"kind":"module"}],"module":"LoginPageModule"}]},{"path":"maps","loadChildren":"./pages/maps/maps.module#MapsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/maps/maps-routing.module.ts","module":"MapsPageRoutingModule","children":[{"path":"","component":"MapsPage"}],"kind":"module"}],"module":"MapsPageModule"}]},{"path":"","redirectTo":"login","pathMatch":"full"}],"kind":"module"}]}