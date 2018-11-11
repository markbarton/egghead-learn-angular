Instructor: [00:00] Here we have a list of people, which we have linked via that router link. Whenever we click on that button, we basically come to the detail page of that person, and we can go back and open another one, and see that basically visualized here in the detail part.

[00:15] Not always is it possible to actually use the router link and statically link items to each other, because, for instance, in this detail page, here, what we would like to achieve is that we change the name, and we click that save button. Whenever that record has been saved successfully, we would like to redirect back to our people list.

[00:33] In that case, the routing needs to happen programmatically, so whenever we click that save button, and we get a successful response from our server. Let's take a look at that person detail component here. 

[00:44] Here, we have a very simple input box, where we basically use a template variable to get access to that value. Whenever the user clicks that button, we invoke that save method, and we simply pass on the name of that person. 

[00:58] Now, in that save method here, we can actually use the people service, invoke that save method there, and pass ahead the person, which we have modified in this line here. That save method is actually just a very fake method which we have to implemented for the purpose of this demo here. 

[01:13] What we do is we grab the person with the same identifier, we set the name, then we return the observable, and simulate here some kind of delay which would usually happen when you call your back end API. Back in our person detail component, what we can do now is to actually subscribe to that observable. 

[01:31] Whenever that observable basically terminates, we would like it to redirect back to the people list. In order achieve that, we need to get an instance of the router injected into our component here. Let's grab an instance by the dependence injector to get to the router. 

[01:47] Now, inside our method here, we can actually access that router navigate properties. We have different kind of options here. One, we can navigate by URL, basically indicating a fixed string here. In this case, it would mean the path to that people list.

[02:02] Let's try that out. Whenever I'm here inside, I'm saving the button. I'm coming back to the people list again. The other possibility is the use the router's navigate method, which expects the same segments we usually give our router link.

[02:20] In this case, that would be people. Similarly, we enter here, we change the name, then there's the delay, and then we come back to our people list again. We don't actually always have to indicate the full path to our component where we want to navigate.

[02:34] In our case, for instance, the detail page can be seen as a sub-path, a child of that list path, which is simply one above the detail page. In that case, we can make use of the relative navigation.

[02:46] Simply passing here the relative path is actually not enough, because we also needed to tell the router that this is a relative navigation, and this navigation is relative to this route here. Remember we get activated route injected here as well in our constructor.

[03:00] We basically pass on that router access or navigation access property, where we specify that relativeTo property, and we pass in the instance of the current route. Again, if we try this out, if we navigate inside here, we can modify the record, save, there will be the delay, and then we will be redirected again to that people list.
