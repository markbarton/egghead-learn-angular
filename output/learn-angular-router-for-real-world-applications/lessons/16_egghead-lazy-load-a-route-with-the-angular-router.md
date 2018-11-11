Instructor: [00:00] In this application, the routing is already configured, such that when I click here, you can see the URL updates. Also, the component down here gets rendered properly and updated. If we check the network panel and select here, the JavaScript files -- let's quickly refresh -- you can see the typical Angular files.

[00:19] We have the render files, the main, which contains our application. Here, it's actually quite small because it's just a demo application. Then the polyfills and the styles.

[00:28] Usually, when the application gets larger, that main file increases quite drastically. What you want to optimize for is to refresh the demo application. Whenever the user starts the application, it should actually start really, really fast, and then basically continue to load behind the scenes further modules as needed.

[00:47] This is what is called lazy loading. In this specific example, what we would like to do is that the people module should only get loaded once we click on it. Let's configure that. If you take a look at the structure of the application, that people module already resides inside a dedicated folder.

[01:04] We have the Angular module, which in turn, registers all the necessary components and services. It also registers the people routing module, which defines here the path for rendering the people routes. In turn, that people module is referenced here in that app module.

[01:23] With that, basically enter our application, gets to know about the routing of that people module. Obviously, we need to detach that completely. As a first step, let's simply remove here that people module. We should have no hard reference here in our app module.

[01:40] Of course, application will break in this way. You can already see here when we refresh, the route is no more known to the application, and in fact, our 404 component gets displayed when the people URL here gets displayed.

[01:52] The next step we have to now is to tell somehow the app module whenever that people part up there is being shown, it should lazy load behind the scenes that people module, with its routing, and then activate the according component.

[02:06] As a first step here, let's go to the routing module for the application. We need to actually tell the app routing module what should happen whenever that people is being displayed. Here we add that people, and then we cannot actually reference the people module, because then we would have another import of a JavaScript file, such as these components up here. Then again, it would be bundled into the main file.

[02:34] The router has a configuration which is called loadChildren, which allows us to specify a string. Here, we specify basically the relative path from that app routing here to that people module.

[02:47] We will say something like, that people, then the people.module, and the according class, which should be instantiated, which is the people module. This part is the export from that people module, which should be loaded. In Angular, the lazy loading unit is a module, so we cannot lazy load single components, but always just an entire module, which totally makes sense given how the modules are defined.

[03:14] With that, we have set up the lazy loading part here. Let's go to the people module. We have still to adjust here something the people routing, because now the app routing already specifies the first part of the path, the /people.

[03:29] In the lazy load, our people module here, together with its people routing, and therefore we have to adjust here the path such that here there is an empty string, which will then load the people list module, and then with the ID, the person detail component.

[03:44] Let's save. We can see that it gets already displayed here. Let's also check our Angular compiler here. If we restart here our Angular CLI, we already see that something changed. Now we get the main JS file to [inaudible] runtime, and so on, but we also get another JavaScript file, which is this people.people module JS.

[04:08] The Angular CLI automatically recognize that whenever here such low children with the strings being specified, it automatically creates a bundle just for those JavaScript files that belong to that module. Similarly, now let's refresh your application. Let's open a network panel.

[04:26] We see we get the runtime, polyfill, styles, and so on. Our main file, as you can see, has now decreased quite a lot. Instead of 40 kilobytes, it's now 26 kilobytes. If I click now that people link, we will see how the people module gets loaded, which contains the remaining bytes, basically, just for that people part of our application.
