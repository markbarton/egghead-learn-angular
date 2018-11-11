Instructor: [00:00] This Angular application has two lazy loaded routes, and both of them are being preloaded automatically at startup, by using that preload all modules strategy. This one is already built into Angular, so you can directly import it from the Angler router, and just reference it in the configuration of your route configuration, here.

[00:20] Now, in a larger application, however, you might want to control which files are being preloaded and which actually just get loaded once the user clicks that specific name. Luckily, we can totally customize the preloading strategy. Let's create here a new file, and let's call that custom root preloader.

[00:40] Here we create a normal class, and we implement the preloading strategy. We need to import a preloading strategy from the Angular router. We obviously now also need to implement the interface function of the preloading strategy, which in this case is called preload.

[00:57] Which takes us the first route, the current route, of the router, so I'll import that as well. Then a load function which allows us to basically determine whether to load or not load the current route. That here returns an observable. For now, that's simply return observable of type any, and also import that, as well.

[01:16] Now, you can imagine with that root object here, we can actually determine the current path and based on that, decide whether we call that load function to preload that specific route, or whether we delay it to when the user clicks it.

[01:29] Now, in my specific case what I would like to do is to actually apply some kind of flag on my route configuration, such that I can specify preload equals the true, and when that is set, it preloads that current route. We use that data property on our route, which allows us to statically define some configuration property.

[01:46] Let's implement this functionality. Basically, I am saying here when the route.data is defined and that route.data has a preload specified, then we invoke here that load function, which will then preload this specific route. We also return the value here, which is actually returning an observable.

[02:07] In the other case, we simply return an empty observable, which we can specify as follows. Let's also import here an according operator here from RxJS. Now obviously, the next step is to go to that app routing, and instead of using here the preload all modules, we import here our custom preloader.

[02:26] We also need to define our custom preloader here in the provider section. With that, we should actually be set up. Now, let's refresh here. Let's open up the dev tools. Let's go to the network panel. Let's go to the home, and refresh, so we don't have any lazy loaded route here selected.

[02:47] You can see now, nothing gets actually preloaded. That's actually because we specified that it should only be preloaded when that preloading is actually specified on the route configuration. 

[02:56] Now, we could go here into our app routing, and tell, for instance, that that people module should be preloaded while the context module should just stay there, and only be loaded when the user clicks on it.

[03:07] We use that data property, and we specify preload equals the true. Let's save again. Now, we can see that the people module gets preloaded, just as we assumed, and the context module in the other side only gets preloaded when I click on it.
