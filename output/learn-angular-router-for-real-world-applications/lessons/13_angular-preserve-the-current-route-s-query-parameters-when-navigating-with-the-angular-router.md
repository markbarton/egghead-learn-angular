Instructor: [00:00] In this example here, we have this list of people, which allows us to navigate to the detail page, and back again to that list. Assume we have some global token here, or some query parameter, for instance, 123.

[00:12] What we would like to have is that whenever I click that detail page, we carry along that token along when we navigate from one step to another. Right now, if you pay attention to the URL, whenever I click to that detail page, that URL gets completely replaced, and our token gets lost.

[00:26] Let's see how we can change that behavior. If you take a look at this template here, which generates this list of people, we use here the router link and pass on simply the ID of the person which we would like to see. Interestingly here, we have another parameter, which is called queryParams, which allows us here to add a token.

[00:45] For instance, we could say ABC here. If we try that out, whenever we click somewhere, we see that the token gets added to our URL here, and we get token = ABC. We want something different, however. We want to take an existing queryParam and carry that onto the next page.

[01:05] What we could do is, first of all, grab an instance here off that activated route, which we got [inaudible] out of dependency injection mechanism. Then what we could of course do is here in the NGM init register on that activated route and the query params, subscribe to that. Then one by one, expose those values to our template, and then basically map them here on our queryParams directive.

[01:29] This is observable, and Angular templates play really well with observables. What we can do here is to directly expose that activated route to our template, by changing that private to a public identifier. Then we can use here the async pipe. We can say activatedRoute.queryParams.

[01:50] I can use the async pipe to register that observable, and get that value bound to the query params directive here. If we save that, and we add here some token, 1234, if we click now to the details page, you can see how that token gets carried on.

[02:07] Here we have another navigation. In the detail page, we have basically some code navigation that whenever we click the save button, we use here the router to navigate manually to another route. In this case, we move one level up, again to our people list. Again, if we click that save button, you can see how we lose again the token queryParam.

[02:29] Similarly, also here, we have to give the router the according information and tell him to preserve our queryParams. This is a simple flag, which you can set to true.

[02:40] Let's again try. Let's add here that token, 123. If we navigate to that detail page, we see the token remains there. Then we click, and we see we get redirected. The token still is there and gets carried on to the next page.
