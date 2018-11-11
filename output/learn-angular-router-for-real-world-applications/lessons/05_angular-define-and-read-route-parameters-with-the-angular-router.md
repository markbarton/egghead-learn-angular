Instructor: [00:00] We have here a very simple route defined here in our people routing module. Whenever we point our browser's URL bar to this path here, we get the person detail component here visualized. What we would like to look at now, is how we can add variable parts to that route, which help us transport data in our URL.

[00:20] One way to do that is by using so-called router parameters. You can define them by starting with a call, and then by giving them some kind of name, like ID, or it's a person ID. In this example here, this could be basically from the whole list of people -- show me the person with that kind of ID.

[00:40] This is just the first step, basically to define that variable part. The next step is then to go into our person detail component and to actually read that information in order to display the person that matches that ID onto our component. The first step here is to get ahold of an instance of the activated route.

[00:59] Let's inject that here, and we need to import that from the Angular router here. Then within in our constructor here, or directly within our ngOnInit, we can then access this active route member variable here. We can then query the params part, which is an observable. We can subscribe to it.

[01:18] Inside here, we will get the object which contains actually our parameters. Let's quickly log that to our console. You can see now we get an object with person ID, which is the parameter we specified in our routing. Its according value in this case is path one, because we have specified this as our current URL.

[01:39] You could add here, 1234. As you can see now, we got a parameter here, correctly displayed in this object. As a result, we could simply go here -- into our detail components template -- and say, display person with ID, person ID. We can add this as a member variable here, person ID.

[02:03] Below here, we could say this.personId is equal to data. Let's add it here, personId. You can see it gets displayed properly in our template. As always, you can access this in different kind of manners. Like here, we directly subscribed to our parameters observable.

[02:19] However, if you know for sure that your component gets reloaded each time your route actually changes, you can also access the value via the snapshot. We could simply do something like this.personId equals thisActiveRoute.snapshot.params. Then here again, indicate the person ID, and that will work as well, just as we expect.

[02:41] We can say here, 222, and it would correctly refresh in our template.
