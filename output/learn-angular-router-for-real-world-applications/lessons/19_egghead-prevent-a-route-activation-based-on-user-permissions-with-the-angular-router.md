Instructor: [00:00] Usually, in a real-world application, you might want to guard access to specific routes. Certain users might be able to enter, for instance, the context route, and other people might be able to enter the people route.

[00:12] Or even more differently, for instance, the home context routes are open routes, where you can access, even in anonymous mode. However, if you access, for instance, the people route you have to be logged in.

[00:24] In order to demonstrate how we can basically protect certain routes in Angular, I've implemented here a very, very simple Angular authentication system. We have here an authentication service, which works very simple.

[00:38] It has an isLoggedIn flag, which is by default false. It has a method which can be queried, whether the current user's logged in or not, and then we have a login and a logout method, which simply set that Boolean flag.

[00:50] Again, in a real-world application, you would probably have here a verification for a token. You would call the back end to see whether there is an active session, and so on. Moreover, as you can see here, we have that login and logout button here at the route component.

[01:05] If you go into the app component, here we can see that in the template, I am simply switching that on and off. When you click those buttons, then in the app component code here, I'm invoking the log in or log out of our authentication service.

[01:20] Great. Let's go to our app routing module. Let's assume we want to guard that access to that people module here. If we're doing so in Angular, we can use the canActivate property here on the route configuration.

[01:34] Let's go and implement such a guard. First of all, we need to create here a new class. Let's call that authenticationGuard.ts. This is actually a normal Angular service, so we need to inject the injectable, and create the class.

[01:50] Let's call it authGuard, and implement the so-called canActivate. Make sure that the import is correct. You can import that directly from the Angular router. We also need to import here the injectable, and then we can implement here the interface.

[02:06] Which is canActivate, which takes the route, which is an activated route snapshot, and then also the current state of the router. As the return value here, we have a Boolean. For now, let's return, just false. 

[02:22] Now having that route snapshot state here, we could actually again query that route configuration and for certain routes, based on its path, or some other properties, we could allow people to enter or not, into that current route.

[02:35] However, in our specific implementation, we want to query the authentications those which we have seen before. We can just inject that here, just as we do normally. We might also need an instance of the current router. Let's import it also from Angular router, and then we can start with the actual implementation.

[02:54] In our example here, this is quite simple. We can say this.authService.isLoggedIn. If the user is logged in, then return true, so he can actually enter that route. Otherwise, we don't want to let him enter. Therefore, what we do is we use the router and navigate directly again to the home route.

[03:15] We also return here, false, such that that route doesn't get activated. With that, our implementation should be concluded. All we have to do is register it actually also in the providers array. We can register here our authGuard.

[03:28] Finally, once we have registered it here on the providers array, we can also reference it here in the canActivate array. Now, if you click that context part, it works without any problems. If we take that people link, however, we get redirected to the home automatically.

[03:44] Now, let's log in. Let's try again, and now, you can see, we've passed basically that guard, and we enter successfully into the route. Most importantly, this also works when the user directly modifies the URL up here. If someone goes here and wants to enter that guarded route, it would refresh here, and you would automatically be redirected to home again.

[04:05] Also, note that if you have a route with children, for instance, if we would have a normal route, let's say up here, and you have low children, below here, where we have to find other routes as a sub-route of this about. 

[04:20] Then you may also want to take a look at the canActivate child function where you can pass into the same authGuard just that you don't only have canActivate, but also the canActivate child, which can have basically the same implementation, however.
