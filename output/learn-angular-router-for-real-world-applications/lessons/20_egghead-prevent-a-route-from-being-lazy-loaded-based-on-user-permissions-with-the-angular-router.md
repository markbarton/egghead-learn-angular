Instructor: [00:00] Here, I'm having routing configuration where we have a people module, and that people module uses canActivate property here and uses the implementation by this authGuard, such that the users which are not logged in won't be able to enter that route.

[00:17] If the person clicks that people route, it will not be able to enter and it will be redirected automatically to home, in case the person does something like this by specifying the people route in the URL.

[00:29] Now if you pay a close attention, let's also refresh this again. This people route is actually a lazy loaded route. What happens is that, when I'm not logged in here, as it is currently the case, and I click that people route, you can see that the JavaScript file gets loaded over the wire, but we're not able to actually load the people module, because we are not logged in.

[00:50] The point is that, in this case, it's totally useless to load that people module. Angular for that purposes has also something that is called canLoad, which takes the same syntax, so we can directly reuse that authGuard which I've specified.

[01:06] The only thing we have to do is to also implement here to canLoad interface, which we again import from angular router. Let's also implement actual interface function, which returns here again a Boolean. Let's use that Boolean here.

[01:23] We get again a route configuration and URL segment in this case. For our specific implementation here, we won't need any of those. We will actually use the same implementation. For that purpose, let's extract that into known function, and again here we copy this over.

[01:44] In this way, we can now reference the function from both or canActivate, and also on our canLoad function. Now, let's save both of these files. Now if I click that people module, nothing actually happens.

[02:00] Also, the file doesn't get lazy loaded over the wire. Now, let's log into counter check. If I click now, it gets lazy loaded and our module gets properly visualized.
