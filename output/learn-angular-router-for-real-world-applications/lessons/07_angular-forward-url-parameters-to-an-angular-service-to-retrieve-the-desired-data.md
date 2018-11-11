Instructor: [00:00] As you can see here, in this people routing module, I have a path defined which has some styling part in front, so people/ and then some variable part where the ID is inserted.

[00:12] In my person detail component that gets activated whenever that people route is being hit, I have imported the activated route, and then we use here the params observable to subscribe to it, and to fetch out the person ID.

[00:24] In fact, if I open here the developer tools, you can see that the ID is being logged out, the one which we have here in URL bar. In this example here, I have also defined some people service, which has a method getPersonById.

[00:37] For the purpose of this example here, it directly returns an observable and filters here a static array based on the ID that's getting passed to that service method. Now, obviously, in a real-world example, this would be an HTTP call, where you forward that person ID to the server, and get the result back.

[00:53] What we want to do now is in that person detail component, we want to get here an instance of that service. Then below here, we want to filter it. We want to say this.peopleService.fetchPersonById. We get here already a person by ID, so let's store that in a variable.

[01:17] This is a string, and so we need to convert it into an integer. We can just do something like that, person ID. Now here, we'll get back to person. Note, this is an observable, therefore we need to subscribe.

[01:32] We want to display the person somewhere on our template. Let's simply do this.person equals person, and we need to have here a variable. Let's just print it out here below. When I do something like that, you can see we get back that person.

[01:56] Let's also adjust that people service to not use the filter here, maybe to use something like defined, so we really get back a single person here. So far, that works.

[02:07] However, you can see we've got a lot of nesting here. We have here a subscription to that params observable, we have that child ID there, and then we subscribe again to that person service here, and to get out that person detail from there.

[02:20] Since both of them are observables, we can actually leverage the observable operators. Let's rewrite this example a bit. First, we keep the actuator route params subscription. Then, instead of subscribing, let's use the pipe here from RxJS, and then use the switchMap operator.

[02:40] In the switchMap here, we would get the params as an input. We can directly here forward that to our people service, this.peopleService.getPersonById. Now, we map over the params, person ID directly into that call. Let's also import here the switchMap from RxJS.

[03:08] What switchMap actually does is it takes in an observable -- in this case here, we get the result of the subscription to the first observable, which is here our route params -- and we forward that to the people service, which in turn gives us another observable.

[03:23] Down here in the subscribe, we finally get the result of that people service observable. In that case, the person. We also need here to remove the semicolon, of course. Then again we can assign here the person which we just got.

[03:39] You can see the example still works, but our code example got much nicer and easier to understand. We get here the params, we pipe it through into another observable, and the result of that observable then gets down here into the subscription. We could even here add further operators which then filter based on the observable returned here from our people service.
